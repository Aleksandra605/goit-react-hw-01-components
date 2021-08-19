import PropTypes from 'prop-types';
import s from './friends.module.css';

export default function FriendsList({ friends }) {
  return (
    <ul className={s.friendsList}>
      {friends.map(friend => {
        const { id, isOnline, avatar, name } = friend;
        return (
          <li className={s.item} key={id}>
            <span className={isOnline ? `${s.online}` : `${s.offline}`}></span>
            <img className={s.avatar} src={avatar} alt={name} width="48" />
            <p className={s.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
}

FriendsList.propTypes = {
  id: PropTypes.number,
  isOnline: PropTypes.bool,
  name: PropTypes.string,
  avatar: PropTypes.string,
};
