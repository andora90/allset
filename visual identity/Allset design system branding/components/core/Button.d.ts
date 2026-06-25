import React from 'react';

/**
 * @startingPoint section="Components" subtitle="CTA button — primary, secondary, ghost, accent" viewport="700x100"
 */
export interface ButtonProps {
  /** Button label or content */
  children: React.ReactNode;
  /** Visual style */
  variant?: 'primary' | 'secondary' | 'ghost' | 'accent' | 'on-dark';
  /** Size */
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export declare function Button(props: ButtonProps): JSX.Element;
