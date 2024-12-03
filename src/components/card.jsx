import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CustomCard({ cardImage, cardText,cardText2, cardTitle, buttonText }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={cardImage} />
      <Card.Body>
        <Card.Title>{cardTitle}</Card.Title>
        <Card.Text>{cardText}</Card.Text>
        <Card.Text>{cardText2}</Card.Text>
        <Button variant="primary">{buttonText}</Button>
      </Card.Body>
    </Card>
  );
}
export default CustomCard;
