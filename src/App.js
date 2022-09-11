import "./App.css";
// import AddProject from "./AddProject/AddProject";
import SpacingGrid from "./SpacingGrid/SpacingGrid";
import Header from "./Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <body>
        {/* <AddProject /> */}
        <SpacingGrid />
      </body>
    </div>
  );
}

export default App;
