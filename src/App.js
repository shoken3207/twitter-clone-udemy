import Widgets from './components/widget/Widgets';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Timeline from './components/timeline/Timeline';

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar />
      {/* timeline */}
      <Timeline />
      {/* widget */}
      <Widgets />
    </div>
  );
}

export default App;
