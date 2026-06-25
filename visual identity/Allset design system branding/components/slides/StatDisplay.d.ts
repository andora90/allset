import React from 'react';

export interface StatDisplayProps {
  /** The big number or value — e.g. "3,5M" or "100%" */
  value: string;
  /** Descriptive label below the number */
  label: string;
  /** Use cream text for dark/Obsidian slide backgrounds */
  dark?: boolean;
  /** Number font size */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  style?: React.CSSProperties;
}

export declare function StatDisplay(props: StatDisplayProps): JSX.Element;
