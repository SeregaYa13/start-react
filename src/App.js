import Greeting from './components/welcome';
import MyButton from './components/button';
import ItemList from './components/list';
import ItemSelector from './components/ItemSelector';
import BlockColor from './components/BlockColor';
import './App.css';
import Weather from './components/Weather';
import TempControl from './components/TempControl';
import SimpleForm from './components/SimpleForm';
import SimpleSecond from './components/SimpleSecond';

function App() {
  return (
    <>
      <Greeting name="Maksim"/>
      <MyButton label="Жми меня" onClick={()=> alert("Меня нажали!")}/>
      <MyButton label="Не жми меня" onClick={()=> alert("Меня все таки нажали!")}/>
        <ItemList items = {['яблоко', 'банан', 'чучхела']}/>
        <ItemSelector items = {['яблоко', 'банан', 'чучхела']}
        onSelect={(element) => alert(`Вы выбрали: ${element}`)}/>
        <BlockColor color='red'/>
        <BlockColor color='green'/>
        <BlockColor color='yellow'/>
        <Weather city='Moscow' temp='37' icon='https://img.icons8.com/fluency-systems-filled/96/snow.png'/>
        <Weather city='Sochi' temp='54' icon='https://img.icons8.com/fluency-systems-filled/96/snow.png'/>
        <Weather city='Kazan' temp='54' icon='https://img.icons8.com/fluency-systems-filled/96/snow.png'/>
        <TempControl/>
        <SimpleForm/>
        <SimpleSecond/>
    </>
    
  );
}

export default App;
