import Greeting from './components/welcome';
import MyButton from './components/button';
import ItemList from './components/list';
import ItemSelector from './components/ItemSelector';
import BlockColor from './components/BlockColor';
import './App.css';
import ClickerGame from './components/ClickerGame';


function App() {
  return (
    <>
    <ClickerGame/>

    <Greeting name="Maksim"/>
      <MyButton label="Жми меня" onClick={()=> alert("Меня нажали!")}/>
      <MyButton label="Не жми меня" onClick={()=> alert("Меня все таки нажали!")}/>
        <ItemList items = {['яблоко', 'банан', 'чучхела']}/>
        <ItemSelector items = {['яблоко', 'банан', 'чучхела']}
        onSelect={(element) => alert(`Вы выбрали: ${element}`)}/>
        <BlockColor color='red'/>
        <BlockColor color='green'/>
        <BlockColor color='yellow'/>

         </>
    
  );
}

export default App;