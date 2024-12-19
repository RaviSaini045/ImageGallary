import { Card } from "antd";


const ImageViewer = ({ imgURL }) => {
  return (
    <div style={{ display: "flex", gap: "40px", justifyContent: "center", padding: "10px" }}>
      <Card hoverable style={{ width: 300, marginLeft:"16px", marginRight:"16px" }} cover={<img alt="Image Viewer"  src={imgURL} />} > </Card>
    </div>
  );
};

export default ImageViewer;
