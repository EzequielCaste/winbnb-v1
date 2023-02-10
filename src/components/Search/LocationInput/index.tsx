import styles from './LocationInput.module.css'

interface Props {
  expand: boolean
  currentLocation: string
  toggleOptions: () => void
}

const LocationInput: React.FC<Props> = ({expand, toggleOptions, currentLocation}) => {
  const location = {
    label: '',
    input: ''
  }

  if (expand) {
    location.label = 'show'
    location.input = 'expanded'
  } else {
    location.label = 'hide'
  }

  const labelStyle = `${styles['location-label']} ${styles[location.label]}`

  const inputStyle = `${styles['input-location']} ${styles[location.input]}`

  return (
    <>
      <label className={labelStyle} htmlFor="location">
          Location
      </label>
      
      <input
        onClick={toggleOptions}
        id='location-input'
        autoComplete="off"
        name="location"
        type="text"
        className={inputStyle}
        placeholder={currentLocation}
      />
    </>
  )
}

export default LocationInput
