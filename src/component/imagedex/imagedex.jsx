import './magedex.css';  // Importing CSS file for styling
import ImageList from "../imageList/imageList.jsx";  // Importing the 'ImageList' component from another directory

function imagedex() {
  return (
    // Main wrapper for the component, applies styling from 'magedex.css'
    <div className="image-dex-wrapre">
      {/* Rendering the 'ImageList' component inside the wrapper */}
      <ImageList />
    </div>
  );
}

export default imagedex;
