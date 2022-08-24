import styles from './homeText.module.scss'

const HomeText = () => {
  return (
    <section className={styles.homeText}>
     
      <p className={styles.homeTitle}>Raw Food Recept</p>
      <p className={styles.homeSubtext}>
        Det här är en receptsamling med raw food recept. Raw food är en
        kosthållning där man äter råa livsmedel som t.ex. frukt, grönsaker,
        frön, nötter, torkad frukt eller sjögräs. Raw food bör inte värmas över
        42°C, eftersom mängden enzymer då kommer att ändras, vilket leder till
        sämre matsmältningsförmåga och upptag av näring i maten.
      </p>
      <p className={styles.homeSubtext}>
        Man brukar även välja ekologiska råvaror för att undvika kemikalier och
        bekämpningsmedel. Med andra ord kan man säga att raw food innebär att man
        äter så rent och naturligt som möjligt.
      </p>
    </section>
  )
}

export default HomeText