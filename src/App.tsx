import { useState } from "react";
import { Button, Title } from "./components";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const aumentarCount = () => setCount((count) => count + 1);

  const aumentarCount2 = () => setCount2((count2) => count2 + 1);
  const aumentarCount3 = () => setCount2((count3) => count3 + 1);

  const disminuirCount = () => {
    if (count < 0) {
      alert("El estado no puede ser menor a 0");
      setCount(0);
      return;
    }
    setCount(count - 1);
  };

  const disminuirCount2 = () => {
    if (count2 < 0) {
      alert("El estado no puede ser menor a 0");
      setCount2(0);
      return;
    }
    setCount2(count2 - 1);
  };

  const disminuirCount3 = () => {
    if (count3 < 0) {
      alert("El estado no puede ser menor a 0");
      setCount3(0);
      return;
    }
    setCount3(count3 - 1);
  };

  return (
    <>
      <Title title="Este es el Estado" state={count} />
      <Button label="Aumentar" parentMethod={aumentarCount} />
      <Button label="Disminuir" parentMethod={disminuirCount} />
      <Title title="Este es otro Estado" state={count2} />
      <Button label="Aumentar2" parentMethod={aumentarCount2} />
      <Button label="Disminuir2" parentMethod={disminuirCount2} />
      <Title title="Este es otro Estado" state={count3} />
      <Button label="Aumentar2" parentMethod={aumentarCount3} />
      <Button label="Disminuir2" parentMethod={disminuirCount3} />
    </>
  );
}

export default App;
