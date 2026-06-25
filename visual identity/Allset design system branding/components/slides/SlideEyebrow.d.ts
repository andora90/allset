import React from 'react';

export interface SlideEyebrowProps {
  /** Label text — e.g. "01 — Le Constat" */
  children: React.ReactNode;
  /** true on dark/Obsidian slides (default), false on Cream slides */
  dark?: boolean;
  style?: React.CSSProperties;
}

export declare function SlideEyebrow(props: SlideEyebrowProps): JSX.Element;
