// Form validation utilities

export const validateEmail = (email) => {
  if (!email) {
    return 'Email is required';
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return 'Please enter a valid email address';
  }
  return '';
};

export const validatePassword = (password) => {
  if (!password) {
    return 'Password is required';
  }
  if (password.length < 4) {
    return 'Password must be at least 4 characters';
  }
  return '';
};

export const validateImageFile = (file) => {
  const maxSize = 5 * 1024 * 1024; // 5MB
  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];

  if (!file) {
    return 'Please select an image file';
  }

  if (!allowedTypes.includes(file.type)) {
    return 'Please upload a valid image file (JPEG, PNG, WebP, or GIF)';
  }

  if (file.size > maxSize) {
    return 'Image size must be less than 5MB';
  }

  return '';
};

export const validateImageUpload = (files, currentCount = 0, maxCount = 5) => {
  if (!files || files.length === 0) {
    return { valid: false, error: 'Please select at least one image' };
  }

  if (currentCount + files.length > maxCount) {
    return { 
      valid: false, 
      error: `You can only upload up to ${maxCount} images. You currently have ${currentCount}.` 
    };
  }

  const errors = [];
  Array.from(files).forEach((file, index) => {
    const error = validateImageFile(file);
    if (error) {
      errors.push(`Image ${index + 1}: ${error}`);
    }
  });

  if (errors.length > 0) {
    return { valid: false, error: errors.join(', ') };
  }

  return { valid: true, error: '' };
};
