import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PolitaevJS',
  description: 'Онлайн платформа для обучения',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        {children}
      </body>
    </html>
  )
}