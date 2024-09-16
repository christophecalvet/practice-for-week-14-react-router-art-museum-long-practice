import { NavLink, useParams,Route} from 'react-router-dom'
import ArtImageTile from "../ArtImageTile"
import ArtDescription from '../ArtDescription';

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

        <Route path="/galleries/:galleryId/art/:artId">
            <ArtDescription gallery={galleryChoice}/>
        </Route>

        </>
    );
}

export default GalleryView;
