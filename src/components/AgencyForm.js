import React, { useState } from 'react';
import { Form, Input, Button, Card, message, Row, Col } from 'antd';
import axios from 'axios';

const CreateAgencyClient = () => {
    const [agencyData, setAgencyData] = useState({
        Name: '',
        Address1: '',
        Address2: '',
        State: '',
        City: '',
        PhoneNumber: '',
    });

    const [clientData, setClientData] = useState({
     
        Name: '',
        Email: '',
        PhoneNumber: '',
        TotalBill: '',
    });

    const handleSubmit = async (values) => {
        try {
            console.log(agencyData,clientData)
            const response = await axios.post('http://localhost:8000/api/agencies/create', {
                agency: agencyData,
                client: clientData,
            });
            message.success('Agency and Client created successfully');
        } catch (error) {
            console.error(error);
            message.error('Error creating Agency and Client');
        }
    };

    return (
        <Row justify="center" align="middle" style={{ height: '100vh' }}>
            <Col>
                <Card title="Create Agency and Client" style={{ width: 400 }}>
                    <Form onFinish={handleSubmit} layout="vertical">
                        <h2>Agency Details</h2>
                        <Form.Item label="Name" required>
                            <Input onChange={e => setAgencyData({ ...agencyData, Name: e.target.value })} />
                        </Form.Item>
                        <Form.Item label="Address 1" required>
                            <Input onChange={e => setAgencyData({ ...agencyData, Address1: e.target.value })} />
                        </Form.Item>
                        <Form.Item label="Address 2">
                            <Input onChange={e => setAgencyData({ ...agencyData, Address2: e.target.value })} />
                        </Form.Item>
                        <Form.Item label="State" required>
                            <Input onChange={e => setAgencyData({ ...agencyData, State: e.target.value })} />
                        </Form.Item>
                        <Form.Item label="City" required>
                            <Input onChange={e => setAgencyData({ ...agencyData, City: e.target.value })} />
                        </Form.Item>
                        <Form.Item label="Phone Number" required>
                            <Input onChange={e => setAgencyData({ ...agencyData, PhoneNumber: e.target.value })} />
                        </Form.Item>

                        <h2>Client Details</h2>
                       
                        <Form.Item label="Client Name" required>
                            <Input onChange={e => setClientData({ ...clientData, Name: e.target.value })} />
                        </Form.Item>
                        <Form.Item label="Email" required>
                            <Input onChange={e => setClientData({ ...clientData, Email: e.target.value })} />
                        </Form.Item>
                        <Form.Item label="Phone Number" required>
                            <Input onChange={e => setClientData({ ...clientData, PhoneNumber: e.target.value })} />
                        </Form.Item>
                        <Form.Item label="Total Bill" required>
                            <Input type="number" onChange={e => setClientData({ ...clientData, TotalBill: e.target.value })} />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>Create</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Col>
        </Row>
    );
};

export default CreateAgencyClient;
