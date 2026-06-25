import React from 'react';

export function Badge({ children, variant = 'default', style }) {
  const variants = {
    default:   { background: 'var(--allset-obsidian)', color: 'var(--allset-cream)' },
    outlined:  { background: 'transparent', color: 'var(--allset-obsidian)', border: '1px solid var(--obsidian-12)' },
    accent:    { background: 'var(--bark-12)', color: 'var(--allset-bark)', border: '1px solid var(--bark-20)' },
    light:     { background: 'var(--obsidian-06)', color: 'var(--allset-dark-bark)' },
    'on-dark': { background: 'var(--cream-10)', color: 'var(--allset-cream)' },
    success:   { background: 'var(--allset-obsidian)', color: 'var(--allset-cream)' },
  };

  return (
    <span style={{
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: '11px',
      letterSpacing: '1.5px',
      textTransform: 'uppercase',
      padding: '5px 14px',
      display: 'inline-block',
      lineHeight: 1,
      borderRadius: 'var(--radius)',
      ...variants[variant],
      ...style,
    }}>
      {children}
    </span>
  );
}
