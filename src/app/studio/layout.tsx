import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog Studio | Paola De La Cruz',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
