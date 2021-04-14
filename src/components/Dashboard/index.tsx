import React from 'react';
import { Summary } from '../Summary';
import TransactionTable from '../TransactionTable';
import { Container } from './styles';

export const Dashboard: React.FC = () => {
  return(
    <Container>
      <Summary />
      <TransactionTable />
    </Container>
  );
};