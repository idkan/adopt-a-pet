
import './App.css';
import Header from '../Header/Header';
import Cards from '../Cards/Cards';
import SwipeButton from "../SwipeButton/SwipeButton"

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header/>
      {/* CenterCards */}
      <Cards/>
      {/* SwipeButtons */}
      <SwipeButton />
    </div>
  );
}

export default App;
