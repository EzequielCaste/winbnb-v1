import Header from '../../layouts/Header'
import Card from '../../components/Card'
import stays from '../../stays.json'
import styles from './Home.module.css'

const staysToDisplay = stays.slice(0,6)

const Home = () => {
  return (
    <main className={styles['container']}>
      <Header />
      <>
        <div className={styles['title-container']}>
          <span className={styles['title']}>Stays in Finland</span>
          <span className={styles['subtitle']}>12+ stays</span>
        </div>
        <section className={styles['stays-container']}>
          {
            staysToDisplay.map(stay => (
              <Card key={stay.title} stay={stay} />
            ))            
          }
        </section>
      </>
    </main>
  )
}

export default Home