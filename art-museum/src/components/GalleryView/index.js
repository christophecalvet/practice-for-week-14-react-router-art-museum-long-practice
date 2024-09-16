import { NavLink, useParams,Route} from 'react-router-dom'
import ArtImageTile from "../ArtImageTile"

function GalleryView({galleries}){
    const {galleryId} = useParams();
   // console.log(galleryId)

   let galleryChoice = galleries.find((item) => String(item.galleryid) === galleryId);
   console.log(galleryChoice.name);

   let artworks = galleryChoice.objects

    return(
        <>
        <h1>Hello from GalleryView</h1>
        <h2>{galleryChoice.name}</h2>
        {artworks.map((item) => (
            <Route exact path="/galleries/:galleryId">
            <ArtImageTile art={item} gallery={galleryChoice}></ArtImageTile>
          </Route>
        ))}
        </>
    );
}

export default GalleryView;
