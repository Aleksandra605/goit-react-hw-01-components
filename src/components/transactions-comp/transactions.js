import s from './transactions.module.css';
import PropTypes from 'prop-types';

export default function Transactions({ items }) {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr className={s.columnHeader}>
          <th className={s.head}>Type</th>
          <th className={s.head}>Amount</th>
          <th className={s.head}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => {
          const { id, type, amount, currency } = item;
          return (
            <tr key={id}>
              <td>{type}</td>
              <td className={s.amount}>{amount}</td>
              <td className={s.currency}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

Transactions.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
