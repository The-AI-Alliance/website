import { FC } from 'react';
import { Column, Grid } from '@carbon/react';
import { motion } from 'framer-motion';
import { showInView } from '@utils/showInView';
import classNames from 'classnames';

import styles from './focusAreaDetail.module.scss';

type FocusAreaDetailProps = {
  className?: string;
  title: string;
  subtitle: string;
  body: string;
};

const FocusAreaDetail: FC<FocusAreaDetailProps> = ({
  className,
  title,
  subtitle,
  body,
}) => {
  return (
    <Grid className={classNames(styles.focusAreaDetail, className)}>
      <Column
        className={styles.separator}
        xlg={16}
        lg={16}
        md={6}
        sm={4}
      ></Column>
      <Column
        className={styles.header}
        xlg={{ span: 6, offset: 1 }}
        lg={6}
        md={6}
        sm={4}
      >
        <motion.div
          className={styles.header__title}
          {...showInView}
          custom={0.15}
        >
          {title}
        </motion.div>
        <motion.p
          className={styles.header__subtitle}
          {...showInView}
          custom={0.3}
        >
          {subtitle}
        </motion.p>
      </Column>
      <Column
        className={styles.body}
        xlg={{ span: 8, offset: 8 }}
        lg={{ span: 9, offset: 7 }}
        md={6}
        sm={4}
      >
        <motion.p className={styles.body} {...showInView} custom={0.6}>
          {body}
        </motion.p>
      </Column>
    </Grid>
  );
};

export default FocusAreaDetail;
