import s from './friends.module.css';

export default function FriendsListItem({ isOnline, avatar, name }) {
  return (
    <div className={s.item}>
      <span className={isOnline ? `${s.online}` : `${s.offline}`} />
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </div>
  );
}
