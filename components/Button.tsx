import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className = '',
  disabled = false,
  variant = 'primary',
}) => {
  const baseStyle =
    'font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-opacity-75 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none';

  let variantStyle = '';
  if (variant === 'primary') {
    variantStyle =
      'bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 hover:from-pink-600 hover:via-purple-700 hover:to-indigo-700 text-white focus:ring-purple-400';
  } else if (variant === 'secondary') {
    variantStyle =
      'bg-slate-600 hover:bg-slate-500 text-white focus:ring-slate-400';
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variantStyle} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
