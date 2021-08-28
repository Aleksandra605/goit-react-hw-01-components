import PropTypes from 'prop-types';
import s from './friends.module.css';
import FriendsListItem from './friendsListItem';

export default function FriendsList({ friends }) {
  return (
    <ul className={s.friendsList}>
      {friends.map(friend => {
        return <FriendsListItem friendData={friend} key={friend.id} />;
      })}
    </ul>
  );
}

FriendsList.propTypes = {
  key: PropTypes.number,
};
