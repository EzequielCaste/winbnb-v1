import logo from '../../assets/logo.png'
import Search from '../../components/Search'

import styles from './Header.module.css'

const Header = () => {
  return (
    <header>
      <div className={styles["header"]}>
        <img src={logo} alt="Windbnb logo" />
        {/* Search */}
        <Search />
      </div>
    </header>
  )
}

export default Header