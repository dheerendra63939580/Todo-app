import './App.css';
import TaskInput from './components/TaskInput/TaskInput';
import ShowToDoList from './components/ShowToDoList/ShowToDoList';

function App() {
  return (
    <div className="app-css">
      <TaskInput/>
      <ShowToDoList/>
    </div>
  );
}

export default App;
