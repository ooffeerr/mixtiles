import React from 'react';
import './App.css';
import Image from './Image'
import loadImage from './ImageLoader'

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { selected: false, image_urls: ['./logo192.png', './logo192.png', './logo192.png', './logo192.png'] };
}

    
  
  render() {
    return (
      <div className="App">
        <div>
          <Image className='image-top' image_url={this.state.image_urls[0]}/>
          <Image className='image-left' image_url={this.state.image_urls[1]}/>
          <Image className='image-right' image_url={this.state.image_urls[2]}/>
          <Image className='image-buttom' image_url={this.state.image_urls[3]}/>
        </div>
      <button onClick={this.onClick}>Refresh</button>
      </div>
    );
  }

  onClick = () => {
    loadImage(this.onImageLoaded)
  }

  onImageLoaded = (image) => {
    this.state.image_urls[2] = image
    this.setState({image_urls :  this.state.image_urls})
  }
}

export default App;
