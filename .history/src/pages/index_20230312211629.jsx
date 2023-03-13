import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { Banner } from '@/components/Banner'
import { Notification } from '@/components/Notification'

export default function Home() {
  return (
    <>
      <Head>
        <title>Audience King - Custom Sales Systems for Creator Businesses</title>
        <meta
        property="og:image"
        content="https://og-examples.vercel.sh/api/static"
        name="description"
        />
      </Head>
      <Banner />
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />
        <Faqs />
        <Notification />
      </main>
      <Footer />
    </>
  )
}
