import { useState } from "react";
import { Row, Col, Card, Empty } from "antd";
import ImageViewer from "../components/ImageViewer";

const Home = () => {
  const [galleryData, setGalleryData] = useState([]);

  return (
    <div style={{ padding: "20px", backgroundColor: "#f0f2f5", minHeight:"100vh" }}>
      <Row justify="center">
        {galleryData.length > 0 ? (
          galleryData.map((imageData) => (
            <Col key={imageData._id} md={8} lg={6}>
              <Card hoverable style={{ borderRadius: "8px", overflow: "hidden" }}>
                <ImageViewer imgURL={imageData.imgURL} />
              </Card>
            </Col>
          ))
        ) : (
          <Col span={24} style={{ textAlign: "center", marginTop: "50px" }}>
            <Empty description="No Images Found" />
          </Col>
        )}
      </Row>
    </div>
  );
};

export default Home;
