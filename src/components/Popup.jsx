import React, { useState } from "react";
import { Button, Modal } from "antd";
import { useNavigate } from "react-router";
import { uploadImage, deleteImage } from "../services/gallery.apis";

const Popup = ({ id, imageURL, title, isPixabayimage }) => {
  const [isModalOpen, setIsModalOpen] = useState(true); // Popup opens directly when component is rendered
  const navigate = useNavigate();

  const handleCancel = () => {
    setIsModalOpen(false); // Close popup
  };

  const UploadDelete = () => {
    if (isPixabayimage) {
      const uploadData = { title, imageURL };
      uploadImage(uploadData, navigate);
    } else {
      deleteImage(id, navigate);
    }
    setIsModalOpen(false); 
  };

  return (
    <>
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        centered
        bodyStyle={{
          textAlign: "center",
          padding: "20px",
          backgroundColor: "black",
          borderRadius: "8px",
        }}
        closeIcon={
          <div
            style={{
              width: "30px",
              height: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "16px",
              color: "#000", 
              backgroundColor: "#fff", 
              border: "1px solid #ccc",
              borderRadius: "50%",
              cursor: "pointer",
            }}
          >
            ✖
          </div>
        }
        
      >
        <div style={{ color: "white", marginBottom: "16px" }}>
          <h3>Title: {title}</h3>
        </div>
        <div>
          <img
            alt="image"
            src={imageURL}
            style={{
              width: "75px",
              height: "75px",
              borderRadius: "8px",
              marginBottom: "16px",
            }}
          />
        </div>
        <div>
          <Button
            type="primary"
            danger
            onClick={UploadDelete}
            style={{ marginBottom: "16px" }}
          >
            {isPixabayimage ? "Upload" : "Delete"}
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default Popup;
