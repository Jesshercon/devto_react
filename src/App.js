//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//Components
import Navbar from './components/NavBar';
import Counter from './components/Counter';

function App() {
  return (
    < div className="App" >
      <Navbar />
      <Counter />
    </div>
  );
}

export default App;
