import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const albumCard = ({ imgUrl, imgTitle, imgDesc, spotiLink }) => {
  return (
    <Card className="albumCard">
      <Card.Img className="albumCardImg" variant="top" src={imgUrl} />
      <Card.Body>
        <Card.Title>{imgTitle}</Card.Title>
        <Card.Text>{imgDesc}</Card.Text>
        <Button href={spotiLink} variant="success">
          Escúchalo en Spotify
        </Button>
      </Card.Body>
    </Card>
  );
};

export default albumCard;
