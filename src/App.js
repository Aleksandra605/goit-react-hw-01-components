import './App.css';
import statisticalData from './component-2/statistical-data.json';
import Statistics from './component-2/statistics';
import Profile from './component-1/Profile';
import userData from './component-1/user-data.json';
// import friendsData from './component-3/friends-data.json';
// import FriendsList from './component-3/friends';
// import transactionData from './component-4/transactions-data.json';
// import Transactions from './component-4/transactions';

function App() {
  return [<Profile props={userData} />, <Statistics items={statisticalData} />];
  // <FriendsList friends={friendsData} />,
  // <Transactions items={transactionData} />,
}

export { App };
