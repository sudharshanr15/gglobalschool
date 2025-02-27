import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/component/navbar/Navbar'
import Footer from '@/component/footer/footer'
import Enquire from '@/component/Enquire/Enquire'
import WhatsappContact from '@/component/WhatsappContact'
import KiddathonModal from '@/component/Modal/Kiddathon'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | G Global school',
    default: "G Global school"
  },
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Enquire />
        <Footer/>
        <WhatsappContact />
        <KiddathonModal />
      </body>
    </html>
  )
}
