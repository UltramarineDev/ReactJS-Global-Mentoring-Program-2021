import React from 'react';
import Link from 'next/link'

import { wordings } from '../../../locales/wordings';
import Header from '../../shared/Header/Header';
import Button from '../../shared/button/Button';
import { buttonTypes, buttonSizes } from '../../shared/constants';

import styles from '../../../../styles/NotFound.module.scss';

const NotFound = () => (
  <>
    <Header />
    <div className={styles.container}>
      <h2 className={styles.title}>{wordings.page_not_found}</h2>
      <div className={styles.errorCode}>404</div>
      <Link href="/" className={styles.icon}>
        <Button
          label={wordings.go_back}
          type={buttonTypes.PRIMARY}
          size={buttonSizes.LARGE}
        />
      </Link>
    </div>
  </>
);

export default NotFound;
