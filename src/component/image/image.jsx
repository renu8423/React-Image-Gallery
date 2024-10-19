// Child Component: Image.jsx
import { Link } from "react-router-dom";
import "./image.css"


function Image({ id, url, title }) { // Destructure the props
  return (
    <div className="image-card">
     <Link to={`/imagedetail/${id}`}>
     <img className="imagesh" src={url}style={{ width: '250px', height:"250px"}} alt={title || 'Image'} />
     <h3>{title || 'Untitled'}</h3> {/* Safeguard in case title is undefined */}
     </Link>
    
    </div>
  );
}

export default Image;
