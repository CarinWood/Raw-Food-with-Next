import styles from './footer.module.scss'


const Footer = () => {
  return (
    <footer className={styles.footer}>
        <p className={styles.credits}> &copy; Carin Wood, all rights reserved </p>
    </footer>
  )
}

export default Footer