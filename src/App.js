import './App.css';
import statisticalData from './statistic/statistical-data.json';
import Statistics from './statistic/statistics';

function App() {
  return <Statistics items={statisticalData} />;
}

export default App;
