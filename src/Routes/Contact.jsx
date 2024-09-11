import React, { useContext } from 'react';
import Form from '../Components/Form';
import { ContextGlobal } from '../Components/utils/global.context';
// Este componente deberá ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { theme } = useContext(ContextGlobal);
  return (
    <main className={`contact ${theme}`}>
      <h2>Want to know more?  Send us your data and we will contact you</h2>
      <Form />
    </main>
  );
};

export default Contact;
