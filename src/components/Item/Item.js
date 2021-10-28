import React from "react";
import { Card, Image } from "semantic-ui-react";
import PropTypes from "prop-types";
import "./Item.css";

const Item = ({ data }) => (
  <Card class="tarjeta">
    <Image src={data.set_img_url} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{data.name}</Card.Header>
      <Card.Meta>
        <span className="date">{data.set_num}</span>
      </Card.Meta>
      <Card.Description>{data.set_url}</Card.Description>
    </Card.Content>
  </Card>
);

Item.propTypes = {
  set_img_url: PropTypes.string,
  name: PropTypes.string.isRequired,
  set_num: PropTypes.number,
  set_url: PropTypes.string,
};

export default Item;
