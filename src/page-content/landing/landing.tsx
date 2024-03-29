import { FC, useCallback, useRef, useState } from 'react';
import useNavigation, { ROUTE } from '../../utils/useNavigation';
import LandingHeader from './landingHeader';
import Mission from './mission';
import Members from './members';
import useResize from '@utils/useResize';
import { EasingFunction, backInOut } from 'framer-motion';
import AnimatedBall from '@components/ball/animatedBall';
import { calculateAnimationStops } from './animations';
import PageShell from '../pageShell/pageShell';

import styles from './landing.module.scss';

const DEBUG_ANIMATIONS = false;

const LandingPage: FC = () => {
  const { navigate } = useNavigation();
  const missionRef = useRef<HTMLDivElement>(null);
  const shape1ref = useRef<HTMLDivElement>(null);
  const shape2ref = useRef<HTMLDivElement>(null);
  const shape3ref = useRef<HTMLDivElement>(null);

  const scrollToMission = useCallback(() => {
    missionRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const onLearnMore = useCallback(() => {
    navigate(ROUTE.LEARN);
  }, [navigate]);

  const [animationStops, setAnimationStops] = useState<{
    sizes: number[];
    stopPoints: number[];
    xCoordinates: number[];
    yCoordinates: number[];
    easings: EasingFunction[];
  } | null>(null);

  const updateAnimationStops = useCallback(() => {
    const positions = calculateAnimationStops(shape1ref, shape2ref, shape3ref);
    setAnimationStops(positions);
  }, []);

  const onMissionEnter = useCallback(() => {
    if (shape1ref.current && shape2ref.current) {
      updateAnimationStops();
    }
  }, [updateAnimationStops]);

  useResize(updateAnimationStops, () => setAnimationStops(null));

  const renderBreakpoints = useCallback(
    () =>
      animationStops?.stopPoints?.map((scroll, idx) => (
        <div
          key={idx}
          style={{
            position: 'absolute',
            width: 3,
            height: 3,
            backgroundColor: 'red',
            top:
              animationStops.yCoordinates[idx] -
              1 +
              animationStops.sizes[idx] / 2,
            left:
              animationStops.xCoordinates[idx] -
              1 +
              animationStops.sizes[idx] / 2,
          }}
        ></div>
      )),
    [animationStops],
  );

  return (
    <PageShell withContactPanel>
      {DEBUG_ANIMATIONS ? renderBreakpoints() : null}
      {animationStops ? (
        <AnimatedBall
          className={styles.animatedBall}
          xStopCoordinates={animationStops.xCoordinates}
          yStopCoordinates={animationStops.yCoordinates}
          stopPoints={animationStops.stopPoints}
          ballSizes={animationStops.sizes}
          easeX={animationStops.easings}
          easeY={[v => v, backInOut]}
        />
      ) : null}

      <LandingHeader onLearnMore={scrollToMission} />

      <Mission
        onLearnMore={onLearnMore}
        onViewportEnter={onMissionEnter}
        sectionRef={missionRef}
        shape1ref={shape1ref}
        shape2ref={shape2ref}
        shape3ref={shape3ref}
      />

      <Members className={styles.membersSection} />
    </PageShell>
  );
};

export default LandingPage;
