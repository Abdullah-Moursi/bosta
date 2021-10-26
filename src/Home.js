import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'


const Home = () => {
    return (
        <div>
             <li>
          <Link to="/shipments/track/">track</Link>
        </li>
            <Header />
            <Hero />
            <Footer />
        </div>
    )
}

export default Home
