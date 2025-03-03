import './App.css';
import { Button } from './components/Button/Button';
import { Greeting } from './components/Greeting/Greeting';
import { Message } from './components/Message/Message';


function App() {
  return (
    <>
      <Greeting name="Іване" />
      <Message text="Довільний текст" />
      <Button onClick={onHandleClick} />
    </>
  );
}

function onHandleClick() {
  console.log('Кнопку було натиснуто');
}

export default App;

