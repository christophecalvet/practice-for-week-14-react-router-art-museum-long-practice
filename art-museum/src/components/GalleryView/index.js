import { NavLink, useParams,Route} from 'react-router-dom'


function GalleryView({galleries}){
    const {galleryId} = useParams();
   // console.log(galleryId)

   let galleryChoice = galleries.find((item) => String(item.galleryid) === galleryId);
   console.log(galleryChoice.name);


    return(
        <>
        <h1>Hello from GalleryView</h1>
        <h2>{galleryChoice.name}</h2>
        </>
    );
}

export default GalleryView;
