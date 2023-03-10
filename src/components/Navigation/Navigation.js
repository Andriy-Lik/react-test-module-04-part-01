import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink
      to="/signup"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Форма
    </NavLink>

    <NavLink
      to="/colorpicker"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Колорпікер
    </NavLink>

    <NavLink
      to="/counter"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Лічильник
    </NavLink>

    <NavLink
      to="/clock"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Годинник
    </NavLink>

    <NavLink
      to="/pokemon"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Покемоны
    </NavLink>
  </nav>
);

export default Navigation;
