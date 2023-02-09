import styles from './GuestsInput.module.css'

const GuestsInput: React.FC<{expand: boolean}> = ({expand}) => {
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

  return (
    <div className={styles['guests-container']}>
      <label className={labelStyle} htmlFor="guests">
        Guests
      </label>

      <input
        min={0}
        type="number"
        placeholder="Add guest"
        className={inputStyle}
        name="guests"
      />
    </div>
  )
}

export default GuestsInput
