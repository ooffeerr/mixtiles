import React from 'react';
import './App.css';
import Image from './Image'

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <Image className='image-top'/>
          <Image className='image-left'/>
          <Image className='image-right'/>
          <Image className='image-buttom'/>
      </div>
    );
  }
  
}

export default App;
