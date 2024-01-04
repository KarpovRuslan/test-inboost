import { IBM_Plex_Sans } from 'next/font/google'
import { Block } from "../components/Block"

const ibm = IBM_Plex_Sans({ subsets: ['cyrillic'], weight: ['400'] })

export default function Home() {
  return (
    <main className={`${ibm.className}`}>
      <Block />
    </main>
  )
}
