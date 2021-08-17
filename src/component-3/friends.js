import OneFriend from './oneFriend';

export default function FriendsList({ friends }) {
  return (
    <ul className="friends-list">
      {friends.map((friend) => (
        <li className="item-friend" key={friend.id}>
          <OneFriend
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            id={friend.id}
          />
        </li>
      ))}
    </ul>
  );
}
