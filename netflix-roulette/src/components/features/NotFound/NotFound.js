import React from 'react';
import { Link } from 'react-router-dom';

import { wordings } from 'locales/wordings';
import Header from 'components/shared/Header/Header';
import Button from 'components/shared/button/Button';
import { buttonTypes, buttonSizes } from 'components/shared/constants';

import styles from './NotFound.module.scss';

const NotFound = () => (
  <>
    <Header />
    <div className={styles.container}>
      <h2 className={styles.title}>{wordings.page_not_found}</h2>
      <div className={styles.errorCode}>404</div>
      <Link to="/" className={styles.icon}>
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
