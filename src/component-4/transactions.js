export default function Transactions({ items }) {
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
        {items.map((item) => {
          const { id, type, amount, currency } = item;
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
