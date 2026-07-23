import React from 'react';

export default function Header() {
  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingBottom: '2.5rem',
      borderBottom: '1px solid rgba(0,0,0,0.06)',
      marginBottom: '2.5rem'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
        <div style={{
          width: '42px',
          height: '42px',
          borderRadius: '12px',
          background: '#0F172A',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: '800',
          fontSize: '1.25rem',
          boxShadow: '0 8px 16px rgba(15, 23, 42, 0.15)',
          letterSpacing: '-0.03em'
        }}>
          W
        </div>
        <div>
          <h1 className="font-heading" style={{
            fontSize: '1.4rem',
            fontWeight: '800',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            color: '#0F172A'
          }}>
            ATMOS <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748B', letterSpacing: '0.1em', marginLeft: '0.3rem' }}>BY CRED</span>
          </h1>
          <p style={{ fontSize: '0.825rem', color: '#64748B', fontWeight: 500, marginTop: '2px' }}>
            Precision Weather & Atmospheric Intelligence
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          padding: '0.4rem 0.85rem',
          background: '#FFFFFF',
          border: '1px solid rgba(0, 0, 0, 0.08)',
          borderRadius: '9999px',
          fontSize: '0.75rem',
          fontWeight: 700,
          color: '#0F172A',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)'
        }}>
          <span style={{
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            background: '#10B981',
            boxShadow: '0 0 8px #10B981'
          }}></span>
          LIVE API
        </div>
      </div>
    </header>
  );
}
