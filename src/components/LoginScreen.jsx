import React, { useState } from 'react';
import { Leaf, AlertCircle } from 'lucide-react';
import { validateEmail, validatePassword } from '../utils/validation';

const LoginScreen = ({ loginEmail, setLoginEmail, loginPassword, setLoginPassword, loginError, handleLogin, isLoggingIn }) => {
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [touched, setTouched] = useState({ email: false, password: false });
  const [submitted, setSubmitted] = useState(false);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setLoginEmail(value);
    // Only validate on change if form has been submitted or field was previously touched
    if (submitted || touched.email) {
      setEmailError(validateEmail(value));
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setLoginPassword(value);
    // Only validate on change if form has been submitted or field was previously touched
    if (submitted || touched.password) {
      setPasswordError(validatePassword(value));
    }
  };

  const handleBlur = (field) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    // Only validate on blur if form has been submitted
    if (submitted) {
      if (field === 'email') {
        setEmailError(validateEmail(loginEmail));
      } else if (field === 'password') {
        setPasswordError(validatePassword(loginPassword));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTouched({ email: true, password: true });
    
    const emailErr = validateEmail(loginEmail);
    const passwordErr = validatePassword(loginPassword);
    
    setEmailError(emailErr);
    setPasswordError(passwordErr);
    
    if (!emailErr && !passwordErr) {
      handleLogin(e);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4 sm:p-6">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 sm:p-8">
        <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
          <Leaf className="text-green-600 w-8 h-8 sm:w-10 sm:h-10" />
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">EthiThread</h1>
            <p className="text-xs sm:text-sm text-slate-600">Sustainable Textile Sourcing</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={loginEmail}
              onChange={handleEmailChange}
              onBlur={() => handleBlur('email')}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors ${
                emailError ? 'border-red-300 bg-red-50' : 'border-slate-300'
              }`}
              placeholder="your@email.com"
              disabled={isLoggingIn}
            />
            {emailError && (
              <div className="mt-1.5 flex items-start gap-1.5 text-xs text-red-600">
                <AlertCircle size={14} className="flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{emailError}</span>
              </div>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={loginPassword}
              onChange={handlePasswordChange}
              onBlur={() => handleBlur('password')}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors ${
                passwordError ? 'border-red-300 bg-red-50' : 'border-slate-300'
              }`}
              placeholder="••••••••"
              disabled={isLoggingIn}
            />
            {passwordError && (
              <div className="mt-1.5 flex items-start gap-1.5 text-xs text-red-600">
                <AlertCircle size={14} className="flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{passwordError}</span>
              </div>
            )}
          </div>

          {loginError && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm flex items-start gap-2">
              <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
              <span>{loginError}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={isLoggingIn}
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
          >
            {isLoggingIn ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                Signing In...
              </>
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        <div className="mt-6 p-3 sm:p-4 bg-blue-50 rounded-lg">
          <p className="text-xs sm:text-sm font-medium text-blue-900 mb-2">Demo Accounts:</p>
          <div className="space-y-1 text-xs text-blue-800">
            <p><strong>Student:</strong> leo@fashion.edu / demo123</p>
            <p><strong>Boutique Owner:</strong> sarah@boutique.com / demo123</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
