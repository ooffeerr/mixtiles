import React from 'react';

import background from './black.png';

function Image(props) {
    return (
        <section style={{width: "400px", height: "400px",backgroundImage: "url(" + background + ")"}}>
            <img src = {props.image_url}/>
        </section>
    )
}

export default Image;