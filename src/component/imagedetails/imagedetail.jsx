import { useParams } from "react-router-dom";
import "./imagedetail.css";  // Importing the CSS for styling
import axios from "axios";    // Importing axios for making API calls
import { useEffect, useState } from "react";  // Importing hooks for state management and lifecycle

function Imagedetail() {
  // Fetch the 'id' parameter from the URL using 'useParams' hook
  const { id } = useParams();  
  console.log(id);

  // State to hold the image data. Initialized as an empty object.
  const [image, setImage] = useState({});

  // Function to fetch image data from the API
  async function downloadImage() {
    try {
      // Making a GET request to fetch image data based on the 'id'
      const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}?limit=20`);
      
      console.log("-------------", response.data);

      // Updating the state with the fetched image data
      setImage({
        name: response.data.name,  // Assuming the API response contains a 'name' field
        image: response.data.photo.url,  // URL of the image
        description: response.data.photo.description,  // Image description
        title: response.data.photo.title  // Image title
      });
    } catch (error) {
      // Logging an error if the API call fails
      console.error("Error fetching image data:", error);
    }
  }

  // useEffect hook to trigger the 'downloadImage' function when the component mounts
  useEffect(() => {
    downloadImage();  // Fetch the image when the component loads
  }, []);  // Empty dependency array means this will run only once after initial render

  return (
    <>
      {/* Main container for the image detail */}
      <div className="image-detaile-wraper">
        <div className="image-name-value">
          
          {/* Displaying the image */}
          <img className="image-image" src={image.image} alt={image.title} />
          
          {/* Displaying the image description and title */}
          <div className="imagedescription">
            {image.description}
            <div className="title">{image.title}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Imagedetail;
