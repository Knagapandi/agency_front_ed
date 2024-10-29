import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Row, Col } from 'antd';

const TopClient = () => {
    const [topClients, setTopClients] = useState([]);

    useEffect(() => {
        const fetchTopClients = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/agencies/top-client');
                setTopClients(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchTopClients();
    }, []);

    return (
        <Row justify="center" align="middle" style={{ height: '100vh' }}>
            <Col>
                <Card title="Top Client(s)" style={{ width: 400 }}>
                    <ul>
                        {topClients.map(client => (
                            <li key={client._id}>
                                Agency Name: {client.AgencyName}, Client Name: {client.ClientName}, Total Bill: {client.TotalBill}
                            </li>
                        ))}
                    </ul>
                </Card>
            </Col>
        </Row>
    );
};

export default TopClient;
