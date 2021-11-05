import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./home.css";
import { Layout, Menu, Breadcrumb, Card, Row, Col, Image, Button } from "antd";
const { Header, Content, Footer } = Layout;

function Home() {
  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    axios
      .get("/api/contacts/")
      .then((res) => setContactList(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Layout className="layout">
      <Header className="header">
        <div className="logo" />
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Contact List</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
          <Link to="/add-contact">
            <Button type="primary">Add Contact</Button>
          </Link>
          <Row>
            <Col span={24}>
              {contactList.map((contact) => (
                <Card key={contact.id}>
                  <Row justify="center" align="middle">
                    <Col span={6}>
                      <Image
                        style={{ borderRadius: "50px" }}
                        width={60}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                      />
                    </Col>
                    <Col span={9}>{contact.name}</Col>
                    <Col span={9}>{contact.phone_number}</Col>
                  </Row>
                </Card>
              ))}
            </Col>
          </Row>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        PhoneBook @2021 Created by First Finger
      </Footer>
    </Layout>
  );
}

export default Home;
