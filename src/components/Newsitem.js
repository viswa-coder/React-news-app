import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

const Newsitem = (props) => {
  const { title, description, imageUrl, newsUrl, author, date, source } = props;

  return (
    <>
      <Card className="position-relative">
        <Badge
          bg="danger"
          className="position-absolute top-0 end-0 "
        >
          {source}
        </Badge>
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <div className="text-muted">
            By {author ? author : "Unknown"} on{" "}
            {date ? new Date(date).toGMTString() : "Unknown date"}
          </div>
          <Button variant="primary" size="sm" href={newsUrl} target="_blank">
            Read More
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Newsitem;
