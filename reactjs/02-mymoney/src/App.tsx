import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsContext } from './TransactionsContext';

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
    <TransactionsContext.Provider value={[]}>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />     

        <NewTransactionModal 
          isOpen={isNewTransactionModelOpen}
          onRequestClose={handleClosedNewTransactionModal}
        />

      <GlobalStyled />
    </TransactionsContext.Provider>
  );
}
