import Badge from "react-bootstrap/Badge";

const Footer = ({ galleryInfo }) => {
  return (
    <div className="galleryFooter">
      <p>
        {galleryInfo} <Badge bg="danger">🤘 </Badge>{" "}
      </p>
    </div>
  );
};

export default Footer;
