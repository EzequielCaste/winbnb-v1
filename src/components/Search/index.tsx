import {useState} from 'react'
import {SearchIcon} from '../Icons/SearchIcon'
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
  const [expand, setExpand] = useState(true)
  const [currentLocation, setCurrentLocation] = useState('Helsinki, Finland')

  function expandSearch() {
    setExpand((state) => !state)
    changeBackground()
  }

  const drawerStyle = `${styles['drawer']} ${
    expand && styles['drawer-expanded']
  }`

  const containerStyle = `${styles['search_container']} ${
    expand && styles['expanded']
  }`

  const buttonStyle = `${styles['search-icon']} ${
    expand && styles['search-icon-expanded']
  }`

  const svgFill = {
    fill: `${expand ? '#F2F2F2' : '#EB5757'}`,
  }

  function changeLocation(
    e: React.MouseEvent<HTMLLIElement, MouseEvent> & {
      target: HTMLLIElement
    }
  ) {
    setCurrentLocation(e.target.innerText)
    toggleOptions()
  }

  

  function toggleOptions() {
    const optionsList = document.getElementById('options')
    if (optionsList?.style.display === 'none') {
      optionsList!.style.display = 'block'
    } else {
      optionsList!.style.display = 'none'
    }
  }

  return (
    <div /* onClick={expandSearch} */ className={containerStyle}>
      <div className={drawerStyle}>
        <LocationInput 
          expand={expand} 
          currentLocation={currentLocation} 
          toggleOptions={toggleOptions} 
        />
        <GuestsInput expand={expand} />
        <div className={buttonStyle}>
          <SearchIcon style={svgFill} />
          {expand && <span>Search</span>}
        </div>
      </div>

      <ul id='options' style={{display: 'none'}}>
        <li onClick={changeLocation}>Helsinki, Finland</li>
        <li onClick={changeLocation}>Turku, Finland</li>
        <li onClick={changeLocation}>Oulu, Finland</li>
        <li onClick={changeLocation}>Vaasa, Finland</li>
      </ul>
    </div>
  )
}

export default Search
