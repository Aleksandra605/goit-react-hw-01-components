// import OneItem from './oneItem';
import PropTypes from 'prop-types';
import s from './statistics.module.css';

export default function Statistics({ statisticalData }) {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>Upload stats</h2>
      <ul className={s.list}>
        {statisticalData.map(item => (
          <li className={s.item} key={item.id}>
            <span className={s.label}>{item.label}</span>
            <span className={s.percentage}>{item.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  key: PropTypes.string,
};
