import React, { forwardRef } from 'react';

const Input = forwardRef(({
  label,
  error,
  helperText,
  className = '',
  ...props
}, ref) => {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={`w-full px-3 py-2 border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
          error
            ? 'border-danger-300 dark:border-danger-600 bg-danger-50 dark:bg-danger-900/20'
            : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800'
        } text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 ${className}`}
        {...props}
      />
      {error && (
        <p className="text-sm text-danger-600 dark:text-danger-400">{error}</p>
      )}
      {helperText && !error && (
        <p className="text-sm text-gray-500 dark:text-gray-400">{helperText}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
