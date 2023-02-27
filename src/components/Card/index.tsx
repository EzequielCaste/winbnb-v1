interface Props {
  stay: {
    city: string
    country: string
    superHost: boolean
    title: string
    rating: number
    maxGuests: number
    type: string
    beds: number | null
    photo: string
  }
}

import {LazyLoadImage} from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

import {Star} from '../Icons/Star'
import styles from './Card.module.css'

const Card: React.FC<Props> = ({stay}) => {
  return (
    <div className={styles['card-container']}>
      <LazyLoadImage
        className={styles['card-image']}
        alt="Photo of the stay"
        height={269}
        src={stay.photo}
        effect="blur"
      />
      <div className={styles['card-details-container']}>
        {/* <SuperHost showHost={stay.superHost} /> */}

        {stay.superHost && (
          <span className={styles['superhost']}>super host</span>
        )}

        <span className={styles['card-details']}>
          {stay.beds ? `${stay.type} . ${stay.beds} beds` : stay.type}
        </span>
        <div className={styles['rating']}>
          <Star style={{fill: '#EB5757'}} />
          <span>{stay.rating.toFixed(2)}</span>
        </div>
      </div>
      <div className={styles['card-details-title']}>{stay.title}</div>
    </div>
  )
}

interface SuperHostProps {
  showHost: boolean
}

const SuperHost: React.FC<SuperHostProps> = ({showHost}) => {
  const hostStyle = showHost ? 'visible' : 'hidden'
  return (
    <span className={styles['superhost']} style={{visibility: hostStyle}}>
      super host
    </span>
  )
}

export default Card
