import React from 'react';
import { Droplet, Leaf, Award, ShoppingCart, Star, Heart, Check } from 'lucide-react';
import { getWaterBadgeColor, getCO2BadgeColor } from '../utils/badgeColors';

const FabricCard = ({ 
  fabric, 
  isSelected, 
  isSaved, 
  isSwatchRequested = false,
  onToggleSelection, 
  onToggleSave, 
  onRequestSwatch,
  showMatchScore = true 
}) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-sm overflow-hidden border-2 transition-all ${
        isSelected
          ? 'border-green-500'
          : 'border-transparent'
      }`}
    >
      <div className="relative">
        <img src={fabric.image} alt={fabric.name} className="w-full h-48 object-cover" />
        {showMatchScore && (
          <div className="absolute top-3 right-3 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {fabric.matchScore}% Match
          </div>
        )}
        <button
          onClick={() => onToggleSave(fabric)}
          className={`absolute top-3 left-3 p-2 rounded-full transition-colors ${
            isSaved
              ? 'bg-red-500 text-white'
              : 'bg-white text-slate-600 hover:bg-slate-100'
          }`}
          title={isSaved ? 'Remove from saved' : 'Save fabric'}
        >
          <Heart size={18} className={isSaved ? 'fill-current' : ''} />
        </button>
      </div>
      
      <div className="p-3 sm:p-4 lg:p-5">
        <h3 className="font-semibold text-base sm:text-lg text-slate-900 mb-1 sm:mb-2 line-clamp-1">{fabric.name}</h3>
        <p className="text-xs sm:text-sm text-slate-600 mb-3 sm:mb-4 line-clamp-2">{fabric.description}</p>
        
        {/* Sustainability Metrics */}
        <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Droplet size={14} className="sm:w-4 sm:h-4 text-blue-500" />
              <span className="text-[10px] sm:text-xs text-slate-600">Water</span>
            </div>
            <span className={`text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded font-medium ${getWaterBadgeColor(fabric.waterUsage)}`}>
              {fabric.waterLiters}L/m
            </span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Leaf size={14} className="sm:w-4 sm:h-4 text-green-500" />
              <span className="text-[10px] sm:text-xs text-slate-600">CO₂ Impact</span>
            </div>
            <span className={`text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded font-semibold ${getCO2BadgeColor(fabric.co2Score)}`}>
              {fabric.co2Kg}kg CO₂
            </span>
          </div>
          
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
            <Award size={14} className="sm:w-4 sm:h-4 text-purple-500" />
            {fabric.certifications.map((cert, idx) => (
              <span key={idx} className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded bg-purple-100 text-purple-800">
                {cert}
              </span>
            ))}
          </div>
        </div>

        {/* Technical Details */}
        <div className="border-t pt-2 sm:pt-3 lg:pt-4 space-y-1 sm:space-y-2 text-[10px] sm:text-xs text-slate-600 mb-3 sm:mb-4">
          <div className="flex justify-between">
            <span>Composition:</span>
            <span className="font-medium text-slate-900 text-right ml-2">{fabric.composition}</span>
          </div>
          <div className="flex justify-between">
            <span>Weight:</span>
            <span className="font-medium text-slate-900">{fabric.weight}</span>
          </div>
        </div>

        {/* Pricing */}
        <div className="border-t pt-2 sm:pt-3 lg:pt-4 space-y-1 sm:space-y-2 mb-3 sm:mb-4">
          <div className="flex justify-between text-xs sm:text-sm">
            <span className="text-slate-600">Price:</span>
            <span className="font-semibold text-base sm:text-lg">${fabric.pricePerMeter}/m</span>
          </div>
          <div className="flex justify-between text-xs sm:text-sm">
            <span className="text-slate-600">Min Order:</span>
            <span className="font-semibold">{fabric.moq}</span>
          </div>
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <span className="text-slate-600">Supplier:</span>
            <div className="flex items-center gap-1">
              <Star size={12} className="sm:w-3.5 sm:h-3.5 text-yellow-500 fill-yellow-500" />
              <span className="font-semibold">{fabric.supplier.rating}</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-1.5 sm:space-y-2">
          <button
            onClick={() => !isSwatchRequested && onRequestSwatch(fabric)}
            disabled={isSwatchRequested}
            title={isSwatchRequested ? 'Swatch request sent' : 'Request a fabric swatch'}
            className={`w-full py-1.5 sm:py-2 rounded-lg font-medium flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm transition-colors ${
              isSwatchRequested
                ? 'bg-slate-100 text-slate-500 cursor-default'
                : 'bg-green-600 text-white hover:bg-green-700'
            }`}
          >
            {isSwatchRequested ? (
              <>
                <Check size={14} className="sm:w-4 sm:h-4" />
                <span>Requested</span>
              </>
            ) : (
              <>
                <ShoppingCart size={14} className="sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Request Swatch</span>
                <span className="sm:hidden">Swatch</span>
              </>
            )}
          </button>
          <button
            onClick={() => onToggleSelection(fabric)}
            className={`w-full py-1.5 sm:py-2 rounded-lg font-medium border-2 transition-all text-xs sm:text-sm ${
              isSelected
                ? 'bg-green-50 border-green-500 text-green-700'
                : 'border-slate-300 text-slate-700 hover:border-slate-400'
            }`}
          >
            {isSelected ? (
              <>
                <span className="hidden sm:inline">✓ Selected for Comparison</span>
                <span className="sm:hidden">✓ Selected</span>
              </>
            ) : (
              <>
                <span className="hidden sm:inline">Select to Compare</span>
                <span className="sm:hidden">Compare</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FabricCard;
