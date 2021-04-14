import React, { useState } from 'react';
import { GlobalStyle } from './styles/globalStyles';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import Modal from 'react-modal';
import './server/server';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import usePersistedTheme from './hooks/usePersistedTheme';

Modal.setAppElement('#root');

export const App: React.FC = () => {
  const [modalState, setModalState] = useState(false);
  const [theme, setTheme] = usePersistedTheme('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  function handleOpenNewTransaction() {
    setModalState(true);
  }

  function handleCloseNewTransaction() {
    setModalState(false);
  }
  return (
    <ThemeProvider theme={theme}>
      <TransactionsProvider>
        <Header onOpenNewModalTransaction={handleOpenNewTransaction} toggleTheme={toggleTheme} />

        <Dashboard />
        <NewTransactionModal 
          isOpen={modalState} 
          onRequestClose={handleCloseNewTransaction} />
        <GlobalStyle />
      </TransactionsProvider>
    </ThemeProvider>
  );
};