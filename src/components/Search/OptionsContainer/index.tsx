import React from 'react'
import styles from './OptionsContainer.module.css'

import {cities} from '../../../cities'
import OptionsGuests from '../OptionsGuests'

interface Props {
  expand: boolean
  currentGuests: {
    adults: number
    children: number
  }
  setCurrentGuests: React.Dispatch<React.SetStateAction<{
    adults: number;
    children: number;
}>>
  changeLocation: (
    e: React.MouseEvent<HTMLLIElement, MouseEvent> & {
      target: HTMLLIElement
    }
  ) => void
}

const OptionsContainer: React.FC<Props> = ({expand,changeLocation, currentGuests, setCurrentGuests}) => {

  const containerStyle = `${styles['option-container']} ${
    expand && styles['expanded']
  }`

  return (
    <div className={containerStyle}>
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
          <OptionsGuests 
            type="adults"
            guests={currentGuests.adults} 
            setCurrentGuests={setCurrentGuests}
          />
        </div>
        <div className={styles['guest-children']}>
          <strong>Children</strong>
          <span>Ages 2-12</span>
          <OptionsGuests 
            type="children"
            guests={currentGuests.children}
            setCurrentGuests={setCurrentGuests}
          />
        </div>
      </div>
    </div>
  )
}

export default OptionsContainer
