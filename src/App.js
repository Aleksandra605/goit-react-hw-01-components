import './App.css';
import statisticalData from './components/statistics-comp/statistical-data.json';
import Statistics from './components/statistics-comp/statistics';
import Profile from './components/profile-comp/Profile';
import userData from './components/profile-comp/user-data.json';
import friendsData from './components/friendsList-comp/friends-data.json';
import FriendsList from './components/friendsList-comp/friendsList';
import transactionData from './components/transactions-comp/transactions-data.json';
import Transactions from './components/transactions-comp/transactions';

export default function App() {
  return (
    <div>
      <Profile
        avatar={userData.avatar}
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        stats={userData.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendsList friends={friendsData} />
      <Transactions items={transactionData} />
    </div>
  );
}
