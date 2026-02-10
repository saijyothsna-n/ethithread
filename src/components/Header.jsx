import React from 'react';
import { Leaf, User, LogOut } from 'lucide-react';

const Header = ({ currentUser, onLogout, activeTab, setActiveTab, savedFabricsCount }) => {
  return (
    <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2 sm:gap-3">
            <Leaf className="text-green-600 w-6 h-6 sm:w-8 sm:h-8" />
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-slate-900">EthiThread</h1>
              <p className="text-xs sm:text-sm text-slate-600 hidden sm:block">AI-Powered Sustainable Sourcing</p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 bg-green-50 rounded-lg">
              <User size={16} className="sm:w-5 sm:h-5 text-green-600" />
              <div className="text-xs sm:text-sm">
                <div className="font-medium text-slate-900 truncate max-w-[100px] sm:max-w-none">{currentUser?.name}</div>
                <div className="text-slate-600 text-[10px] sm:text-xs capitalize hidden sm:block">{currentUser?.type}</div>
              </div>
            </div>
            <button
              onClick={onLogout}
              className="text-slate-600 hover:text-slate-900 p-1.5 sm:p-2 transition-colors"
              title="Logout"
              aria-label="Logout"
            >
              <LogOut size={18} className="sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-3 sm:gap-6 mt-3 sm:mt-4 border-b border-slate-200 overflow-x-auto scrollbar-hide">
          <button
            onClick={() => setActiveTab('discover')}
            className={`pb-2 sm:pb-3 px-2 font-medium transition-colors whitespace-nowrap text-sm sm:text-base ${
              activeTab === 'discover'
                ? 'text-green-600 border-b-2 border-green-600'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Discover
          </button>
          <button
            onClick={() => setActiveTab('suppliers')}
            className={`pb-2 sm:pb-3 px-2 font-medium transition-colors whitespace-nowrap text-sm sm:text-base ${
              activeTab === 'suppliers'
                ? 'text-green-600 border-b-2 border-green-600'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Suppliers
          </button>
          <button
            onClick={() => setActiveTab('saved')}
            className={`pb-2 sm:pb-3 px-2 font-medium transition-colors relative whitespace-nowrap text-sm sm:text-base inline-flex items-center gap-1.5 ${
              activeTab === 'saved'
                ? 'text-green-600 border-b-2 border-green-600'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>Saved</span>
            {savedFabricsCount > 0 && (
              <span className="bg-green-600 text-white text-[10px] sm:text-xs rounded-full min-w-[16px] sm:min-w-[20px] h-4 sm:h-5 px-1 sm:px-1.5 flex items-center justify-center font-semibold leading-none">
                {savedFabricsCount > 99 ? '99+' : savedFabricsCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
