import React, { useState, useEffect } from 'react';
import { Heart, AlertCircle } from 'lucide-react';
import { FABRIC_DATABASE } from './data/fabricDatabase';
import { MOCK_USERS } from './data/mockUsers';
import { storage } from './utils/storage';
import LoginScreen from './components/LoginScreen';
import Header from './components/Header';
import UploadSection from './components/UploadSection';
import FabricCard from './components/FabricCard';
import SupplierCard from './components/SupplierCard';
import SwatchModal from './components/SwatchModal';
import ComparisonSection from './components/ComparisonSection';
import Footer from './components/Footer';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [showLogin, setShowLogin] = useState(true);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const [uploadedImages, setUploadedImages] = useState([]);
  const [matches, setMatches] = useState([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisError, setAnalysisError] = useState('');
  const [selectedFabrics, setSelectedFabrics] = useState([]);
  const [showComparison, setShowComparison] = useState(false);
  const [requestedSwatch, setRequestedSwatch] = useState(null);
  const [requestedSwatchIds, setRequestedSwatchIds] = useState([]);
  const [savedFabrics, setSavedFabrics] = useState([]);
  const [uploadError, setUploadError] = useState('');
  
  const [activeTab, setActiveTab] = useState('discover');
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    waterUsage: 'all',
    co2Score: 'all',
    certification: 'all',
    priceMax: 50
  });

  // Load data from localStorage on mount
  useEffect(() => {
    try {
      const savedUser = storage.getUser();
      if (savedUser) {
        setCurrentUser(savedUser);
        setShowLogin(false);
        
        // Load saved fabrics
        const savedFabricIds = storage.getSavedFabricIds();
        if (savedFabricIds.length > 0) {
          const fabrics = savedFabricIds
            .map(id => FABRIC_DATABASE.find(f => f.id === id))
            .filter(Boolean);
          setSavedFabrics(fabrics);
        }
        
        // Load filters
        const savedFilters = storage.getFilters();
        if (savedFilters) {
          setFilters(savedFilters);
        }
        
        // Load requested swatch IDs
        const savedRequestedIds = storage.getRequestedSwatchIds();
        if (savedRequestedIds.length > 0) {
          setRequestedSwatchIds(savedRequestedIds);
        }
      }
    } catch (error) {
      console.error('Error loading saved data:', error);
    }
  }, []);

  // Save saved fabrics to localStorage whenever they change
  useEffect(() => {
    if (currentUser) {
      storage.saveFabrics(savedFabrics);
    }
  }, [savedFabrics, currentUser]);

  // Save filters to localStorage whenever they change
  useEffect(() => {
    if (currentUser) {
      storage.saveFilters(filters);
    }
  }, [filters, currentUser]);

  // Clear analysis error and results when filters change
  // This ensures old error messages don't persist with new filter settings
  useEffect(() => {
    if (analysisError || matches.length > 0) {
      setAnalysisError('');
      setMatches([]);
    }
  }, [filters]);

  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError('');

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const user = MOCK_USERS[loginEmail];
      
      if (user && user.password === loginPassword) {
        const userData = { ...user, email: loginEmail };
        setCurrentUser(userData);
        
        // Load saved fabrics from storage or user defaults
        const savedFabricIds = storage.getSavedFabricIds();
        let fabrics = [];
        if (savedFabricIds.length > 0) {
          fabrics = savedFabricIds
            .map(id => FABRIC_DATABASE.find(f => f.id === id))
            .filter(Boolean);
        } else {
          fabrics = user.savedFabrics || [];
        }
        setSavedFabrics(fabrics);
        
        // Save user to localStorage
        storage.saveUser(userData);
        
        setLoginError('');
        setShowLogin(false);
      } else {
        setLoginError('Invalid email or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      setLoginError('An error occurred during login. Please try again.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = () => {
    storage.clearUser();
    storage.clearRequestedSwatches();
    setCurrentUser(null);
    setUploadedImages(prev => {
      prev.forEach((img) => {
        if (img?.url?.startsWith?.('blob:')) URL.revokeObjectURL(img.url);
      });
      return [];
    });
    setMatches([]);
    setSavedFabrics([]);
    setRequestedSwatchIds([]);
    setShowLogin(true);
    setActiveTab('discover');
    setLoginEmail('');
    setLoginPassword('');
    setLoginError('');
  };

  // Simulate AI matching with more sophisticated logic
  const analyzeImages = async () => {
    // Prevent multiple simultaneous analysis requests
    if (isAnalyzing) {
      return;
    }

    if (uploadedImages.length === 0) {
      setUploadError('Please upload at least one image');
      return;
    }

    setIsAnalyzing(true);
    setAnalysisError('');
    setMatches([]);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2500));
      
      // Simulate color/texture analysis based on user type and preferences
      const userPreferences = currentUser?.preferences || [];
      
      const scoredFabrics = FABRIC_DATABASE.map(fabric => {
        let baseScore = Math.floor(Math.random() * 10) + 85; // 85-95 base
        
        // Boost score based on user preferences
        if (userPreferences.some(pref => fabric.tags.includes(pref))) {
          baseScore += 3;
        }
        
        // Boost eco-friendly fabrics
        if (fabric.co2Score === 'A' || fabric.waterUsage === 'low') {
          baseScore += 2;
        }
        
        return {
          ...fabric,
          matchScore: Math.min(99, baseScore)
        };
      });

      // Sort by match score and filter by active filters
      let filteredFabrics = scoredFabrics;
      
      if (filters.waterUsage !== 'all') {
        filteredFabrics = filteredFabrics.filter(f => f.waterUsage === filters.waterUsage);
      }
      if (filters.co2Score !== 'all') {
        filteredFabrics = filteredFabrics.filter(f => f.co2Score === filters.co2Score);
      }
      if (filters.certification !== 'all') {
        filteredFabrics = filteredFabrics.filter(f => 
          f.certifications.some(cert => cert.includes(filters.certification))
        );
      }
      
      filteredFabrics = filteredFabrics.filter(f => f.pricePerMeter <= filters.priceMax);
      
      const topMatches = filteredFabrics
        .sort((a, b) => b.matchScore - a.matchScore)
        .slice(0, 6);

      if (topMatches.length === 0) {
        setAnalysisError('No fabrics match your current filters. Try adjusting your filter settings.');
        setMatches([]);
      } else {
        setAnalysisError(''); // Clear any previous error when matches are found
        setMatches(topMatches);
      }
    } catch (error) {
      console.error('Analysis error:', error);
      setAnalysisError('Failed to analyze images. Please try again.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;
    
    try {
      const newImages = files.map((file) => {
        const url = URL.createObjectURL(file);
        return { id: url, url };
      });
      setUploadedImages(prev => [...prev, ...newImages].slice(0, 5));
      setUploadError('');
    } catch (error) {
      console.error('Image upload error:', error);
      setUploadError('Failed to process images. Please try again.');
    }
  };

  const removeImage = (index) => {
    setUploadedImages(prev => {
      const removed = prev[index];
      if (removed && removed.url && removed.url.startsWith('blob:')) {
        URL.revokeObjectURL(removed.url);
      }
      return prev.filter((_, i) => i !== index);
    });
  };

  const toggleFabricSelection = (fabric) => {
    setSelectedFabrics(prev => {
      const isSelected = prev.find(f => f.id === fabric.id);
      if (isSelected) {
        return prev.filter(f => f.id !== fabric.id);
      }
      if (prev.length >= 2) {
        return [prev[1], fabric];
      }
      return [...prev, fabric];
    });
  };

  const toggleSaveFabric = (fabric) => {
    setSavedFabrics(prev => {
      const isSaved = prev.find(f => f.id === fabric.id);
      if (isSaved) {
        return prev.filter(f => f.id !== fabric.id);
      }
      return [...prev, fabric];
    });
  };

  const isFabricSaved = (fabricId) => {
    return savedFabrics.some(f => f.id === fabricId);
  };

  const handleRequestSwatch = (fabric) => {
    setRequestedSwatch(fabric);
    setRequestedSwatchIds(prev => {
      if (prev.includes(fabric.id)) return prev;
      const next = [...prev, fabric.id];
      storage.saveRequestedSwatchIds(next);
      return next;
    });
  };

  // Login Screen
  if (showLogin) {
    return (
      <LoginScreen
        loginEmail={loginEmail}
        setLoginEmail={setLoginEmail}
        loginPassword={loginPassword}
        setLoginPassword={setLoginPassword}
        loginError={loginError}
        handleLogin={handleLogin}
        isLoggingIn={isLoggingIn}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header
        currentUser={currentUser}
        onLogout={handleLogout}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        savedFabricsCount={savedFabrics.length}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Discover Tab */}
        {activeTab === 'discover' && (
          <>
            <UploadSection
              uploadedImages={uploadedImages}
              handleImageUpload={handleImageUpload}
              removeImage={removeImage}
              analyzeImages={analyzeImages}
              isAnalyzing={isAnalyzing}
              filterOpen={filterOpen}
              setFilterOpen={setFilterOpen}
              filters={filters}
              setFilters={setFilters}
              uploadError={uploadError}
              setUploadError={setUploadError}
            />

            {/* Loading State */}
            {isAnalyzing && (
              <div className="text-center py-8 sm:py-12">
                <div className="inline-block animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-b-2 border-green-600 mb-3 sm:mb-4"></div>
                <p className="text-slate-600 font-medium text-sm sm:text-base">Analyzing visual aesthetics and sustainability...</p>
                <p className="text-slate-500 text-xs sm:text-sm mt-2">Matching against 8 verified suppliers</p>
              </div>
            )}

            {/* Error State */}
            {analysisError && !isAnalyzing && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 flex items-start gap-2">
                <AlertCircle size={20} className="flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium mb-1">Analysis Error</p>
                  <p className="text-sm">{analysisError}</p>
                </div>
              </div>
            )}

            {/* Results Section */}
            {matches.length > 0 && (
              <>
                <section className="mb-6 sm:mb-8">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div>
                      <h2 className="text-lg sm:text-xl font-semibold text-slate-900">Top Fabric Matches</h2>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1">Found {matches.length} fabrics matching your vision</p>
                    </div>
                    {selectedFabrics.length === 2 && (
                      <button
                        onClick={() => setShowComparison(!showComparison)}
                        className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base"
                      >
                        {showComparison ? 'Hide' : 'Show'} Comparison
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {matches.map((fabric) => (
                      <FabricCard
                        key={fabric.id}
                        fabric={fabric}
                        isSelected={selectedFabrics.find(f => f.id === fabric.id)}
                        isSaved={isFabricSaved(fabric.id)}
                        isSwatchRequested={requestedSwatchIds.includes(fabric.id)}
                        onToggleSelection={toggleFabricSelection}
                        onToggleSave={toggleSaveFabric}
                        onRequestSwatch={handleRequestSwatch}
                        showMatchScore={true}
                      />
                    ))}
                  </div>
                </section>

                {/* Comparison Section */}
                {showComparison && selectedFabrics.length === 2 && (
                  <ComparisonSection selectedFabrics={selectedFabrics} />
                )}
              </>
            )}
          </>
        )}

        {/* Suppliers Tab */}
        {activeTab === 'suppliers' && (
          <section className="bg-white rounded-xl shadow-sm p-4 sm:p-6 lg:p-8">
            <h2 className="text-lg sm:text-xl font-semibold text-slate-900 mb-1 sm:mb-2">Verified Sustainable Suppliers</h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-4 sm:mb-6">All suppliers are vetted for sustainability credentials and ethical practices</p>
            
            <div className="space-y-3 sm:space-y-4">
              {[...new Map(FABRIC_DATABASE.map(f => [f.supplier.name, f.supplier])).values()].map((supplier, idx) => (
                <SupplierCard key={idx} supplier={supplier} />
              ))}
            </div>
          </section>
        )}

        {/* Saved Fabrics Tab */}
        {activeTab === 'saved' && (
          <section className="bg-white rounded-xl shadow-sm p-4 sm:p-6 lg:p-8">
            <h2 className="text-lg sm:text-xl font-semibold text-slate-900 mb-1 sm:mb-2">Your Saved Fabrics</h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-4 sm:mb-6">
              {savedFabrics.length > 0 
                ? `You have ${savedFabrics.length} fabric${savedFabrics.length !== 1 ? 's' : ''} saved`
                : 'No fabrics saved yet. Start discovering sustainable materials!'}
            </p>
            
            {savedFabrics.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {savedFabrics.map((fabric) => (
                  <FabricCard
                    key={fabric.id}
                    fabric={fabric}
                    isSelected={selectedFabrics.find(f => f.id === fabric.id)}
                    isSaved={true}
                    isSwatchRequested={requestedSwatchIds.includes(fabric.id)}
                    onToggleSelection={toggleFabricSelection}
                    onToggleSave={toggleSaveFabric}
                    onRequestSwatch={handleRequestSwatch}
                    showMatchScore={false}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-8 sm:py-12">
                <Heart size={40} className="sm:w-12 sm:h-12 text-slate-300 mx-auto mb-3 sm:mb-4" />
                <p className="text-sm sm:text-base text-slate-500 mb-2">Start saving fabrics from the Discover tab</p>
                <button
                  onClick={() => setActiveTab('discover')}
                  className="mt-3 sm:mt-4 px-4 sm:px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base"
                >
                  Discover Fabrics
                </button>
              </div>
            )}
          </section>
        )}

        {/* Swatch Request Modal */}
        {requestedSwatch && (
          <SwatchModal
            fabric={requestedSwatch}
            onClose={() => setRequestedSwatch(null)}
          />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
