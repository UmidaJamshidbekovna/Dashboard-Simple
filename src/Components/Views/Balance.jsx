// Balance.jsx
import React from "react";
import { Card, Row, Col, Button, ProgressBar } from "react-bootstrap";

const Balance = () => {
  const balance = 12000; // Баланс в суммах
  const tariff = {
    name: "Премиум",
    price: "99 000 сум / мес",
    used: 70, // % использованных возможностей тарифа
  };

  return (
    <div className="mt-4">
      <h4 className="mb-4">Баланс / Мой тариф</h4>

      <Row>
        {/* Баланс */}
        <Col md={6} className="mb-3">
          <Card className="shadow-sm h-100">
            <Card.Body>
              <Card.Title>Баланс</Card.Title>
              <h3 className="fw-bold text-success">{balance.toLocaleString()} сум</h3>
              <Button variant="primary" className="mt-3">
                Пополнить баланс
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Тариф */}
        <Col md={6} className="mb-3">
          <Card className="shadow-sm h-100">
            <Card.Body>
              <Card.Title>Мой тариф</Card.Title>
              <h5 className="fw-bold">{tariff.name}</h5>
              <p className="text-muted">{tariff.price}</p>
              <ProgressBar
                now={tariff.used}
                label={`${tariff.used}%`}
                variant={tariff.used > 80 ? "danger" : "success"}
                className="mb-3"
              />
              <Button variant="outline-primary">Сменить тариф</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Balance;
