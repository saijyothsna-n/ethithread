// localStorage utility functions for persisting user data

const STORAGE_KEYS = {
  CURRENT_USER: 'ethithread_current_user',
  SAVED_FABRICS: 'ethithread_saved_fabrics',
  UPLOADED_IMAGES: 'ethithread_uploaded_images',
  FILTERS: 'ethithread_filters',
  REQUESTED_SWATCHES: 'ethithread_requested_swatches'
};

export const storage = {
  // User data
  saveUser: (user) => {
    try {
      localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
    } catch (error) {
      console.error('Error saving user:', error);
    }
  },

  getUser: () => {
    try {
      const user = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
      return user ? JSON.parse(user) : null;
    } catch (error) {
      console.error('Error getting user:', error);
      return null;
    }
  },

  clearUser: () => {
    try {
      localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
    } catch (error) {
      console.error('Error clearing user:', error);
    }
  },

  // Saved fabrics
  saveFabrics: (fabrics) => {
    try {
      // Only save fabric IDs to avoid storing large objects
      const fabricIds = fabrics.map(f => f.id);
      localStorage.setItem(STORAGE_KEYS.SAVED_FABRICS, JSON.stringify(fabricIds));
    } catch (error) {
      console.error('Error saving fabrics:', error);
    }
  },

  getSavedFabricIds: () => {
    try {
      const ids = localStorage.getItem(STORAGE_KEYS.SAVED_FABRICS);
      return ids ? JSON.parse(ids) : [];
    } catch (error) {
      console.error('Error getting saved fabrics:', error);
      return [];
    }
  },

  // Filters
  saveFilters: (filters) => {
    try {
      localStorage.setItem(STORAGE_KEYS.FILTERS, JSON.stringify(filters));
    } catch (error) {
      console.error('Error saving filters:', error);
    }
  },

  getFilters: () => {
    try {
      const filters = localStorage.getItem(STORAGE_KEYS.FILTERS);
      return filters ? JSON.parse(filters) : null;
    } catch (error) {
      console.error('Error getting filters:', error);
      return null;
    }
  },

  getRequestedSwatchIds: () => {
    try {
      const ids = localStorage.getItem(STORAGE_KEYS.REQUESTED_SWATCHES);
      return ids ? JSON.parse(ids) : [];
    } catch (error) {
      console.error('Error getting requested swatches:', error);
      return [];
    }
  },

  saveRequestedSwatchIds: (ids) => {
    try {
      localStorage.setItem(STORAGE_KEYS.REQUESTED_SWATCHES, JSON.stringify(ids));
    } catch (error) {
      console.error('Error saving requested swatches:', error);
    }
  },

  clearRequestedSwatches: () => {
    try {
      localStorage.removeItem(STORAGE_KEYS.REQUESTED_SWATCHES);
    } catch (error) {
      console.error('Error clearing requested swatches:', error);
    }
  },

  // Clear all data
  clearAll: () => {
    try {
      Object.values(STORAGE_KEYS).forEach(key => {
        localStorage.removeItem(key);
      });
    } catch (error) {
      console.error('Error clearing storage:', error);
    }
  }
};
