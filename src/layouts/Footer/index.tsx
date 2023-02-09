import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles['footer']}>
      <span>created by </span>
      <a className={styles['footer-link']} href="https://devchallenges.io/portfolio/EzequielCaste" target='_blank'>
        EzequielCaste
      </a> - devChallenges.io
    </footer>
  )
}