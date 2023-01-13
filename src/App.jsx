import "./App.css";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import data from "./data";

function App() {
  const card = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <div className="App">
      <div className="app-container">
        <Navbar />
        <div className="card-container">{card}</div>
      </div>
    </div>
  );
}

export default App;
