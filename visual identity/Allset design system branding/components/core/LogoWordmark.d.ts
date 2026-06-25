import React from 'react';

export interface LogoWordmarkProps {
  /** Use cream text for dark/Obsidian backgrounds */
  dark?: boolean;
  /** Font size preset */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  style?: React.CSSProperties;
}

export declare function LogoWordmark(props: LogoWordmarkProps): JSX.Element;
