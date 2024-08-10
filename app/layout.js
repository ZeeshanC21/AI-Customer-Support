import './globals.css'
import { AuthProvider } from './firebase/auth'

export const metadata = {
  title: 'My App',
  description: 'My Next.js App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
