import React, { useMemo } from 'react';
import classnames from 'classnames';
import { Column, Grid, Heading } from '@carbon/react';
import Shape2 from '@graphics/shape2.svg';
import Shape3 from '@graphics/shape3.svg';
import Shape4 from '@graphics/shape4.svg';
import ContactPanel from '../contact/contactPanel';
import { motion } from 'framer-motion';
import { ROUTE } from '@utils/useNavigation';

import styles from './learn.module.scss';

const LearnMorePage: React.FC<{ previousRoute: ROUTE }> = ({
  previousRoute,
}) => {
  const graphicsLeftProps = useMemo(
    () => ({
      className: classnames(styles.contentRow, styles.contentRow__graphics),
      xlg: { span: 8, offset: 1 },
      lg: 9,
      sm: 4,
    }),
    [],
  );

  const graphicsRightProps = useMemo(
    () => ({
      className: classnames(styles.contentRow, styles.contentRow__graphics),
      lg: { span: 8, offset: 8 },
      md: { span: 4, offset: 4 },
      sm: 4,
    }),
    [],
  );

  const textLeftProps = useMemo(
    () => ({
      className: classnames(styles.contentRow, styles.contentRow__text),
      xlg: { span: 5, offset: 1 },
      lg: 6,
      sm: 4,
    }),
    [],
  );

  const textRightProps = useMemo(
    () => ({
      className: classnames(styles.contentRow, styles.contentRow__text),
      xlg: { span: 5, offset: 10 },
      lg: { span: 6, offset: 9 },
      md: { span: 4, offset: 4 },
      sm: 4,
    }),
    [],
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: previousRoute === ROUTE.HOME ? 1.3 : 0 },
      }}
    >
      <Grid className={styles.learnMore}>
        <>
          <Column
            className={classnames(styles.firstRow, styles.pageHeading)}
            xlg={{ span: 7, offset: 1 }}
            lg={7}
            md={4}
            sm={4}
          >
            <Heading className={styles.heading}>
              About the
              <br />
              AI Alliance
            </Heading>
          </Column>
          <Column
            className={styles.firstRow}
            xlg={{ span: 8, offset: 8 }}
            lg={{ span: 9, offset: 7 }}
            md={6}
            sm={4}
          >
            <p>
              The AI Alliance is a collaboration of leading global industry and
              academic and research organizations.
            </p>
            <p>
              Driven by a flexible mode of collaborating based on individual
              member preference and very lightweight governance, we only require
              that members commit to execute toward one or more parts of the
              three-part mission of the Alliance to build, enable and inform.
            </p>
          </Column>
        </>

        <>
          <Column {...graphicsLeftProps}>
            <Shape2 />
          </Column>
          <Column {...textRightProps}>
            <p>
              <strong>Build</strong> and release open-source frontier models
              based on a common requirement and validation framework.
            </p>
          </Column>
        </>

        <>
          <Column {...textLeftProps} data-view="inverted">
            <p>
              <strong>Enable</strong> a flourishing downstream ecosystem of
              research and application development based on these open frontier
              models.
            </p>
          </Column>
          <Column {...graphicsRightProps}>
            <Shape3 />
          </Column>
          <Column {...textRightProps} data-view="normal">
            <p>
              <strong>Enable</strong> a flourishing downstream ecosystem of
              research and application development based on these open frontier
              models.
            </p>
          </Column>
        </>

        <>
          <Column {...graphicsLeftProps}>
            <Shape4 />
          </Column>
          <Column {...textRightProps}>
            <p>
              <strong>Inform</strong> and educate the public and regulators with
              a common narrative on the benefits of open-source AI to ensure
              trust and safety in AI.
            </p>
          </Column>
        </>

        <>
          <Column
            className={styles.contentRow}
            xlg={{ span: 7, offset: 1 }}
            lg={7}
            md={5}
            sm={4}
          >
            <Heading className={styles.subheading}>Why open source?</Heading>
          </Column>
          <Column
            className={styles.contentRow}
            xlg={{ span: 8, offset: 8 }}
            lg={{ span: 9, offset: 7 }}
            md={6}
            sm={4}
          >
            <p>
              Open-source AI is the best way to ensure AI is integrated into our
              society in a transparent, trustworthy and safe way. It builds on a
              long history of open-source AI research and development, and an
              even longer track record of open-source software development.
            </p>
            <p>
              An open-source approach to AI development allows a diverse
              community to innovate and validate models together, helping find —
              and address — potential risks, downsides and vulnerabilities
              before such models are released at scale.
            </p>
          </Column>
        </>

        <>
          <Column
            className={styles.contentRow}
            xlg={{ span: 7, offset: 1 }}
            lg={7}
            md={5}
            sm={4}
          >
            <Heading className={styles.subheading}>
              What is open-source AI?
            </Heading>
          </Column>
          <Column
            className={styles.contentRow}
            xlg={{ span: 8, offset: 8 }}
            lg={{ span: 9, offset: 7 }}
            md={6}
            sm={4}
          >
            <p>
              AI is built on models. Therefore, open-source AI starts with
              open-source models. Such models are transparent, accessible and
              have permissive licenses. These principles extend to all related
              artifacts, including model documentation, architecture, and
              weights and biases.
            </p>
          </Column>
        </>

        <Column className={styles.contentRow} xlg={16} lg={16} md={8} sm={4}>
          <Grid className={styles.subGrid}>
            <Column
              className={styles.subheading}
              xlg={{ span: 15, offset: 1 }}
              lg={16}
              md={8}
              sm={4}
            >
              <p>In particular, this means:</p>
            </Column>
            <Column xlg={{ span: 7, offset: 1 }} lg={7} md={4} sm={4}>
              <ul>
                <li>
                  Transparency concerning organizations and individuals involved
                  in creating, contributing to, and maintaining the models
                </li>
                <li>
                  A standard, self-serve license with terms and conditions
                  amenable to broad, permissive use and adaptation, without
                  onerous terms, notifications, use limits and non-competition
                  limits for users
                </li>
              </ul>
            </Column>
            <Column
              xlg={{ span: 7, offset: 8 }}
              lg={{ span: 7, offset: 7 }}
              md={{ span: 4, offset: 4 }}
              sm={4}
            >
              <ul>
                <li>Transparency in model training and tuning methods</li>
                <li>
                  Full release of model architecture and trained parameter
                  weights and biases
                </li>
                <li>
                  Accessibility through an open, self-serve repository that
                  includes everything needed to understand, modify, build on and
                  deploy a model into applications
                </li>
              </ul>
            </Column>
          </Grid>
        </Column>

        <ContactPanel className={styles.contactPanel} background="straight" />
      </Grid>
    </motion.div>
  );
};

export default LearnMorePage;
