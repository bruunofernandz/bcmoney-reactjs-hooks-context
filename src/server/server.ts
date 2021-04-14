import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de aplicativo',
          type: 'deposit',
          category: 'DEV',
          amount: 6000,
          createdAt: new Date('2021-02-01 09:00:00')
        },
        {
          id: 2,
          title: 'Açai da Barra',
          type: 'withdraw',
          category: 'iFood',
          amount: 45,
          createdAt: new Date('2021-01-23 11:30:00')
        },
        {
          id: 3,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 780,
          createdAt: new Date('2021-01-23 11:30:00')
        },
      ]
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    });
  }
});