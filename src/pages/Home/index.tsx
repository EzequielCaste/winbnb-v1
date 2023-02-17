
import { useEffect, useState } from 'react'
import Header from '../../layouts/Header'
import styles from './Home.module.css'
import Main from '../../layouts/Main'
import Footer from '../../layouts/Footer'
import Search from '../../components/Search'
import stays from '../../stays.json'

const Home = () => {
  const [currentLocation, setCurrentLocation] = useState('Helsinki, Finland')

  const [currentGuests, setCurrentGuests] = useState({
    adults: 0,
    children: 0
  })

  const [staysToDisplay, setStaysToDisplay]  = useState(stays.slice(0, 6))
  
  useEffect(() => {
    setStaysToDisplay(stays.filter(item => item.city.includes(currentLocation.split(',')[0])))
   
  }, [currentLocation])

  useEffect(() => {
    if (currentGuests.adults + currentGuests.children !== 0) {
      const totalGuests = currentGuests.adults + currentGuests.children
      
      setStaysToDisplay(staysToDisplay.filter(item =>  totalGuests <= item.maxGuests  ))
    }      
  }, [currentGuests])

  return (
    <>
      <main className={styles['container']}>
        <Header />
        <Main stays={staysToDisplay} />
        <Footer />
      </main>
      <Search
        currentLocation={currentLocation}
        currentGuests={currentGuests}
        setCurrentLocation={setCurrentLocation}
        setCurrentGuests={setCurrentGuests}
      />
    </>
  )
}

export default Home