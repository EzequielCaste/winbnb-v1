import styles from './GuestsInput.module.css'

interface Props {
  expand: boolean
  guests: {
    adults: number
    children: number
  }
  handleGuests: React.Dispatch<React.SetStateAction<{
    adults: number;
    children: number;
}>>
}

const GuestsInput: React.FC<Props> = ({expand, guests: numGuests, handleGuests}) => {
  const guests = {
    label: '',
    input: '',
  }

  if (expand) {
    guests.label = 'show'
    guests.input = 'expanded'
  } else {
    guests.label = 'hide'
  }

  const labelStyle = `${styles['guests-label']} ${styles[guests.label]}`

  const inputStyle = `${styles['input-guests']} ${styles[guests.input]}`

  function handleChange(e: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
    console.log(e)
  }

  const numberOfGuests = numGuests.adults + numGuests.children

  let inputValue = `${numberOfGuests}  guests`

  if (numberOfGuests === 0) {
    inputValue = 'Add guests'
  }


  return (
    <div className={styles['guests-container']}>
      <label className={labelStyle} htmlFor="guests">
        Guests
      </label>

      <input
        value={inputValue}
        onChange={handleChange}
        type="text"
        className={inputStyle}
        name="guests"
      />
    </div>
  )
}

export default GuestsInput
