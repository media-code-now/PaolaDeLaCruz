'use client'

export default function StudioPage() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

  if (!projectId) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Studio Configuration Error</h1>
        <p>Missing NEXT_PUBLIC_SANITY_PROJECT_ID environment variable</p>
        <p>Please check your .env.local file</p>
      </div>
    )
  }

  return (
    <iframe
      src={`https://${projectId}.sanity.studio`}
      title="Sanity Studio"
      style={{
        width: '100%',
        height: '100vh',
        border: 'none',
        display: 'block',
      }}
    />
  )
}
