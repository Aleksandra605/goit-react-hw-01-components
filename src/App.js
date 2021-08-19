import './App.css';
import statisticalData from './component-2/statistical-data.json';
import Statistics from './component-2/statistics';
import Profile from './component-1/Profile';
import userData from './component-1/user-data.json';
import friendsData from './component-3/friends-data.json';
import FriendsList from './component-3/friends';
import transactionData from './component-4/transactions-data.json';
import Transactions from './component-4/transactions';

// function App() {
//   return [
//     <Profile props={userData} />,
//     <Statistics items={statisticalData} />,
//     <FriendsList friends={friendsData} />,
//     <Transactions items={transactionData} />,
//   ];
// }

// function App1() {
//   return <Profile props={userData} />;
// }

// function App2() {
//   return <Statistics statisticalData={statisticalData} />;
// }

// function App3() {
//   return <FriendsList friends={friendsData} />;
// }

// function App4() {
//   return <Transactions items={transactionData} />;
// }

// export { App1, App2, App3, App4 };

export default function App() {
  return (
    <div>
      <Profile props={userData} />
      <Statistics statisticalData={statisticalData} />
      <FriendsList friends={friendsData} />
      <Transactions items={transactionData} />
    </div>
  );
}
