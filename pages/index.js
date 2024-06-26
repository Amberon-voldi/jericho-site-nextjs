import Head from 'next/head'
import Image from 'next/image'
import FacSection from '../components/facScetion'
import FeatureSection from '../components/featureSection'
import Footer from '../components/footer'
import HeroSection from '../components/heroSection'
import Navbar from "../components/navbar"
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div classNameName={styles.container}>
      <Head>
        <title>Jericho Hub</title>
        <meta name="description" content="Jericho a Multi Purpose Discord Bot" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main>
      <Navbar />
        <HeroSection />
        
        <FeatureSection />
        <FacSection />
        <Footer />
        
      </main>



    </div>
  )
}
