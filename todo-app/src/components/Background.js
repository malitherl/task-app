import {createClient} from 'pexels';
import { useState } from 'react';
function Background() {
    let key= process.env.REACT_APP_API_KEY
    
    const [src, setSrc] = useState('');
    const [photographer, setPhotographer] = useState('');
    const client = createClient(key.toString());
    client.photos.curated({ per_page: 1 })
          .then(response => {
 
                let link= response.photos[0].src.original;
                let name = response.photos[0].photographer;
                setSrc(link.toString());
                setPhotographer(name.toString());

          })
    return (
      <img src= {src} alt= { 'Photograph by ' + photographer} ></img>
    );
}

export default Background;