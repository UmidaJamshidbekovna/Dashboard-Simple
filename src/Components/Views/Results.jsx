// Results.jsx
import React from "react";
import { Card, Row, Col, Badge } from "react-bootstrap";

const Results = () => {
  const tests = [
    { name: "Тест 1", date: "17.04.2024", score: 4.0 },
    { name: "Тест 2", date: "17.04.2024", score: 4.6 },
    { name: "Тест 3", date: "17.04.2024", score: 3.8 },
    { name: "Тест 4", date: "17.04.2024", score: 4.2 },
  ];

  return (
    <div className="mt-4">
      <h4 className="mb-4">Результаты тестов</h4>
      <Row xs={1} md={2} className="g-3">
        {tests.map((test, index) => (
          <Col key={index}>
            <Card className="shadow-sm h-100">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <Card.Title className="mb-0">{test.name}</Card.Title>
                  <Badge bg={test.score >= 4 ? "success" : "danger"} className="fs-6">
                    {test.score}
                  </Badge>
                </div>
                <Card.Text className="text-muted">
                  Дата прохождения: {test.date}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Results;
