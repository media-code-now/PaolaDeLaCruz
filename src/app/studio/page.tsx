'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function StudioPage() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

  useEffect(() => {
    // Redirect to Sanity Studio
    if (projectId) {
      window.location.href = `https://${projectId}.sanity.studio/desk`
    }
  }, [projectId])

  if (!projectId) {
    return (
      <div style={{ 
        padding: '4rem 2rem', 
        textAlign: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
        color: '#fff',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        <div style={{ maxWidth: '600px' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Studio Configuration Needed</h1>
          
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            borderRadius: '8px',
            padding: '2rem',
            marginBottom: '2rem',
            textAlign: 'left'
          }}>
            <h2 style={{ marginTop: 0, marginBottom: '1rem', color: '#d4af37' }}>
              ⚠️ Missing Environment Variables
            </h2>
            
            <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
              To use Sanity Studio, you need to:
            </p>

            <ol style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <strong>Create a Sanity project:</strong> Visit{' '}
                <a href="https://manage.sanity.io/create" target="_blank" rel="noopener noreferrer" 
                   style={{ color: '#d4af37', textDecoration: 'underline' }}>
                  manage.sanity.io/create
                </a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <strong>Get your Project ID:</strong> From Settings → API
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <strong>Add to .env.local:</strong>
              </li>
            </ol>

            <pre style={{
              background: 'rgba(0, 0, 0, 0.3)',
              padding: '1rem',
              borderRadius: '4px',
              overflow: 'auto',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
{`NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production`}
            </pre>

            <p style={{ marginTop: '1.5rem', marginBottom: 0, fontSize: '0.9rem', color: '#aaa' }}>
              ✅ After updating .env.local, restart your dev server
            </p>
          </div>

          <a href="https://www.sanity.io/docs" target="_blank" rel="noopener noreferrer"
             style={{
               display: 'inline-block',
               padding: '0.75rem 1.5rem',
               background: '#d4af37',
               color: '#1a1a1a',
               textDecoration: 'none',
               borderRadius: '4px',
               fontWeight: 'bold',
               marginRight: '1rem'
             }}>
            📚 Sanity Docs
          </a>
          <Link href="/" 
             style={{
               display: 'inline-block',
               padding: '0.75rem 1.5rem',
               background: 'rgba(255, 255, 255, 0.1)',
               color: '#d4af37',
               textDecoration: 'none',
               borderRadius: '4px',
               fontWeight: 'bold',
               border: '1px solid rgba(212, 175, 55, 0.5)'
             }}>
            ← Back Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
      color: '#fff',
    }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{
          fontSize: '3rem',
          marginBottom: '1rem',
          animation: 'spin 1s linear infinite',
        }}>
          ⟳
        </div>
        <h2>Opening Sanity Studio...</h2>
        <p style={{ color: '#aaa', marginTop: '1rem' }}>
          Redirecting to <strong>{projectId}.sanity.studio</strong>
        </p>
      </div>
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
