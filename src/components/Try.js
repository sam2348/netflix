import React, { useState } from "react"; 
import ReactPlayer from "react-player";


function Try() {
  const [videoFilePath, setVideoFilePath] = useState(null);
  const handleVideoUpload = (event) => {
    setVideoFilePath(URL.createObjectURL(event.target.files[0]));
    };
  return (
   <>

<input type="file" onChange={handleVideoUpload} />
<ReactPlayer url={videoFilePath} width="100%" height="100%" controls={true} />
   </>
  );
}
export default Try;