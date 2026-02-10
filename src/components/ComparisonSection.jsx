import React from 'react';
import { Star } from 'lucide-react';
import { getWaterBadgeColor, getCO2BadgeColor } from '../utils/badgeColors';

const ComparisonSection = ({ selectedFabrics }) => {
  return (
    <section className="bg-white rounded-xl shadow-sm p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
      <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-4 sm:mb-6">Side-by-Side Comparison</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        {selectedFabrics.map((fabric) => (
          <div key={fabric.id}>
            <img src={fabric.image} alt={fabric.name} className="w-full h-32 sm:h-40 object-cover rounded-lg mb-3 sm:mb-4" />
            <h4 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3">{fabric.name}</h4>
            
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between">
                <span className="text-slate-600">Match Score:</span>
                <span className="font-semibold text-green-600">{fabric.matchScore}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Water Usage:</span>
                <div className="flex items-center gap-2">
                  <span className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs ${getWaterBadgeColor(fabric.waterUsage)}`}>
                    {fabric.waterLiters}L/m
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600">CO₂ Impact:</span>
                <div className="flex items-center gap-2">
                  <span className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs ${getCO2BadgeColor(fabric.co2Score)}`}>
                    {fabric.co2Kg}kg CO₂
                  </span>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Price/Meter:</span>
                <span className="font-semibold">${fabric.pricePerMeter}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Min Order:</span>
                <span className="font-semibold">{fabric.moq}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Delivery:</span>
                <span className="font-semibold">{fabric.deliveryDays} days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Supplier Rating:</span>
                <span className="flex items-center gap-1">
                  <Star size={12} className="sm:w-3.5 sm:h-3.5 text-yellow-500 fill-yellow-500" />
                  <span className="font-semibold">{fabric.supplier.rating}</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ComparisonSection;
