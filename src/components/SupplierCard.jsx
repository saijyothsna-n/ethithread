import React from 'react';
import { Mail, Phone, MapPin, Star, Award } from 'lucide-react';

const SupplierCard = ({ supplier }) => {
  return (
    <div className="bg-slate-50 rounded-lg p-4 sm:p-6 border border-slate-200">
      <div className="flex items-start justify-between mb-3 sm:mb-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2 flex-wrap">
            <h3 className="font-semibold text-base sm:text-lg text-slate-900 truncate">{supplier.name}</h3>
            {supplier.verified && (
              <Award size={16} className="sm:w-[18px] sm:h-[18px] text-green-600 flex-shrink-0" title="Verified Supplier" />
            )}
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-slate-600">
            <MapPin size={12} className="sm:w-3.5 sm:h-3.5 flex-shrink-0" />
            <span className="truncate">{supplier.country}</span>
          </div>
        </div>
        <div className="flex items-center gap-1 flex-shrink-0 ml-2">
          <Star size={16} className="sm:w-[18px] sm:h-[18px] text-yellow-500 fill-yellow-500" />
          <span className="font-semibold text-slate-900 text-sm sm:text-base">{supplier.rating}</span>
        </div>
      </div>

      <div className="text-xs sm:text-sm text-slate-600 mb-3 sm:mb-4">
        <p>Active for {supplier.yearsActive} years</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
        <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
          <Mail size={14} className="sm:w-4 sm:h-4 text-slate-400 flex-shrink-0" />
          <span className="text-slate-600 truncate">{supplier.email}</span>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
          <Phone size={14} className="sm:w-4 sm:h-4 text-slate-400 flex-shrink-0" />
          <span className="text-slate-600">{supplier.phone}</span>
        </div>
      </div>

      <button className="w-full bg-slate-100 text-slate-700 py-2 rounded-lg font-medium hover:bg-slate-200 transition-colors text-xs sm:text-sm">
        View Full Profile
      </button>
    </div>
  );
};

export default SupplierCard;
