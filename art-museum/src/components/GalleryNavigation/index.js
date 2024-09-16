import { NavLink, Route, Switch } from 'react-router-dom';
import './GalleryNavigation.css';

function GalleryNavigation({galleries}){
    console.log(galleries)

    return (
        <nav>
        <h1>Galleries</h1>
        <NavLink  exact to={`/`}>Home</NavLink>
        {galleries.map((item) => (
          <NavLink key={item.galleryid} to={`/galleries/${item.galleryid}`}>
            {item.name}
          </NavLink>
        ))}
        </nav>
      );
}

export default GalleryNavigation;
