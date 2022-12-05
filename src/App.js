import Input from "./components/Input";
import Button from "./components/Button";
import { Container, Content, Row } from "./components/styles";
import { useState } from "react";

function App() {
  const [ currentNumber, setCurrentNumber ] = useState(0)
  const [ prevNumber, setPrevNumber ] = useState(0)
  const [ operator, setOperator ] = useState()

  const handleAddNumber = (numberInput) => {
    setCurrentNumber( `${currentNumber === 0 ? '' : currentNumber}${numberInput}` )
  }

  const handleOnClear = () => {
    setCurrentNumber(0)
  }

  const percentage = () => {
    setCurrentNumber(currentNumber/100)
  }

  const toggleSign = () => {
    setCurrentNumber(currentNumber * -1)
  }

  const operatorHandler = (operadorInput) => {
    setOperator(operadorInput)
    setPrevNumber(currentNumber)
    setCurrentNumber(0)
    
  }

  const calculate = () => {
    switch(operator) {
      case '/':
        setCurrentNumber(Number(prevNumber/currentNumber))
        break;
      case '*':
        setCurrentNumber(Number(prevNumber) * Number(currentNumber))
        break;
      case '-':
        setCurrentNumber(Number(prevNumber) - Number(currentNumber))
        break;
      case '+':
        setCurrentNumber(Number(prevNumber) + Number(currentNumber))
        break;
      default: console.log("O referido cálculo não se encontra em nenhuma das opções")
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label='C' onClick={handleOnClear}/>
          <Button label='( )'/>
          <Button label='%' onClick={percentage}/>
          <Button label='÷' onClick={() => operatorHandler('/')}/>
        </Row>
        <Row>
          <Button label='7' onClick={() => handleAddNumber(7)}/>
          <Button label='8' onClick={() => handleAddNumber(8)}/>
          <Button label='9' onClick={() => handleAddNumber(9)}/>
          <Button label='X' onClick={() => operatorHandler('*')}/>
        </Row>
        <Row>
          <Button label='4' onClick={() => handleAddNumber(4)}/>
          <Button label='5' onClick={() => handleAddNumber(5)}/>
          <Button label='6' onClick={() => handleAddNumber(6)}/>
          <Button label='-' onClick={() => operatorHandler('-')}/>
        </Row>
        <Row>
          <Button label='1' onClick={() => handleAddNumber(1)}/>
          <Button label='2' onClick={() => handleAddNumber(2)}/>
          <Button label='3' onClick={() => handleAddNumber(3)}/>
          <Button label='+' onClick={() => operatorHandler('+')}/>
        </Row>
        <Row>
          <Button label='+/-' onClick={toggleSign} />
          <Button label='0' onClick={() => handleAddNumber(0)}/>
          <Button label=',' onClick={() => handleAddNumber('.')}/>
          <Button label='=' onClick={calculate}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
