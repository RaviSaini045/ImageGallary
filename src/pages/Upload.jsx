import { useState } from "react";


const Upload = () => {
    
    const [title, setTtitle] = useState("")
    const [imageFile, setImageFile] = useState(null)

    const handleSubmit = (e) => {
        // image upload 
    }
    
    const handleChange = (e) => {
        setTtitle(e.target.value);
    }
    
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
        }
    };    
    return (
        <>
          <div>
             <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input type="text" required onChange={handleChange} />
                </div>
                <div>
                    <label>Image File</label>
                    <input type="image" capture="environment" required onChange={handleFileChange} />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
             </form>
          </div>
        </>
    )
}

export default Upload;