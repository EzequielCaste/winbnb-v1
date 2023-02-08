import { SearchIcon } from './SearchIcon'

import styles from './Search.module.css'

const Search = () => {
  return (
    <div className={styles["search_container"]}>
      <div className={styles["input-location"]}>Helsinki, Finland</div>
      <div className={styles['input-guests']}>Add guest</div>
      <div className={styles['search-icon']}>
        <SearchIcon style={{fill: '#EB5757'}} />
      </div>
    </div>
  )
}

export default Search