import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

export default function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      {alertVisible && <Alert onClose={() => {setAlertVisible(false)}}>Bingo</Alert>}
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Button
        onClick={() => {
          setAlertVisible(true);
        }}
      >
        OK
      </Button>
    </div>
  );
}
