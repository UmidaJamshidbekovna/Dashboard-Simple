
import React from "react";
import { Card, Row, Col, Badge, ProgressBar } from "react-bootstrap";

const Achievements = () => {
  const achievements = [
    { title: "Первый тест", description: "Вы успешно прошли свой первый тест", progress: 100 },
    { title: "Серия побед", description: "Пройдите 5 тестов подряд с баллом ≥ 4.0", progress: 80 },
    { title: "Упорство", description: "Пройдите 10 тестов без пропуска", progress: 50 },
    { title: "Эксперт", description: "Получите средний балл ≥ 4.5", progress: 30 },
  ];

  return (
    <div className="mt-4">
      <h4 className="mb-4">🏆 Достижения</h4>
      <Row xs={1} md={2} className="g-3">
        {achievements.map((ach, index) => (
          <Col key={index}>
            <Card className="shadow-sm h-100">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <Card.Title className="mb-0">{ach.title}</Card.Title>
                  <Badge bg={ach.progress === 100 ? "success" : "secondary"}>
                    {ach.progress === 100 ? "✔ Выполнено" : "В процессе"}
                  </Badge>
                </div>
                <Card.Text className="text-muted">{ach.description}</Card.Text>
                <ProgressBar
                  now={ach.progress}
                  label={`${ach.progress}%`}
                  variant={ach.progress === 100 ? "success" : "info"}
                />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Achievements;
