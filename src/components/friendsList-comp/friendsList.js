import PropTypes from 'prop-types';
import s from './friends.module.css';
import FriendsListItem from './friendsListItem';

export default function FriendsList({ friends }) {
  return (
    <ul className={s.friendsList}>
      {friends.map(friend => {
        const { isOnline, avatar, name } = friend;
        return (
          <FriendsListItem
            isOnline={isOnline}
            avatar={avatar}
            name={name}
            key={friend.id}
          />
        );
      })}
    </ul>
  );
}

FriendsList.propTypes = {
  key: PropTypes.number,
};
