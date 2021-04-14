/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import api from '../services/api';

interface TransactionData {
  id: number;
  title: string;
  amount: number;
  type: string,
  category: string;
  createdAt: string;
}

interface TransactionProviderProps {
  children: ReactNode;
}

interface TransactionContextData {
  transactions : TransactionData[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

type TransactionInput = Omit<TransactionData, 'id' | 'createdAt'>;

const TransactionsContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

export function TransactionsProvider({ children } : TransactionProviderProps) {
  const [transactions, setTransactions] = useState<TransactionData[]>([]);

  useEffect(() => {
    getTransactions();
  }, []);
  
  async function getTransactions() {
    await api.get('/transactions')
      .then(response => {
        setTransactions(response.data.transactions);
      });
  }

  async function createTransaction(transactionInput: TransactionInput ) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date()
    });
    const { transaction } = response.data;

    setTransactions([
      ...transactions,
      transaction
    ]);
  }
  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export const useTransactions = () => {
  const context = useContext(TransactionsContext);

  return context;
};