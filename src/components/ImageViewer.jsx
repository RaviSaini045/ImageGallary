import { useState } from "react";
import { Card } from "antd";
import Popup from "./Popup";

const ImageViewer = ({ id, imgURL, title, isPixabayimage }) => {
  const [imagePopup, setImagePopup] = useState(false);

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "40px",
          justifyContent: "center",
          padding: "10px",
        }}
        onClick={() => setImagePopup(true)}
      >
        <Card
          hoverable
          style={{ width: 300, marginLeft: "16px", marginRight: "16px" }}
          cover={<img alt="Image Viewer" src={imgURL} />}
        >
          {" "}
        </Card>
      </div>
      {imagePopup && (
        <Popup
           id = {id}
          imageURL={imgURL}
          title={title}
          isPixabayimage={isPixabayimage}
          onClose={() => setImagePopup(false)}
        />
      )}
    </>
  );
};

export default ImageViewer;
