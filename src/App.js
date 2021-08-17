import './App.css';
import statisticalData from './component-2/statistical-data.json';
import Statistics from './component-2/statistics';
import Profile from './component-1/Profile';
import user from './component-1/user-data.json';
import friendsData from './component-3/friends-data.json';
import FriendsList from './component-3/friends';
import transactionData from './component-4/transactions-data.json';
import Transactions from './component-4/transactions';

function App() {
  return (
    <Profile
      userImage={user.avatar}
      name={user.name}
      tag={user.tag}
      location={user.location}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />
  );
}

function App2() {
  return <Statistics items={statisticalData} />;
}

function App3() {
  return <FriendsList friends={friendsData} />;
}

function App4() {
  return <Transactions transactionsData={transactionData} />;
}

export { App, App2, App3, App4 };
