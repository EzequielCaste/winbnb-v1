import { useState } from 'react'
import { SearchIcon } from '../Icons/SearchIcon'
import GuestsInput from './GuestsInput'
import LocationInput from './LocationInput'

import styles from './Search.module.css'

const documentBody = document.querySelector('body')!
//documentBody.style.backgroundColor = 'rgba(79, 79, 79, 0.4)'

const Search = () => {
  const [expand, setExpand] = useState(false)

  function expandSearch() {
    setExpand(state => !state)

    if (documentBody.style.backgroundColor !== 'rgba(79, 79, 79, 0.4)') {
      documentBody.style.backgroundColor = 'rgba(79, 79, 79, 0.4)'
    } else {
      documentBody.style.backgroundColor = 'white'
    }
  }

  const drawerStyle = `${styles['drawer']} ${expand && styles['drawer-expanded']}`

  const labelStyle = `${styles['header']} ${expand && styles['header-expanded']}`
    
  const containerStyle = `${styles['search_container']} ${expand && styles['expanded']}`
  
  return (
    <div onClick={expandSearch} className={containerStyle}>
      <div className={drawerStyle}>
        <LocationInput expand={expand} />
        <GuestsInput expand={expand} />        
        <div className={styles['search-icon']}>
          <SearchIcon style={{fill: '#EB5757'}} />
        </div>      
      </div>
    </div>
  )
}

export default Search