import harvardArt from "./data/harvardArt.js";
//console.log(harvardArt)
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryView";
import { NavLink, Route, Switch, useParams } from 'react-router-dom';


function App() {
  return (
    <div className="page-wrapper">
    <GalleryNavigation galleries={harvardArt.records}/>
    <Route path="/galleries/:galleryId">
    <GalleryView galleries={harvardArt.records} />
    </Route>
    </div>
  );
}

export default App;
