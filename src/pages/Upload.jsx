import { useState } from "react";
import { Form, Input, Upload as AntUpload, Button } from "antd";
import { uploadImage } from "../services/gallery.apis";
import { useNavigate } from "react-router";

const Upload = () => {
  const [title, setTitle] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    console.log("Form Data:", values);
    const fileObj = values.imageFile?.fileList[0]?.originFileObj;
    const formData = new FormData();
    formData.append("title", values.title); 
    formData.append("image", fileObj);
    console.log("b ", values.imageFile);
    
    // call here the uploadImage dunction
    const upload = async() =>{
      const response = await uploadImage(formData, navigate);
    };
    upload();
    alert("Image uploaded successfully!");
  };

  const handleFileChange = (info) => {
    const file = info.file.originFileObj;
    if (file) {
      setImageFile(file);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center" }}>Upload Image</h2>
      <Form onFinish={
        handleSubmit}>
        <Form.Item
          label="Title"
          name="title"
          rules={[
            { required: true, message: "Please enter a title" },
          ]}
        >
          <Input
            placeholder="Enter image title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label="Image File"
          name="imageFile"
          rules={[
            { required: true, message: "Please upload an image" },
          ]}
        >
          <AntUpload
            beforeUpload={() => false}
            onChange={handleFileChange}
            maxCount={1}
          >
            <Button>Select File</Button>
          </AntUpload>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block> Submit </Button>
        </Form.Item>

      </Form>
    </div>
  );
};

export default Upload;
