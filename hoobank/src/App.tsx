import React from 'react'
import styles from './style'
import { Navbar, Billing, CardDeal, Business, Button, Clients, CTA, FeedbackCard, GetStarted, Hero, Stats, Testimonials, Footer} from './components/index'

const App = () => {
  return (
    <div className='bg-primary w-full'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>       </div>
      </div>

      <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>          
          <Business/>       
          <Billing/>      
          <CardDeal/>       
          <Testimonials/>
          <Clients/>      
          <CTA/>  
          <Footer />    
          </div>
      </div>

    </div>
  )
}

export default App
