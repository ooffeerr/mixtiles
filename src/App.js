import React from 'react';
import './App.css';
import Image from './Image'
import loadImage from './ImageLoader'

var counter = 0
class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = { selected: false, image_urls: ['./logo192.png', './logo192.png', './logo192.png', './logo192.png'] };
  }

  render() {
    return (
      <div className="App">
        <div style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
          <Image image_url={this.state.image_urls[0]} style={{paddingLeft:'5px'}} />
          <div style={{ display: 'flex' }}>
            <Image className='image-left' image_url={this.state.image_urls[1]} />
            <Image className='image-right' image_url={this.state.image_urls[2]} />
          </div>
          <Image image_url={this.state.image_urls[3]} style={{marginLeft:'-5px'}}/>
          <button style={{ alignSelf: 'center' }} onClick={this.onClick}>Refresh</button>
        </div>
      </div>
    );
  }

  onClick = () => {
    loadImage(this.onImageLoaded)
  }

  onImageLoaded = (image) => {
    this.state.image_urls[counter % 4] = image // rotate images randomly on load. 
    counter++
    this.setState({ image_urls: this.state.image_urls })
  }
}

export default App;
