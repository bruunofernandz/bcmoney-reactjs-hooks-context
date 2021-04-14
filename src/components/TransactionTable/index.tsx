import React from 'react';
import { useTransactions } from '../../hooks/useTransactions';

import { Container } from './styles';

interface TransactionData {
  id: number;
  title: string;
  amount: number;
  type: string,
  category: string;
  createdAt: string;
}

const TransactionTable: React.FC = () => {
  const {transactions} = useTransactions();
  
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction: TransactionData) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td 
                className={transaction.type}
              >
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat().format(
                  new Date(transaction.createdAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default TransactionTable;