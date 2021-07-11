import React from 'react';
import styles from './header.css';
import {SEarchBlock} from "./SEarchBlock";
import {ThreadTitle} from "./ThreadTitle";
import {SortBlock} from "./SortBlock";

export function Header() {
  return (
      <header className={styles.header}>
         <SEarchBlock/>
          <ThreadTitle/>
          <SortBlock/>
      </header>
  );
}
