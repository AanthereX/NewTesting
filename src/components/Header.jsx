import styles from "../styles/Header.module.css";
import Link from 'next/link'

const Header = () => {
  
    return (
        <div className={styles.navbar}>
            <div className={styles.navbar_item && styles.navbar_title}><Link href="/">ShopEase</Link></div>
            <div className={styles.navbar_item}><Link href="./product">Products</Link></div>
        </div>
    );
  };
  
export default Header;

