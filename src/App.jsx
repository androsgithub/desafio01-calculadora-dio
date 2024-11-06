import { useState } from "react";
import { Button } from "./components/button";
import { Input } from "./components/input";
import { Container, Content, Row } from "./styles";

function App() {
  const [currentNumber, setCurrentNumber] = useState("0");
  function handleAddNumber(number) {
    function gerarResultado() {
      setCurrentNumber((prev) => `${eval(prev.replaceAll("X", "*"))}`);
    }
    let n = number.toString();
    if (n == "0" && currentNumber.startsWith("0")) {
      console.log("numero zero");
    } else if (n == "CE") {
      setCurrentNumber((prev) => prev.substring(0, prev.length - 1));
      if (currentNumber.length == 1) {
        setCurrentNumber("0");
      }
    } else if (currentNumber.startsWith("0")) {
      setCurrentNumber(`${n}`);
    } else if (n == "=") {
      gerarResultado();
    } else if (
      (n == "+" || n == "-" || n == "/" || n == "X") &&
      (currentNumber.includes("+") ||
        currentNumber.includes("-") ||
        currentNumber.includes("/") ||
        currentNumber.includes("X"))
    ) {
      if (n == "+" || n == "-" || n == "/" || n == "X") return;
      gerarResultado();
      setCurrentNumber((prev) => `${prev} ${n} `);
    } else if (n == "+" || n == "-" || n == "/" || n == "X") {
      console.log("b");
      if (currentNumber.startsWith("0")) return;
      setCurrentNumber((prev) => `${prev} ${n} `);
    } else {
      setCurrentNumber((prev) => `${prev}${n}`);
    }
  }
  return (
    <Container>
      <Content>
        <Input value={currentNumber} />

        <Row>
          <Button label={7} onClick={() => handleAddNumber(7)} />
          <Button label={8} onClick={() => handleAddNumber(8)} />
          <Button label={9} onClick={() => handleAddNumber(9)} />
          <Button label="CE" onClick={() => handleAddNumber("CE")} />
        </Row>

        <Row>
          <Button label={4} onClick={() => handleAddNumber(4)} />
          <Button label={5} onClick={() => handleAddNumber(5)} />
          <Button label={6} onClick={() => handleAddNumber(6)} />
          <Button label="-" onClick={() => handleAddNumber("-")} />
        </Row>
        <Row>
          <Button label={1} onClick={() => handleAddNumber(1)} />
          <Button label={2} onClick={() => handleAddNumber(2)} />
          <Button label={3} onClick={() => handleAddNumber(3)} />
          <Button label="+" onClick={() => handleAddNumber("+")} />
        </Row>
        <Row>
          <Button label={0} onClick={() => handleAddNumber(0)} />
          <Button label={"/"} onClick={() => handleAddNumber("/")} />
          <Button label={"X"} onClick={() => handleAddNumber("X")} />
          <Button label="=" onClick={() => handleAddNumber("=")} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
