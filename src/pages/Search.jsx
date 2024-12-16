import { useState } from "react";
import ImageViewer from "../components/ImageViewer";


const Search = () => {
    const [searchedImage, setSearchedImage] = useState([]);
    const [userQuery, setUserQuery] = useState("");
    
    const handleChange = (e) => {
        setUserQuery(e.target.value);
    }

    const handleClick = (e) => {
        // fetch images with the help of Pixabay API
    }

    return (
        <>
           <div>
               <div>
                   <div>
                    <div>
                        <input text="text" onChange={handleChange} />
                    </div>
                    <div onClick={handleClick} >search icon</div>
                   </div>
               </div>
               <div>
                   <div>filter</div>   {/* additional feature can be added to filter images based on user prefrence */}
                   <div>
                     {
                        searchedImage.length !== 0 && searchedImage.map((imageData) => { 
                            <div key = {imageData._id }>
                                <ImageViewer imgURL={imageData.imgURL} />   {/* variable according to reponse of API */}
                            </div>
                        })
                     }
                   </div>
               </div>
           </div>
        </>
    );
}

export default Search;