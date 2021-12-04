const API_KEY = '3GosCScs1h1VkhsnUN3M64D2gUgUEhhF'

export default function getGifs({keyword = "cars"} = {}) {

    const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`
    
    
    return fetch(API_URL)
    .then( res => res.json())
    .then( response => {
      const {data} = response


      const gifs = data.map( gif => {
            const {images, id, title} = gif
            const {url} = images.downsized_medium

            return {id, title, url}
      } )

      console.log(gifs);
      return gifs
      
    }).catch( err => {
      console.log(err);
    })
}