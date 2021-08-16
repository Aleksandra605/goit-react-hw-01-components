import OneItem from './oneItem';
import PropTypes from 'prop-types';

export default function Statistics({ items }) {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        {items.map((item) => (
          <li className="item" key={item.id}>
            <OneItem title={item.label} percentage={item.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  key: PropTypes.number,
};
