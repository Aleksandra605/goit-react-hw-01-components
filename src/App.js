import './App.css';
import statisticalData from './component-2/statistical-data.json';
import Statistics from './component-2/statistics';
import Profile from './component-1/Profile';
import user from './component-1/user-data.json';
import friendsData from './component-3/friends-data.json';
import Friends from './component-3/friends';

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
  return <Friends props={friendsData} />;
}

export { App, App2, App3 };
