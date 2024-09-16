import {Link, NavLink, useParams, Route} from 'react-router-dom'

function ArtImageTile({art,gallery}){
    let firstImage = art.images[0]
    console.log(firstImage)
    return (
        <>
        <h1>In art image {firstImage.imageid} for object {art.objectnumber}</h1>
        <Link to={`/galleries/${gallery.galleryid}/art/${firstImage.imageid}`}>
        <img src={firstImage.baseimageurl} alt={firstImage.title} />
        </Link>
        </>
      );
}

export default ArtImageTile;

// /galleries/:galleryId/art/:artId
