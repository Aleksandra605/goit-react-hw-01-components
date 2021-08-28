import s from './friends.module.css';
import PropTypes from 'prop-types';

export default function FriendsListItem({ isOnline, avatar, name }) {
  return (
    <li className={s.item}>
      <span className={isOnline ? `${s.online}` : `${s.offline}`} />
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendsListItem.propTypes = {
  isOnline: PropTypes.bool,
  name: PropTypes.string,
  avatar: PropTypes.string,
};
