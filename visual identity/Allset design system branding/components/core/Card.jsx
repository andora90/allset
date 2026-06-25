import React from 'react';

export function Card({ children, variant = 'light', tag, title, subtitle, style }) {
  const variants = {
    light:  { background: '#FFFFFF', border: '1px solid var(--allset-stone)' },
    cream:  { background: 'var(--allset-cream)', border: '1px solid var(--allset-stone)' },
    dark:   { background: 'var(--allset-obsidian)' },
    accent: { background: 'var(--allset-cream)', borderTop: '3px solid var(--allset-bark)', border: '1px solid var(--allset-stone)' },
  };
  const isDark = variant === 'dark';

  return (
    <div style={{
      padding: 'var(--card-pad-y) var(--card-pad-x)',
      borderRadius: 'var(--radius)',
      ...variants[variant],
      ...style,
    }}>
      {tag && (
        <div style={{
          fontFamily: 'var(--font-body)',
          fontSize: '10px',
          fontWeight: 500,
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color: isDark ? 'rgba(196,187,175,0.4)' : 'var(--allset-stone)',
          marginBottom: '16px',
        }}>{tag}</div>
      )}
      {title && (
        <div style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 400,
          fontSize: '32px',
          color: isDark ? 'var(--allset-cream)' : 'var(--allset-obsidian)',
          lineHeight: 1.1,
          marginBottom: subtitle ? '12px' : 0,
        }}>{title}</div>
      )}
      {subtitle && (
        <div style={{
          fontFamily: 'var(--font-body)',
          fontSize: '15px',
          color: isDark ? 'rgba(245,240,232,0.45)' : 'var(--allset-pebble)',
          lineHeight: 1.65,
          marginBottom: children ? '16px' : 0,
        }}>{subtitle}</div>
      )}
      {children}
    </div>
  );
}
