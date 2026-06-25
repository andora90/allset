import React from 'react';

export interface CardProps {
  children?: React.ReactNode;
  /** Visual style */
  variant?: 'light' | 'cream' | 'dark' | 'accent';
  /** Optional uppercase tag label */
  tag?: string;
  /** Optional Cormorant title */
  title?: string;
  /** Optional DM Sans subtitle */
  subtitle?: string;
  style?: React.CSSProperties;
}

export declare function Card(props: CardProps): JSX.Element;
