import './App.css';
import Image from './Image';
import catImage from './images/cat-2083492_1280.jpg'

function App() {
  return (
    <div>
      <Image source={catImage} alternativeText="Cute cat staring" />
    </div>
  );
}

export default App;
