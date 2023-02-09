import { useState } from 'react'
import logo from '../../assets/logo.png'
import Search from '../../components/Search'

import styles from './Header.module.css'

const Header = () => {
  return (
    <header>
      <div className={styles['header']}>
        <img  src={logo} alt="Windbnb logo" />
        {/* <div className={drawerStyle}>
          <Search expandSearch={expandSearch} expand={expand} />
        </div> */}
      </div>
    </header>
  )
}

export default Header
/* style={{display: expand ? 'none' : 'block'}} */