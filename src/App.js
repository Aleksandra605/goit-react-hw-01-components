import './App.css';
import statisticalData from './component-2/statistical-data.json';
import Statistics from './component-2/statistics';
import Profile from './component-1/Profile';
import userData from './component-1/user-data.json';
import friendsData from './component-3/friends-data.json';
import FriendsList from './component-3/friends';
import transactionData from './component-4/transactions-data.json';
import Transactions from './component-4/transactions';

export default function App() {
  return (
    <div>
      <Profile
        avatar={userData.avatar}
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        stats={userData.stats}
        // followers={userData.stats.followers}
        // views={userData.stats.views}
        // likes={userData.stats.likes}
      />
      <Statistics statisticalData={statisticalData} />
      <FriendsList friends={friendsData} />
      <Transactions items={transactionData} />
    </div>
  );
}
