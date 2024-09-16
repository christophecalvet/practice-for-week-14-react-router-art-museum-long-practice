import harvardArt from "./data/harvardArt.js";
//console.log(harvardArt)
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryView";
import { NavLink, Route, Switch, useParams } from 'react-router-dom';


function App() {
  return (
    <div className="page-wrapper">

    <GalleryNavigation galleries={harvardArt.records}/>

    <Switch>
      <Route exact path="/">
      <h2>Harvard Art Museum</h2>
      <p>Look, but Don't Touch. Please select a Gallery in the navigation bar.</p>
      </Route>
      <Route path="/galleries/:galleryId">
      <GalleryView galleries={harvardArt.records} />
      </Route>
      <Route>
      <h2>Page not found</h2>
      </Route>
    </Switch>

    </div>
  );
}

export default App;
