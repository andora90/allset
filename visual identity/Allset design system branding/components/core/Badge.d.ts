import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  /** Visual style */
  variant?: 'default' | 'outlined' | 'accent' | 'light' | 'on-dark';
  style?: React.CSSProperties;
}

export declare function Badge(props: BadgeProps): JSX.Element;
