import PropTypes from 'prop-types';
import s from './friends.module.css';
import FriendsListItem from './friendsListItem';

export default function FriendsList({ friends }) {
  return (
    <ul className={s.friendsList}>
      {friends.map(friend => {
        const { id, isOnline, avatar, name } = friend;
        return (
          <li className={s.itemLi} key={id}>
            <FriendsListItem
              id={id}
              isOnline={isOnline}
              avatar={avatar}
              name={name}
            />
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
