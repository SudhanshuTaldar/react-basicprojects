import React from 'react'
import Card from 'react-bootstrap/Card'


export default function Footer(props) {
  return (
    <Card className="text-center"style={{backgroundColor:'lightblue'}}>
      <Card.Header>Featured</Card.Header>
      <Card.Body style={{backgroundColor:'lightblue'}}>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
      <Card.Footer className="text-muted">{props.time}</Card.Footer>
    </Card>
  )
}
