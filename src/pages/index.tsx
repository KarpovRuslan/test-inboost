import { IBM_Plex_Sans } from 'next/font/google'

const ibm = IBM_Plex_Sans({ subsets: ['cyrillic'], weight: ['400'] })

export default function Home() {
  return (
    <main
      className={`${ibm.className}`}
    >
      <h1>Hello</h1>
    </main>
  )
}
