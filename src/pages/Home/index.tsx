import Header from '../../layouts/Header'
import styles from './Home.module.css'

import stays from '../../stays.json'
import Card from '../../components/Card'

const PlaceToStay = {
  "city": "Helsinki",
  "country": "Finland",
  "superHost": true,
  "title": "Stylist apartment in center of the city",
  "rating": 4.40,
  "maxGuests": 3,
  "type": "Entire apartment",
  "beds": 2,
  "photo": "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80"
}

const Home = () => {
  return (
    <main className={styles['container']}>
      <Header />
      <main>
        <div className={styles['title-container']}>
          <span className={styles['title']}>Stays in Finland</span>
          <span className={styles['subtitle']}>12+ stays</span>
        </div>
        <section>
          {/* map of Stays > Card */}
          {
            <Card stay={PlaceToStay} />
          }
        </section>
      </main>
    </main>
  )
}

export default Home