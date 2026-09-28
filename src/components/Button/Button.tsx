import React from 'react';
import './Button.css';
import { Icons } from '../Icons/Icons';

// Common style for DM Sans (mirrored from input-fields.tsx)
const dmSansStyle: React.CSSProperties = {
  fontFamily: 'var(--FontFamily-Family, "DM Sans", sans-serif)',
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'brand' | 'success' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  asChild?: boolean; // For future Radix Slot support if needed
}

/**
 * Button - A standalone button component relying on Button.css
 * This component maps design system tokens to functional states without
 * relying on Tailwind utility classes for its core styling.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = '',
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      style,
      ...props
    },
    ref
  ) => {
    const renderIcon = (icon: React.ReactNode) => {
      // Back-compat: if a string is passed, treat it as an icon *name* from our `Icons` map.
      if (typeof icon === 'string') {
        const v = (Icons as Record<string, unknown> | undefined)?.[icon];
        if (typeof v === 'string') {
          return <span aria-hidden dangerouslySetInnerHTML={{ __html: v }} />;
        }
        if (typeof v === 'function') {
          const Comp = v as React.ComponentType;
          return <Comp />;
        }
      }

      return icon;
    };

    // Construct class names
    const classNames = [
      'button',
      `button--${variant}`,
      `button--${size}`,
      isLoading ? 'button--loading' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        ref={ref}
        className={classNames}
        disabled={disabled || isLoading}
        style={{ ...dmSansStyle, ...style }}
        {...props}
      >
        {isLoading && <span className="button__spinner" aria-hidden="true" />}
        
        {leftIcon && !isLoading && (
          <span className="button__icon button__icon--left" aria-hidden="true">
            {renderIcon(leftIcon)}
          </span>
        )}
        
        <span className="button__label">{children}</span>
        
        {rightIcon && !isLoading && (
          <span className="button__icon button__icon--right" aria-hidden="true">
            {renderIcon(rightIcon)}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
