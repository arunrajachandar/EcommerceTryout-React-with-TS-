import React from 'react';
import {Card} from 'react-bootstrap';

interface CardItem {
  title: string,
  price: number, 
  description: string,
  category: string
}


interface MyProps {
  individualItem: CardItem
}

const IndividualCard: React.FC<MyProps> = props => {
  const {title, price, description, category} = props.individualItem;
  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Title>
          {title}
        </Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="bg-transparent">
        <Card.Text>
          {category}
        </Card.Text>
      </Card.Footer>
      <Card.Footer>
       <h1><small className="text-muted">${price}</small></h1>
      </Card.Footer>
    </Card>
  );
}

export default React.memo(IndividualCard);
