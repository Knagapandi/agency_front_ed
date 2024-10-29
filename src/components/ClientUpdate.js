import React, { useState } from 'react';
import { Form, Input, Button, Card, message, Row, Col } from 'antd';
import axios from 'axios';

const UpdateClient = () => {
    const [clientId, setClientId] = useState('');
    const [clientData, setClientData] = useState({});

    const handleUpdate = async (values) => {
        try {
            const response = await axios.put(`http://localhost:8000/api/agencies/update/${clientId}`, clientData);
            message.success('Client updated successfully');
        } catch (error) {
            console.error(error);
            message.error('Error updating Client');
        }
    };

    return (
        <Row justify="center" align="middle" style={{ height: '100vh' }}>
            <Col>
                <Card title="Update Client" style={{ width: 400 }}>
                    <Form onFinish={handleUpdate} layout="vertical">
                        <Form.Item label="Client ID" required>
                            <Input onChange={e => setClientId(e.target.value)} />
                        </Form.Item>
                        <Form.Item label="Client Name">
                            <Input onChange={e => setClientData({ ...clientData, Name: e.target.value })} />
                        </Form.Item>
                        <Form.Item label="Email">
                            <Input onChange={e => setClientData({ ...clientData, Email: e.target.value })} />
                        </Form.Item>
                        <Form.Item label="Phone Number">
                            <Input onChange={e => setClientData({ ...clientData, PhoneNumber: e.target.value })} />
                        </Form.Item>
                        <Form.Item label="Total Bill">
                            <Input type="number" onChange={e => setClientData({ ...clientData, TotalBill: e.target.value })} />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>Update</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Col>
        </Row>
    );
};

export default UpdateClient;
