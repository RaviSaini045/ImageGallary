import { useState } from "react";
import ImageViewer from "../components/ImageViewer";


const Home = () => {

    const [galleryData, setGalleryData] = useState([]);

    return (
        <>
        <div>
            {
                galleryData.length !== 0 && galleryData.map((imgageData) => {
                    <div key={ImageData._id} >
                        <ImageViewer imgURL={imgageData.imgURL} />
                    </div>
                })
            }
        </div>
        </>
    );
}

export default Home;