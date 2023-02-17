import styles from './OptionsGuests.module.css'

interface Props {
  type: string
  guests: number
  setCurrentGuests: React.Dispatch<React.SetStateAction<{ [key: string]: number; adults: number; children: number; }>>
}

const OptionsGuests: React.FC<Props> = ({ type, guests: numGuests, setCurrentGuests }) => {

  function subtractGuests() {
    numGuests >= 1 
    &&  setCurrentGuests(prev => ({
      ...prev,
      [type]: prev[type] - 1
    }))
  }
  function addGuests() {
    numGuests <= 5 
    && setCurrentGuests(prev => ({
      ...prev,
      [type]: prev[type] + 1
    }))
  }

  return (
    <div className={styles['guest-input']}>
      <div onClick={subtractGuests}>-</div>
      <span>{numGuests}</span>
      <div onClick={addGuests}>+</div>
    </div>
  )
}

export default OptionsGuests
