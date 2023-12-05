import React from 'react';
import BaseContextProvider from '../../context/BaseContext';
import CookieAcceptance from './CookieAcceptance';
import { CookieAcceptanceProps } from './CookieAcceptance.types';

function CookieAcceptanceModal(props: CookieAcceptanceProps) {
  return (
    <BaseContextProvider>
      <CookieAcceptance {...props} />
    </BaseContextProvider>
  );
}

export default CookieAcceptanceModal;
