import { useState } from "react";
import { Input, Button, Layout, Row, Col, Select, Typography } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import ImageViewer from "../components/ImageViewer";
import { Card } from "antd";



const { Content } = Layout;
const { Option } = Select;
const { Title } = Typography;

const SearchPage = () => {
  const [searchedImage, setSearchedImage] = useState([]);
  const [userQuery, setUserQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState(null);

  const handleChange = (e) => {
    setUserQuery(e.target.value);
  };

  const handleCategoryChange = (value) => {
    setCategoryFilter(value);
  };

  const handleSearch = () => {
    // Logic to fetch search results based on userQuery and categoryFilter
  };

  return (
    <Layout style={{ backgroundColor: "#d3d3d3", minHeight: "100vh" }}>
      <Content style={{ padding: "20px" }}>
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
          <Col md={8} >
            <div style={{ padding: "10px", backgroundColor: "#f5a9a9", borderRadius: "8px", marginRight:"16px" }}>
              <Title level={4}>Filter</Title>
              <Select
                placeholder="Select Category"
                style={{ width: "100%" }}
                onChange={handleCategoryChange}
                value={categoryFilter}
              >
                <Option value="nature">Nature</Option>
                <Option value="architecture">Architecture</Option>
                <Option value="people">People</Option>
                <Option value="technology">Technology</Option>
              </Select>
            </div>
          </Col>

          {/* Results Section */}
          <Col md={16}>
            <div style={{ padding: "20px", backgroundColor: "#ffffff", borderRadius: "8px" }}>
              <Row style={{ display: "flex", flexWrap: "wrap", gap: "40px", justifyContent: "center", padding: "10px" }}>
                {searchedImage.length > 0 ? (
                  searchedImage.map((imageData) => (
                    <Col key={imageData._id} md={8} lg={6}>
                      <ImageViewer imgURL={imageData.imgURL} />
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
      </Content>
    </Layout>
  );
};

export default SearchPage;
