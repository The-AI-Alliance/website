import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { showInView } from '@utils/showInView';

import styles from './testimonial.module.scss';

export type TestimonialData = {
  author: string;
  body: ReactNode;
};

const Testimonial: FC<TestimonialData> = ({ author, body }) => {
  return (
    <div className={styles.wrapper}>
      <motion.p {...showInView}>“{body}“</motion.p>
      <motion.div className={styles.author} {...showInView} custom={0.1}>
        — {author}
      </motion.div>
    </div>
  );
};

export default Testimonial;
