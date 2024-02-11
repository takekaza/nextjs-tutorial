export type Invoicee = {
  id: string;
  customer_id: string;
  amount: number;
  status: 'pending' | 'paid';
  date: string;
};
