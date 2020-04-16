import mockImage from './mock_image.jpg'

function loadImage(callback) {
    setTimeout(callback(mockImage), 1)
}

export default loadImage;