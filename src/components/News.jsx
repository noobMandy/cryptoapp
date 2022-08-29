import React, { useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../services/cryptoApi";
const { Text, Title } = Typography;
const { Option } = Select;
const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");

  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 6 : 12,
  });
  const { data } = useGetCryptosQuery(100);
  const image =
    "https://i.pinimg.com/736x/27/21/be/2721beaa8b8fc7464ce9b5f11d1cc9d4.jpg";
  console.log(cryptoNews);

  if (!cryptoNews) return "Loading...";
  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="Cryptocurrency">Cryptocurrency</Option>
            {data?.data?.coins.map((currency) => (
              <Option value={currency.name}>{currency.name}</Option>
            ))}
          </Select>
        </Col>
      )}
      {cryptoNews.map((news, index) => (
        <Col xs={24} sm={12} lg={8} key={index}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.title}
                </Title>
                <img
                  style={{ maxWidth: "200px", maxHeight: "100px" }}
                  src={image}
                  alt="crypto"
                />
              </div>
            </a>
          </Card>
        </Col>
        //console.log("NEWSSSSSSSSSSSS",news)
      ))}
    </Row>
  );
};

export default News;
