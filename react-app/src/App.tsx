import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVis, setAlertVis] = useState(false);
  const handleClick = () => {
    setAlertVis(true);
  };

  return (
    <>
      {alertVis && (
        <Alert onClose={() => setAlertVis(false)}>Hello, I am an Alert</Alert>
      )}
      <Button color="danger" onClick={handleClick}>
        Push me
      </Button>
    </>
  );
}

export default App;
