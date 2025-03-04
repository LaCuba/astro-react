import styles from './Cars.module.scss'

type Car = {
  image: string
  brand: string
  model: string
}

export type Props = {
  cars: Car[]
}

export function Cars(props: Props) {
  return <div className={styles.base}>
    <div className={styles.search}>

    </div>
    
  </div>
}