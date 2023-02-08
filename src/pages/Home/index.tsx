import Header from '../../layouts/Header'
import Card from '../../components/Card'
import stays from '../../stays.json'
import styles from './Home.module.css'

const Home = () => {
  return (
    <main className={styles['container']}>
      <Header />
      <main>
        <div className={styles['title-container']}>
          <span className={styles['title']}>Stays in Finland</span>
          <span className={styles['subtitle']}>12+ stays</span>
        </div>
        <section className={styles['stays-container']}>
          {/* map of Stays > Card */}
          {
            stays.map(stay => (
              <Card key={stay.title} stay={stay} />
            ))            
          }
        </section>
      </main>
    </main>
  )
}

export default Home