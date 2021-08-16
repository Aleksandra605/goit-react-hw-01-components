import PropTypes from 'prop-types';

export default function OneItem({ title, percentage }) {
  return (
    <div className="item-div">
      <span className="label">{title}</span>
      <span className="percentage">{percentage}</span>
    </div>
  );
}

OneItem.propTypes = {
  title: PropTypes.string,
  percentage: PropTypes.number,
};
