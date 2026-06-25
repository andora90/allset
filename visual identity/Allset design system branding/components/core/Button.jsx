import React from 'react';

export function Button({ children, variant = 'primary', size = 'md', onClick, disabled, style }) {
  const sizes = {
    sm: { fontSize: '13px', padding: '10px 24px' },
    md: { fontSize: '15px', padding: '14px 32px' },
    lg: { fontSize: '17px', padding: '18px 40px' },
  };
  const variants = {
    primary:   { background: 'var(--allset-obsidian)', color: 'var(--allset-cream)', border: 'none' },
    secondary: { background: 'transparent', color: 'var(--allset-obsidian)', border: '1px solid var(--allset-obsidian)' },
    ghost:     { background: 'transparent', color: 'var(--allset-bark)', border: '1px solid var(--allset-bark)' },
    accent:    { background: 'var(--allset-bark)', color: 'var(--allset-cream)', border: 'none' },
    'on-dark': { background: 'var(--allset-cream)', color: 'var(--allset-obsidian)', border: 'none' },
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        fontFamily: 'var(--font-body)',
        fontWeight: 500,
        letterSpacing: '0.5px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        borderRadius: 'var(--radius)',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        lineHeight: 1,
        opacity: disabled ? 0.45 : 1,
        transition: 'opacity 0.15s',
        ...sizes[size],
        ...variants[variant],
        ...style,
      }}
    >
      {children}
    </button>
  );
}
