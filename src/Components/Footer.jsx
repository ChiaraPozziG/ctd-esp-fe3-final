import React, { useContext } from 'react';
import { ContextGlobal } from '../Components/utils/global.context';

const Footer = () => {
  const { theme } = useContext(ContextGlobal);
  return (
    <footer className={`footer ${theme}`}>
        <p>Powered by</p>
        <img src="./../../DH.ico" alt='DH-logo' />
    </footer>
  )
}

export default Footer
