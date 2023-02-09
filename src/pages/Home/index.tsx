import Header from '../../layouts/Header'
import styles from './Home.module.css'
import Main from '../../layouts/Main'
import Footer from '../../layouts/Footer'

const Home = () => {
  return (
    <main className={styles['container']}>
      <Header />
      <Main />
      <Footer />
    </main>
  )
}

export default Home