import { useState, useEffect } from "react";
import { Row, Col, Card, Empty } from "antd";
import ImageViewer from "../components/ImageViewer";
import { fetchImages } from "../services/gallery.apis";

const Home = () => {
  useEffect(() => {
    
    return async () => {
		const data = await fetchImages();
		setGalleryData(data);
    };
  }, []);
  const [galleryData, setGalleryData] = useState([]);
  return (
    <>
      <div
        style={{
          padding: "20px",
          backgroundColor: "#f0f2f5",
          minHeight: "100vh",
        }}
      >
        <Row justify="center">
          {galleryData && galleryData.length > 0 ? (
            galleryData.map((imageData) => (
              <Col key={imageData._id} md={8} lg={6}>
                <Card
                  hoverable
                  style={{ borderRadius: "8px", overflow: "hidden" }}
                >
                  <ImageViewer
                    imgURL={imageData.imageURL}
                    id = {imageData._id}
                    title={imageData.title}
                    isPixabayimage={false}
                  />
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
    </>
  );
};

export default Home;
