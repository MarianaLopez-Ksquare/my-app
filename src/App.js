import { NavBar } from './components/NavBar';
import { CardImageCollection } from './components/CardImageCollection';
import { CardInformation } from './components/CardInformation';
import { Button } from './components/Button';
import { ButtonShop } from './components/ButtonShop';

function App() {
  return (
    <div className="App">
      <body>
        <NavBar></NavBar>
        <div className='container'>
          <CardImageCollection></CardImageCollection>
          <div className='infoContainer'>
            <CardInformation></CardInformation>
            <div className='buttonsCart'>
              <Button></Button>
              <ButtonShop></ButtonShop>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
