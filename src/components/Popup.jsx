import { Button, Card } from "antd";

const Popup = ({ imageData }) => {
  return (
    <div style={{ padding: "20px", minHeight: "100vh" }}>
      <Card style={{ maxWidth: "400px", margin: "0 auto", textAlign: "center", borderRadius: "8px", opacity:"60%",backgroundColor: "black" }} >
        <div style={{ marginBottom: "16px",color:"white" }}>
          {/* <h3>{imageData.title}</h3> */}
          <h3>Title : </h3>
        </div>
        <div>
            <img 
            alt="image" 
            //   src={imageData.imgURL} 
            style={{ width: "50px", height: "50px", borderRadius: "8px", marginBottom: "16px" }} 
            />
        </div>
        <div>
            <Button 
            type="primary" 
            danger
            onClick={() => console.log("Delete Image clicked")}  // delete functionality
            >
            Delete Image
            </Button>
        </div>
      </Card>
    </div>
  );
};

export default Popup;
