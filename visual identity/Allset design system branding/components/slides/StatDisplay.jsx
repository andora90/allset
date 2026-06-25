import React from 'react';

export function StatDisplay({ value, label, dark = false, size = 'lg', style }) {
  const fontSizes = { sm: '60px', md: '80px', lg: '96px', xl: '120px' };
  const fs = fontSizes[size] || fontSizes.lg;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', ...style }}>
      <div style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 'var(--fw-light)',
        fontSize: fs,
        color: dark ? 'var(--allset-cream)' : 'var(--allset-obsidian)',
        lineHeight: 0.9,
        letterSpacing: '-3px',
        marginBottom: '16px',
      }}>{value}</div>
      <div style={{
        width: '32px',
        height: '1.5px',
        background: 'var(--allset-bark)',
        marginBottom: '16px',
      }} />
      <div style={{
        fontFamily: 'var(--font-body)',
        fontSize: '15px',
        fontWeight: 'var(--fw-light)',
        color: dark ? 'rgba(245,240,232,0.45)' : 'var(--allset-pebble)',
        lineHeight: 1.6,
        maxWidth: '200px',
      }}>{label}</div>
    </div>
  );
}
