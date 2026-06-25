import React from 'react';

export function SlideEyebrow({ children, dark = true, style }) {
  return (
    <div style={{
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-label)',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: dark ? 'rgba(141,91,76,0.85)' : 'var(--allset-bark)',
      marginBottom: '16px',
      ...style,
    }}>
      {children}
    </div>
  );
}
