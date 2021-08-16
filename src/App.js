import './App.css';
import statisticalData from './statistic/statistical-data.json';
import Statistics from './statistic/statistics';
import Profile from './component-1/Profile';
import user from './component-1/user.json';

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

export { App, App2 };
