import styles from "../styles/Footer.module.css";

function Footer() {
    return(
        <div className={styles.footer}>
            <div className={styles.footer_item && styles.footer_title}>ShopEase | Shoping done right</div>
            <div className={styles.footer_item}>&copy; All Rights Reserved.</div>
        </div>
    )
}

export default Footer