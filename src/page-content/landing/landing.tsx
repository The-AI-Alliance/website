import { FC, useCallback, useRef } from 'react';
import useNavigation, { ROUTE } from '../../utils/useNavigation';
import LandingHeader from './landingHeader';
import Mission from './mission';
import Members from './members';

import styles from './landing.module.scss';
import ContactPanel from '../contact/contactPanel';

const LandingPage: FC = () => {
  const { navigate } = useNavigation();
  const missionRef = useRef<HTMLDivElement>(null);

  const scrollToMission = useCallback(() => {
    missionRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const onLearnMore = useCallback(() => {
    navigate(ROUTE.LEARN);
  }, [navigate]);

  return (
    <>
      <LandingHeader onLearnMore={scrollToMission} />
      <Mission onLearnMore={onLearnMore} sectionRef={missionRef} />
      <Members className={styles.membersSection} />
      <ContactPanel background="straight" />
    </>
  );
};

export default LandingPage;
