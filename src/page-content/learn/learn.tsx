import React, { useMemo } from 'react';
import classnames from 'classnames';
import { Column, Grid, Heading } from '@carbon/react';
import Shape1b from '@graphics/shape1b.svg';
import Shape2 from '@graphics/shape2.svg';
import Shape3 from '@graphics/shape3.svg';
import Shape4 from '@graphics/shape4.svg';
import Footer from '@components/footer/footer';

import styles from './learn.module.scss';

const LearnMorePage: React.FC = () => {
  const graphicsLeftProps = useMemo(
    () => ({
      className: classnames(
        styles.contentRow__graphics,
        styles['contentRow__graphics--left'],
      ),
      xlg: { span: 8, offset: 1 },
      lg: 9,
      sm: 4,
    }),
    [],
  );

  const graphicsRightProps = useMemo(
    () => ({
      className: classnames(
        styles.contentRow__graphics,
        styles['contentRow__graphics--right'],
      ),
      lg: { span: 8, offset: 8 },
      md: { span: 4, offset: 4 },
      sm: 4,
    }),
    [],
  );

  const textLeftProps = useMemo(
    () => ({
      className: classnames(
        styles.contentRow__text,
        styles['contentRow__text--left'],
      ),
      xlg: { span: 5, offset: 1 },
      lg: 6,
      sm: 4,
    }),
    [],
  );

  const textRightProps = useMemo(
    () => ({
      className: classnames(
        styles.contentRow__text,
        styles['contentRow__text--right'],
      ),
      xlg: { span: 5, offset: 10 },
      lg: { span: 6, offset: 9 },
      md: { span: 4, offset: 4 },
      sm: 4,
    }),
    [],
  );

  return (
    <Grid className={styles.learnMore}>
      <>
        <Column xlg={{ span: 7, offset: 1 }} lg={7} md={8} sm={4}>
          <Heading className={styles.heading}>
            About the
            <br />
            AI Alliance
          </Heading>
        </Column>
        <Column
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
            <strong>Build</strong> and release open-source frontier models based
            on a common requirement and validation framework.
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
            <strong>Inform</strong> and educate the public and regulators with a
            common narrative on the benefits of open-source AI to ensure trust
            and safety in AI.
          </p>
        </Column>
      </>

      <>
        <Column xlg={{ span: 7, offset: 1 }} lg={5} md={8} sm={4}>
          <Heading className={styles.inner_heading}>
            Join the
            <br />
            AI Alliance
          </Heading>
        </Column>
        <Column
          className={styles.contactForm}
          xlg={{ span: 8, offset: 8 }}
          lg={{ span: 9, offset: 7 }}
          md={6}
          sm={4}
        >
          <div>TODO Contact form</div>
        </Column>
      </>

      <Footer />

      <div className={styles.footerGraphics}>
        <Shape1b />
      </div>
    </Grid>
  );
};

export default LearnMorePage;
