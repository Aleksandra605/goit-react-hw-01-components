import PropTypes from 'prop-types';

export default function OneFriend({ avatar, name, isOnline }) {
  return (
    <div className="friend">
      <span className={isOnline ? 'online' : 'offline'}></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </div>
  );
}

OneFriend.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
