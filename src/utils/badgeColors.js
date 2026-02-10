export const getWaterBadgeColor = (usage) => {
  const colors = {
    low: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-red-100 text-red-800'
  };
  return colors[usage] || colors.medium;
};

export const getCO2BadgeColor = (score) => {
  const colors = {
    A: 'bg-green-600 text-white',
    B: 'bg-green-400 text-white',
    C: 'bg-yellow-400 text-white',
    D: 'bg-orange-400 text-white',
    F: 'bg-red-600 text-white'
  };
  return colors[score] || colors.C;
};
