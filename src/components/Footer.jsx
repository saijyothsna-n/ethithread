import React from 'react';
import { Leaf } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 mt-8 sm:mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <Leaf className="text-green-600 w-5 h-5 sm:w-6 sm:h-6" />
              <span className="font-bold text-slate-900 text-base sm:text-lg">EthiThread</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600">Making sustainable fashion accessible to independent designers worldwide.</p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-2 sm:mb-3 text-sm sm:text-base">Platform</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-600">
              <li>How It Works</li>
              <li>Sustainability Standards</li>
              <li>Supplier Verification</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-2 sm:mb-3 text-sm sm:text-base">Resources</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-600">
              <li>Material Guide</li>
              <li>Impact Calculator</li>
              <li>Design Tips</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-2 sm:mb-3 text-sm sm:text-base">Support</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-600">
              <li>Contact Us</li>
              <li>FAQ</li>
              <li>Become a Supplier</li>
            </ul>
          </div>
        </div>
        <div className="border-t pt-4 sm:pt-6 text-center text-xs sm:text-sm text-slate-600">
          <p>© 2026 EthiThread. Sustainable Fashion Starts Here.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
