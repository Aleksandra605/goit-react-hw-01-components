import PropTypes from 'prop-types';
import s from './statistics.module.css';

export default function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title ? <h2 className={s.title}>{title}</h2> : null}
      <ul className={s.list}>
        {stats.map(item => {
          const { id, label, percentage } = item;
          return (
            <li
              className={s.item}
              key={id}
              style={{
                backgroundColor:
                  '#' + Math.floor(Math.random() * 16777215).toString(16),
              }}
            >
              <span className={s.label}>{label}</span>
              <span className={s.percentage}>{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  label: PropTypes.string,
  key: PropTypes.string,
  percentage: PropTypes.number,
};
