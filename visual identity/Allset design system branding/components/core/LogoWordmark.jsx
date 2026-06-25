import React from 'react';

export function LogoWordmark({ dark = false, size = 'md', style }) {
  const sizes = { sm: 32, md: 48, lg: 72, xl: 96 };
  const fs = sizes[size] || sizes.md;

  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', ...style }}>
      <span style={{
        fontFamily: 'var(--font-display)',
        fontStyle: 'italic',
        fontWeight: 400,
        fontSize: fs + 'px',
        color: dark ? 'var(--allset-cream)' : 'var(--allset-obsidian)',
        lineHeight: 1,
        letterSpacing: '-1px',
      }}>allset</span>
      <div style={{
        width: '100%',
        height: '2px',
        background: 'var(--allset-bark)',
        marginTop: Math.round(fs * 0.07) + 'px',
      }} />
    </div>
  );
}
