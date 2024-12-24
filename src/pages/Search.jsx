import { useState } from "react";
import {
  Input,
  Button,
  Layout,
  Row,
  Col,
  Select,
  Typography,
  Card,
} from "antd";
import { SearchOutlined } from "@ant-design/icons";
import ImageViewer from "../components/ImageViewer";
import { searchImages } from "../services/gallery.apis";

const SearchPage = () => {
  const [searchedImages, setSearchedImages] = useState([]);
  const [userQuery, setUserQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const handleChange = (e) => {
    setUserQuery(e.target.value);
  };

  const handleCategoryChange = (value) => {
    setCategoryFilter(value);
  };

  const handleSearch = () => {
    // Logic to fetch search results based on userQuery and categoryFilter
    const getData = async () => {
      const data = await searchImages(userQuery,{"image_type": categoryFilter});
      setSearchedImages(data);
    };
    getData();

  };
  console.log("searchd images ", searchedImages);
  return (
    <Layout style={{ backgroundColor: "#d3d3d3", minHeight: "100vh" }}>
      <Layout.Content style={{ padding: "20px" }}>
        <Row justify="center" style={{ marginBottom: "20px" }}>
          <Col xs={24} sm={18} md={12}>
            <div
              style={{
                display: "flex",
                backgroundColor: "#f5a9a9",
                borderRadius: "5px",
                overflow: "hidden",
              }}
            >
              <Input
                placeholder="Search here..."
                value={userQuery}
                onChange={handleChange}
                style={{ border: "none", padding: "10px" }}
              />
              <Button
                type="primary"
                icon={<SearchOutlined />}
                onClick={handleSearch}
                style={{
                  backgroundColor: "#f5a9a9",
                  border: "none",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                Search
              </Button>
            </div>
          </Col>
        </Row>

        <Row>
          {/* Filter Section */}
          <Col md={8}>
            <div
              style={{
                padding: "10px",
                backgroundColor: "#f5a9a9",
                borderRadius: "8px",
                marginRight: "16px",
              }}
            >
              <Typography.Title level={4}>Filter</Typography.Title>
              <Select
                placeholder="Select Category"
                style={{ width: "100%" }}
                onChange={handleCategoryChange}
                value={categoryFilter}
              >
                <Select.Option value="all">All</Select.Option>
                <Select.Option value="photo">Photo</Select.Option>
                <Select.Option value="illustration">Illustration</Select.Option>
                <Select.Option value="vector">Vector</Select.Option>
              </Select>
            </div>
          </Col>

          {/* Results Section */}
          <Col md={16}>
            <div
              style={{
                padding: "20px",
                backgroundColor: "#ffffff",
                borderRadius: "8px",
              }}
            >
              <Row
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "40px",
                  justifyContent: "center",
                  padding: "10px",
                }}
              >
                {searchedImages && searchedImages.length > 0 ? (
                  searchedImages.map((imageData) => (
                    <Col key={imageData._id || imageData.id} md={8} lg={6}>
                      <ImageViewer
                        imgURL={imageData.previewURL}
                        title={userQuery}
                        isPixabayimage={true}
                      />
                    </Col>
                  ))
                ) : (
                  <div style={{ textAlign: "center", color: "#800000" }}>
                    No images to display
                  </div>
                )}
              </Row>
            </div>
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  );
};

export default SearchPage;
