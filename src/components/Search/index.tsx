import { useState } from 'react'
import { SearchIcon } from '../Icons/SearchIcon'
import GuestsInput from './GuestsInput'
import LocationInput from './LocationInput'

import styles from './Search.module.css'

function changeBackground() {
  const documentBody = document.querySelector('body')!

  if (documentBody.style.backgroundColor !== 'rgba(79, 79, 79, 0.4)') {
    documentBody.style.backgroundColor = 'rgba(79, 79, 79, 0.4)'
  } else {
    documentBody.style.backgroundColor = 'white'
  }
}

const Search = () => {
  const [expand, setExpand] = useState(false)

  function expandSearch() {
    setExpand(state => !state)
    changeBackground()    
  }

  const drawerStyle = `${styles['drawer']} ${expand && styles['drawer-expanded']}`
  
  const containerStyle = `${styles['search_container']} ${expand && styles['expanded']}`

  const buttonStyle = `${styles['search-icon']} ${expand && styles['search-icon-expanded']}`

  const svgFill = {
    fill: `${expand ? '#F2F2F2' : '#EB5757'}`
  }
  
  return (
    <div onClick={expandSearch} className={containerStyle}>
      <div className={drawerStyle}>
        <LocationInput expand={expand} />
        <GuestsInput expand={expand} />        
        <div className={buttonStyle}>
          <SearchIcon style={svgFill} />
          {expand && <span>Search</span>}
        </div>      
      </div>
    </div>
  )
}

export default Search