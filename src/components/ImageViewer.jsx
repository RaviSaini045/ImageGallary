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
          padding: "4px",
          border: "2px solid #ccc"
        }}
        onClick={() => setImagePopup(true)}
      >
        <Card
          hoverable
          style={{
            width: 300,
            margin:"6px",
            textAlign: "center",
          }}
          cover={
            <img
              alt="Image Viewer"
              src={imgURL}
              style={{
                width: "100%",
                maxHeight:"150px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          }
        />
      </div>
      {imagePopup && (
        <Popup
          id={id}
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
