import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
//import ItemCount from './components/ItemCount/ItemCount';
import Promesas from './components/Promesas/Promesas';


function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Hola Mundo" />
      {
        //<ItemCount />

      }
      <Promesas/>
      
    </>
  );
}

export default App;
