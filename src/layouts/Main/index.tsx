import Card from '../../components/Card'
import styles from './Main.module.css'

interface Props {
  stays: {
    city: string
    country: string
    superHost: boolean
    title: string
    rating: number
    maxGuests: number
    type: string
    beds: number | null
    photo: string
  }[]
}

const Main: React.FC<Props> = ({ stays }) => {
  return (
    <>
      <div className={styles['title-container']}>
        <span className={styles['title']}>Stays in Finland</span>
        <span className={styles['subtitle']}>{stays.length} stays</span>
      </div>
      <section className={styles['stays-container']}>
        {stays.map((stay) => (
          <Card key={stay.title} stay={stay} />
        ))}
      </section>
    </>
  )
}

export default Main
