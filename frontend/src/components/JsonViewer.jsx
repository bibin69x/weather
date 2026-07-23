import React, { useState } from 'react';
import { Code, Copy, Check, ChevronDown, ChevronUp } from 'lucide-react';

export default function JsonViewer({ rawData }) {
  const [isOpen, setIsOpen] = useState(true);
  const [copied, setCopied] = useState(false);

  if (!rawData) return null;

  const jsonString = JSON.stringify(rawData, null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="cred-card" style={{
      border: '1px solid rgba(0, 0, 0, 0.08)',
      background: '#FAFAFC',
      borderRadius: '20px',
      overflow: 'hidden'
    }}>
      {/* Header Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 1.5rem',
        background: '#FFFFFF',
        borderBottom: isOpen ? '1px solid rgba(0,0,0,0.06)' : 'none',
        cursor: 'pointer',
        userSelect: 'none'
      }} onClick={() => setIsOpen(!isOpen)}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            background: 'rgba(15, 23, 42, 0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#0F172A'
          }}>
            <Code size={18} />
          </div>
          <div>
            <h4 className="font-heading" style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0F172A' }}>
              RAW API PAYLOAD
            </h4>
            <p style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 500 }}>
              Live WeatherAPI Response (JSON)
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} onClick={(e) => e.stopPropagation()}>
          <button
            onClick={handleCopy}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.4rem 0.85rem',
              background: copied ? '#10B981' : '#0F172A',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '9999px',
              fontSize: '0.75rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            <span>{copied ? 'COPIED!' : 'COPY JSON'}</span>
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: '#64748B',
              display: 'flex',
              alignItems: 'center',
              padding: '0.2rem'
            }}
          >
            {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
      </div>

      {/* JSON Content Drawer */}
      {isOpen && (
        <div style={{ padding: '1.25rem 1.5rem', maxHeight: '420px', overflowY: 'auto' }}>
          <pre className="font-mono" style={{
            fontSize: '0.825rem',
            lineHeight: 1.6,
            color: '#1E293B',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
            background: 'transparent'
          }}>
            {jsonString}
          </pre>
        </div>
      )}
    </div>
  );
}
