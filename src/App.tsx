import "react-base-table/styles.css";
import "./App.css";
import ExampleOne from "./utils/components/example-one";
import ExampleTwo from "./utils/components/example-two";

function App() {
  return (
    <div className="container">
      <ExampleOne />
      <br />
      <br />
      <ExampleTwo />
    </div>
  );
}

export default App;
