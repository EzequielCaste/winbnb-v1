import styles from './LocationInput.module.css'

const LocationInput: React.FC<{expand: boolean}> = ({expand}) => {
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
        name="location"
        type="text"
        className={inputStyle}
        placeholder="Helsinki, Finland"
      />
    </>
  )
}

export default LocationInput
