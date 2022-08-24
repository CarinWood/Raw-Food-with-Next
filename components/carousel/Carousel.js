import styles from './carousel.module.scss'
import { CarouselData } from './CarouselData'
import { Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import { useRouter } from 'next/router'

const Carousel = () => {
    const router = useRouter()

  return (
    <div className={styles.carouselDiv}>
     <Splide className={styles.splide} options={{ perPage: 3, pagination: false }}>
            {CarouselData.map((item, i) => (
                <SplideSlide key={i}>
                    <div className={styles.card}>
                    <img className={styles.carouselImage} src={item.image} alt={item.title} />
                    <p className={styles.imageText}>{item.title}</p>
                    <div className={styles.gradient}></div>
                    </div>
                </SplideSlide>
            ))}
     </Splide>
     </div>
  )
}

export default Carousel