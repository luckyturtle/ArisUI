import React from 'react';
import { Row, Col, Layout, Typography} from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import './style.css';
const { Footer } = Layout;
const { Title } = Typography;

const CustomFooter = () => {
    return (
        <Footer style={{background: "var(--colors-footerbackground)", height:"11vh"}}>
            <Row>
                <Col  lg={{ span: 0.5, offset: 0 }}>
                    <InfoCircleOutlined />
                </Col>
                <Col  lg={{ span: 23, offset: 0 }}>
                    <Title level={5} className="footer-content">
                        Aris Finance is a leveraged yield farming product, and using leveraged products involves certain risks. Please read here to understand these risks. As a user of our protocol, you are in agreement that you are aware of these risks, and that all liability resides with you. So please don’t invest your life savings, or risk assets you can’t afford to lose. Try to be as careful with your funds as we are with our code.
                    </Title>
                </Col>
            </Row>
        </Footer>
    )
  }
export default CustomFooter
  