export default function Transactions({ transactionsData }) {
  return (
    <table className="transaction-history">
      <thead>
        <tr className="column-header">
          <th className="head">Type</th>
          <th className="head">Amount</th>
          <th className="head">Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactionsData.map((transaction) => {
          const { id, type, amount, currency } = transaction;
          return (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
