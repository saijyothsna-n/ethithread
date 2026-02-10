import React from 'react';
import { Check, X, Info } from 'lucide-react';

const SwatchModal = ({ fabric, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-xl max-w-md w-full p-4 sm:p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-start mb-3 sm:mb-4">
          <div className="bg-green-100 rounded-full p-2 sm:p-3">
            <Check className="text-green-600" size={20} className="sm:w-6 sm:h-6" />
          </div>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 transition-colors"
            aria-label="Close modal"
          >
            <X size={20} className="sm:w-6 sm:h-6" />
          </button>
        </div>
        
        <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">Swatch Request Sent!</h3>
        <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6">
          Your sample request for <strong>{fabric.name}</strong> has been sent to {fabric.supplier.name}.
        </p>
        
        <div className="bg-slate-50 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 space-y-2 sm:space-y-3">
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <span className="text-slate-600">Supplier:</span>
            <span className="font-semibold text-right ml-2">{fabric.supplier.name}</span>
          </div>
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <span className="text-slate-600">Location:</span>
            <span className="font-semibold">{fabric.supplier.country}</span>
          </div>
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <span className="text-slate-600">Estimated Delivery:</span>
            <span className="font-semibold">{fabric.deliveryDays} business days</span>
          </div>
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <span className="text-slate-600">Sample Size:</span>
            <span className="font-semibold">10cm × 10cm</span>
          </div>
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <span className="text-slate-600">Sample Cost:</span>
            <span className="font-semibold text-green-600">Free</span>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
          <div className="flex gap-2 sm:gap-3">
            <Info size={18} className="sm:w-5 sm:h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-blue-900">
              <p className="font-medium mb-1">What happens next?</p>
              <p className="text-blue-800">The supplier will contact you at your registered email to confirm shipping details and discuss bulk pricing.</p>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full bg-green-600 text-white py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-sm sm:text-base"
        >
          Got it, thanks!
        </button>
      </div>
    </div>
  );
};

export default SwatchModal;
