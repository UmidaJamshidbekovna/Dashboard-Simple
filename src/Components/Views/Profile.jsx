import React from "react";
import { Card, Table, Row, Col, Badge } from "react-bootstrap";

const UserProfile = () => {
  const tests = [
    { name: "Тест 1", date: "17.04.2024", score: 4.0 },
    { name: "Тест 2", date: "17.04.2024", score: 4.6 },
    { name: "Тест 3", date: "17.04.2024", score: 3.8 },
    { name: "Тест 4", date: "17.04.2024", score: 4.2 },
  ];

  
  const avgScore =
    tests.reduce((acc, t) => acc + t.score, 0) / tests.length;

  return (
    <div className="container mt-4">
    
      <h2 className="mb-3">Имя пользователя</h2>
      <h4 className="mb-3">Прогресс</h4>
      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <Row>
            <Col>
              <p>Пройденные тесты</p>
              <h4 className="fw-bold">{tests.length}</h4>
            </Col>
            <Col>
              <p>Средний балл</p>
              <h4 className="fw-bold">{avgScore.toFixed(1)}</h4>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      
      <h4 className="mb-3">Последние результаты тестов</h4>
      <Table hover responsive>
        <thead>
          <tr>
            <th>Название</th>
            <th>Дата</th>
            <th>Бал</th>
          </tr>
        </thead>
        <tbody>
          {tests.map((test, index) => (
            <tr key={index}>
              <td>{test.name}</td>
              <td>{test.date}</td>
              <td>
                <Badge
                  bg={test.score >= 4 ? "success" : "danger"}
                  className="fs-6"
                >
                  {test.score}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UserProfile;
