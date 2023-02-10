import {useState} from 'react'
import {SearchIcon} from '../Icons/SearchIcon'
import GuestsInput from './GuestsInput'
import LocationInput from './LocationInput'

import styles from './Search.module.css'

import {cities} from '../../cities'

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

      <div className={styles['option-container']}>
        <ul
          className={styles['location-list']}
          id="options"
          style={{display: 'none'}}
        >
          {cities.map((city, index) => {
            return (
              <li key={index} onClick={changeLocation}>
                {city}
              </li>
            )
          })}
        </ul>

        {/* guests */}

        <div className={styles['guest-options']}>
          <div className={styles['guest-adults']}>
            <strong>Adults</strong>
            <span>Ages 13 or above</span>
            <div className={styles['guest-input']}>
              <div>-</div>
              <span>0</span>
              <div>+</div>
            </div>
          </div>
          <div className={styles['guest-children']}>
            <strong>Children</strong>
            <span>Ages 2-12</span>
            <div className={styles['guest-input']}>
              <div>-</div>
              <span>0</span>
              <div>+</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
