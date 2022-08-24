import Image from 'next/image'
import logo from '../assets/images/logoraw.png'
import Link from 'next/link'
import { BsSearch } from 'react-icons/bs'
import styles from './navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <div className={styles.navlist}>
            <Link href="/soppor"><a className={styles.navitem}>Soppor</a></Link>
            <Link href="/sallader"><a className={styles.navitem}>Sallader</a></Link>
            <Link href="/huvudratter"><a className={styles.navitem}>Huvudrätter</a></Link>
            <Link href="/smoothies"><a className={styles.navitem}>Smoothies</a></Link>

            <Link href="/">
                <Image 
                    className={styles.logo}
                    src={logo}
                    width={60}
                    height={60}
                    alt="logo"
                />
            </Link>

            <Link href="/soppor"><a className={styles.navitem}>Efterrätter</a></Link>
            <Link href="/sallader"><a className={styles.navitem}>Tillbehör</a></Link>
            <Link href="/huvudratter"><a className={styles.navitem}>Drinkar</a></Link>
            <div className={styles.navitem}><BsSearch/></div>
        </div>


   
    </nav>
  )
}

export default Navbar