import "./App.css";
import AddProject from "./AddProject/AddProject";
// import AddTask from "./AddTask/AddTask";
import SpacingGrid from "./SpacingGrid/SpacingGrid";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <body>
        <AddProject />
        {/* <AddTask /> */}
        <SpacingGrid />
      </body>
    </div>
  );
}

export default App;
