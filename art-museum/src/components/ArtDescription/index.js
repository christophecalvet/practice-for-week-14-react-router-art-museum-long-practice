import {Link, NavLink, useParams, Route} from 'react-router-dom'

function ArtDescription({gallery}){

    let {artId} = useParams();

    let artSelected = gallery.objects.find((item) => String(item.objectid) === artId);
    console.log(artSelected.objectid);

    let allImagesForArtSelected = artSelected.images

    return(
        <>
        <h1>In Art Description for {artSelected.objectnumber}</h1>

        <Link to={`/galleries/${gallery.galleryid}`}>Back to Gallery {gallery.name}</Link>

        <h2>Description </h2>
        <p>{artSelected.description}</p>

        <h2>Credit </h2>
        <p>{artSelected.creditline}</p>

        <h2>Technique </h2>
        <p>{artSelected.technique}</p>

        {allImagesForArtSelected.map((item) => (
            <img src={item.baseimageurl} alt={item.title} />
        ))}






        </>

    )
}

export default ArtDescription;


        //<a href="https://google.com" target="_blank" rel="noopener noreferrer">Click here</a>
