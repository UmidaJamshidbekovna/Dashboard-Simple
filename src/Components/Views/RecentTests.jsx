// recentTest.jsx
import React from "react";
import { Card, Table, Badge } from "react-bootstrap";

const RecentTests = () => {
  const tests = [
    { name: "Тест 1", date: "17.04.2024", score: 4.0 },
    { name: "Тест 2", date: "17.04.2024", score: 4.6 },
    { name: "Тест 3", date: "17.04.2024", score: 3.8 },
    { name: "Тест 4", date: "17.04.2024", score: 4.2 },
  ];

  return (
    <Card className="shadow-sm mt-4">
      <Card.Body>
        <Card.Title className="mb-3">Последние результаты тестов</Card.Title>
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
      </Card.Body>
    </Card>
  );
};

export default RecentTests;
