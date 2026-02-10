import React, { useState } from 'react';
import { Upload, ArrowRight, X, Filter, ChevronDown, AlertCircle, Loader } from 'lucide-react';
import { validateImageUpload } from '../utils/validation';

const UploadSection = ({
  uploadedImages,
  handleImageUpload,
  removeImage,
  analyzeImages,
  isAnalyzing,
  filterOpen,
  setFilterOpen,
  filters,
  setFilters,
  uploadError,
  setUploadError
}) => {
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = async (e) => {
    const files = Array.from(e.target.files || []);
    setUploadError('');
    
    if (files.length === 0) return;

    const validation = validateImageUpload(files, uploadedImages.length, 5);
    if (!validation.valid) {
      setUploadError(validation.error);
      e.target.value = '';
      return;
    }

    setIsUploading(true);
    setUploadError('');

    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      handleImageUpload({ target: { files } });
    } catch (error) {
      setUploadError('Failed to process images. Please try again.');
      console.error('Image upload error:', error);
    } finally {
      setIsUploading(false);
      e.target.value = '';
    }
  };

  return (
    <section className="bg-white rounded-xl shadow-sm p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-4 mb-4">
        <div className="flex-1">
          <h2 className="text-lg sm:text-xl font-semibold text-slate-900 mb-1 sm:mb-2">Upload Your Mood Board</h2>
          <p className="text-sm sm:text-base text-slate-600">Add 2-5 inspiration images to find matching sustainable fabrics</p>
        </div>
        <button
          onClick={() => setFilterOpen(!filterOpen)}
          className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors text-sm sm:text-base self-start sm:self-auto"
          aria-label="Toggle filters"
        >
          <Filter size={16} className="sm:w-[18px] sm:h-[18px]" />
          <span className="hidden sm:inline">Filters</span>
          <ChevronDown size={14} className={`sm:w-4 sm:h-4 transition-transform ${filterOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Filter Panel */}
      {filterOpen && (
        <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-slate-50 rounded-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div>
            <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1 sm:mb-2">Water Usage</label>
            <select
              value={filters.waterUsage}
              onChange={(e) => setFilters({...filters, waterUsage: e.target.value})}
              className="w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-slate-300 rounded-lg text-xs sm:text-sm"
            >
              <option value="all">All</option>
              <option value="low">Low Only</option>
              <option value="medium">Medium or Better</option>
            </select>
          </div>
          <div>
            <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1 sm:mb-2">CO₂ Score</label>
            <select
              value={filters.co2Score}
              onChange={(e) => setFilters({...filters, co2Score: e.target.value})}
              className="w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-slate-300 rounded-lg text-xs sm:text-sm"
            >
              <option value="all">All Grades</option>
              <option value="A">Grade A Only</option>
              <option value="B">Grade B or Better</option>
            </select>
          </div>
          <div>
            <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1 sm:mb-2">Certification</label>
            <select
              value={filters.certification}
              onChange={(e) => setFilters({...filters, certification: e.target.value})}
              className="w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-slate-300 rounded-lg text-xs sm:text-sm"
            >
              <option value="all">All</option>
              <option value="GOTS">GOTS</option>
              <option value="OEKO-TEX">OEKO-TEX</option>
              <option value="GRS">GRS</option>
            </select>
          </div>
          <div>
            <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1 sm:mb-2">
              Max Price: ${filters.priceMax}/m
            </label>
            <input
              type="range"
              min="10"
              max="50"
              value={filters.priceMax}
              onChange={(e) => setFilters({...filters, priceMax: parseInt(e.target.value)})}
              className="w-full"
            />
          </div>
        </div>
      )}

      {/* Error Message */}
      {uploadError && (
        <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-xs sm:text-sm flex items-start gap-2">
          <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
          <span>{uploadError}</span>
        </div>
      )}
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-4 mb-4 sm:mb-6">
        {uploadedImages.map((img, idx) => {
          const src = typeof img === 'string' ? img : img?.url;
          const id = typeof img === 'string' ? img : img?.id;
          const label = `Mood ${idx + 1}`;
          return (
            <div key={id ?? idx} className="relative">
              <div className="relative aspect-square rounded-lg overflow-hidden border-2 border-slate-200">
                <img
                  src={src}
                  alt={label}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => removeImage(idx)}
                  className="absolute top-1 sm:top-2 right-1 sm:right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                  aria-label={`Remove ${label}`}
                >
                  <X size={12} className="sm:w-4 sm:h-4" />
                </button>
              </div>
              <span className="block text-center text-xs font-medium text-slate-600 mt-1" aria-hidden="true">{label}</span>
            </div>
          );
        })}
        
        {uploadedImages.length < 5 && (
          <label className={`aspect-square rounded-lg border-2 border-dashed border-slate-300 flex flex-col items-center justify-center cursor-pointer hover:border-green-500 hover:bg-green-50 transition-colors ${isUploading ? 'opacity-50 cursor-wait' : ''}`}>
            {isUploading ? (
              <Loader className="text-slate-400 mb-2 animate-spin" size={24} />
            ) : (
              <Upload className="text-slate-400 mb-1 sm:mb-2 sm:w-8 sm:h-8" size={24} />
            )}
            <span className="text-xs sm:text-sm text-slate-600 px-2 text-center">{isUploading ? 'Uploading...' : 'Upload'}</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
              multiple
              disabled={isUploading}
            />
          </label>
        )}
      </div>

      <button
        onClick={analyzeImages}
        disabled={uploadedImages.length === 0 || isAnalyzing || isUploading}
        className="w-full bg-green-600 text-white py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-green-700 disabled:bg-slate-300 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-colors text-sm sm:text-base"
      >
        {isAnalyzing ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white"></div>
            <span className="hidden sm:inline">Analyzing Your Vision...</span>
            <span className="sm:hidden">Analyzing...</span>
          </>
        ) : (
          <>
            Find Sustainable Fabrics
            <ArrowRight size={18} className="sm:w-5 sm:h-5" />
          </>
        )}
      </button>
    </section>
  );
};

export default UploadSection;
