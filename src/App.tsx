import { useState } from "react";
import { Button, Title } from "./components";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const aumentarCount = () => setCount((count) => count + 1);
  const aumentarCount2 = () => setCount2((count2) => count2 + 1);

  return (
    <>
      <Title title="Este es el Estado" state={count} />
      <Button label="Aumentar" parentMethod={aumentarCount} />
      <Title title="Este es otro Estado" state={count2} />
      <Button label="disminuir" parentMethod={aumentarCount2} />
    </>
  );
}

export default App;
