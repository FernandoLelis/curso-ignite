import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";

import { GlobalStyled } from "./styles/global";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModelOpen, setIsNewTransactionModelOpen] = useState(false);

  function handleOpenNewTransactionModal() {
      setIsNewTransactionModelOpen(true);
  }

  function handleClosedNewTransactionModal() {
      setIsNewTransactionModelOpen(false);
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />     

      <Modal 
        isOpen={isNewTransactionModelOpen}
        onRequestClose={handleClosedNewTransactionModal}
      >
        <h2>Cadastra transacao</h2>
      </Modal>

      <GlobalStyled />
    </>
  );
}
