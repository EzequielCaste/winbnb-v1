import {useState} from 'react'
import {SearchIcon} from '../Icons/SearchIcon'
import GuestsInput from './GuestsInput'
import LocationInput from './LocationInput'
import OptionsContainer from './OptionsContainer'

import styles from './Search.module.css'


function changeBackground() {
  const documentBody = document.querySelector('body')!

  if (documentBody.style.backgroundColor !== 'rgba(79, 79, 79, 0.4)') {
    documentBody.style.backgroundColor = 'rgba(79, 79, 79, 0.4)'
  } else {
    documentBody.style.backgroundColor = 'white'
  }
}

interface Props {
  currentLocation: string
  currentGuests: { adults: number; children: number; }
  setCurrentLocation: React.Dispatch<React.SetStateAction<string>>
  setCurrentGuests: React.Dispatch<React.SetStateAction<{
    adults: number;
    children: number;
}>>
}

const Search: React.FC<Props> = ({currentGuests, currentLocation, setCurrentGuests, setCurrentLocation}) => {
  const [expand, setExpand] = useState(false)
    
  function expandSearch() {
    if (!expand) {
      setExpand((state) => !state)
      changeBackground()
    }   
  }

  function handleSearch() {
    setExpand(false)
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
    <div onClick={expandSearch} className={containerStyle}>
      <div className={drawerStyle}>
        <LocationInput
          expand={expand}
          currentLocation={currentLocation}
          toggleOptions={toggleOptions}
        />
        <GuestsInput 
          expand={expand} 
          guests={currentGuests} 
          handleGuests={setCurrentGuests} 
        />
        <div onClick={handleSearch} className={buttonStyle}>
          <SearchIcon
            style={svgFill} 
          />
          {expand && <span>Search</span>}
        </div>
      </div>
      <OptionsContainer 
        expand={expand}
        currentGuests={currentGuests}
        setCurrentGuests={setCurrentGuests}
        changeLocation={changeLocation} 
      />
    </div>
  )
}

export default Search
