
import Header from '../../layouts/Header'
import styles from './Home.module.css'
import Main from '../../layouts/Main'
import Footer from '../../layouts/Footer'
import Search from '../../components/Search'

const Home = () => {
  return (
    <>
      <main className={styles['container']}>
        <Header />
        <Main />
        <Footer />
      </main>
      <Search />
    </>
  )
}

export default Home