import OneFriend from './oneFriend';

export default function Friends({ props }) {
  return (
    <ul className="friends-list">
      {props.map((prop) => (
        <li className="item-friend" key={prop.id}>
          <OneFriend
            avatar={prop.avatar}
            name={prop.name}
            isOnline={prop.isOnline}
            id={prop.id}
          />
        </li>
      ))}
    </ul>
  );
}
