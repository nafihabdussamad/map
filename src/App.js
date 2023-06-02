import React, {useState} from "react";
import './App.css';
import LeafletMap from './components/LeafletMap';
import Selector from './components/Selector';

function App() {

  const [selectedImage, setSelectedImage] = useState('map_1');

  const handleImageChange = (event) => {
    setSelectedImage(event.target.value);
  };

  return (
    <div className="App">
      <div className="content">
        <LeafletMap selectedImage = {selectedImage}/>
        <Selector onChange={handleImageChange} />
      </div>
    </div>
  );
}

export default App;
