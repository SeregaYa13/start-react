import Greeting from './components/welcome';
import MyButton from './components/button';
import ItemList from './components/list';
import ItemSelector from './components/ItemSelector';
import BlockColor from './components/BlockColor';
import './App.css';
import ClickerGame from './components/ClickerGame';
import DragAndDrop from './components/DragAndDrop';
import DynamicForm from './components/DinamicForm';
import UserFetch from './components/UserFetch';
import PostUsers from './components/PostsUser';
import AddPostForm from './components/AddpostForm';

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
        <DragAndDrop/>
        <DynamicForm/>
        <UserFetch/>
        <PostUsers/>
        <AddPostForm/>
        
         </>
    
  );
}

export default App;