import axios from "axios";
import { useState, useEffect } from "react";
import "./imagelist.css";
import Image from "../image/image.jsx"; // Import the Image component

function ImageList() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);
  const [apiUrl, setApiUrl] = useState("https://api.slingacademy.com/v1/sample-data/photos?&limit=20");

  async function downloadImages(url) {
    setIsLoading(true);
    try {
      const response = await axios.get(url);
      const imageResult = response.data.photos; // Assuming the images are in the 'photos' array

      // Map over imageResult to transform the data into the structure you need
      const res = imageResult.map((img) => ({
        id: img.id,
        name: img.description, // Assuming 'description' holds the name
        url: img.url, // Assuming 'url' holds the image URL
      }));

      setImages(res); // Set the transformed image data into state
      console.log(res);

      // Set next and previous pagination URLs
      setNextUrl(response.data.next);
      setPrevUrl(response.data.previous);

      if (res.length === 0) {
        setError("No images found.");
      }
    } catch (error) {
      setError("Failed to fetch images. Please try again.");
      console.error("Error fetching images:", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (apiUrl) {
      downloadImages(apiUrl);
    }
  }, [apiUrl]);

  return (
    <>
      <div>List of Gallery</div>
      <div className="imageList-wrapper">
        <div className="imagegarlary-wraper">
          {isLoading ? (
            "Loading..."
          ) : error ? (
            <div>{error}</div>
          ) : (
            <div className="gallery">
              {images.map((img) => (
                <Image
                  key={img.id}
                  id={img.id}
                  url={img.url} // Passing the URL as prop
                  title={img.name} // Passing the description/name as prop
                />
              ))}
            </div>
          )}
        </div>
        <div className="controller">
          <button disabled={!prevUrl} onClick={() => setApiUrl(prevUrl)}>
            Prev
          </button>
          <button disabled={!nextUrl} onClick={() => setApiUrl(nextUrl)}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default ImageList;
