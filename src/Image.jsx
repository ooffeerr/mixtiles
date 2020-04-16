import React from 'react';

import background from './black.png';

function Image(props) {
    console.log('props = ' + props)

    return (
        <section style={{width: "100px", height: "100px", borderImage: "url(" + background + ") 30 stretch"}}>
            <img src = {props.image_url} style={{maxWidth: '100%', maxHeight: '100%'}}/>
        </section>
    )
}

export default Image;