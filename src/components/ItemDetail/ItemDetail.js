import React from "react";
import { Card, Image } from "semantic-ui-react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ data }) => (

  <Card className="tarjeta">
    <Image src={data.img} />
    <Card.Content>
      <Card.Header>{data.title}</Card.Header>
      <Card.Meta>
        <span className="date">{data.id}</span>
      </Card.Meta>
      <Card.Description>Cantidad de piezas: {data.pieces}</Card.Description>
      <Card.Description>Precio: {data.price}</Card.Description>
    </Card.Content>
    <ItemCount data={ data } />
  </Card>
);

export default ItemDetail;
