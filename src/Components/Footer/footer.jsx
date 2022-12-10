import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__inner}>
          <p className={styles.footer__text}>
            copyright by <span>kozya</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
