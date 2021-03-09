import './App.css';
import StateInAction from './StateInAction';
import SimpleEvent  from './SimpleEvent';
import StatePractice  from './StatePractice';

function App() {
  const title = "I love React"
  return (
    <div className="App">
      <StateInAction title={title} />
      <SimpleEvent />
      <StatePractice />
    </div>
  );
}

export default App;
