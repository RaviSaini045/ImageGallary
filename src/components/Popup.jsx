import { Button, Card } from "antd";
import { useNavigate } from "react-router";
import { uploadImage, deleteImage } from "../services/gallery.apis";
const Popup = ({id,imageURL , title, isPixabayimage}) => {

  const navigate = useNavigate();
  
  const UploadDelete = () => {
    if (isPixabayimage) {
      const uploadData = {title, imageURL};
      uploadImage(uploadData,navigate);
    } else {
      deleteImage(id,navigate);
    }
  };
  return (
    <div style={{ padding: "20px", minHeight: "100vh" }}>
      <Card style={{ maxWidth: "400px", margin: "0 auto", textAlign: "center", borderRadius: "8px", opacity:"60%",backgroundColor: "black" }} >
        <div style={{ marginBottom: "16px",color:"white" }}>
          {/* <h3>{imageData.title}</h3> */}
          <h3>Title :  {title}</h3>
        </div>
        <div>
            <img 
            alt="image" 
              src={imageURL} 
            style={{ width: "50px", height: "50px", borderRadius: "8px", marginBottom: "16px" }} 
            />
        </div>
        <div>
            <Button 
            type="primary" 
            danger
            onClick={UploadDelete}  // delete functionality
            >
            {isPixabayimage ? "Upload" : "Delete"}
            </Button>
        </div>
      </Card>
    </div>
  );
};

export default Popup;
