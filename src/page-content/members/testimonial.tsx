import { FC } from 'react';
import { motion } from 'framer-motion';
import { showInView } from '@utils/showInView';

import styles from './testimonial.module.scss';

export type TestimonialData = {
  author: string;
  paragraphs: string[];
};

const Testimonial: FC<TestimonialData> = ({ author, paragraphs }) => {
  return (
    <div className={styles.wrapper}>
      {paragraphs.map((p, idx) => (
        <motion.p key={idx} {...showInView} custom={idx * 0.1}>
          {idx === 0 ? '“' : ''}
          {p}
          {idx === paragraphs.length - 1 ? '“' : ''}
        </motion.p>
      ))}
      <motion.div
        className={styles.author}
        {...showInView}
        custom={paragraphs.length * 0.1}
      >
        — {author}
      </motion.div>
    </div>
  );
};

export default Testimonial;
