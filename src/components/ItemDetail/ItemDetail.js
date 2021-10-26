import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({data}) => (
  <Card class="tarjeta">
    <Image src={data.set_img_url} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{data.name}</Card.Header>
      <Card.Meta>
        <span className='date'>{data.set_num}</span>
      </Card.Meta>
      <Card.Description>
        {data.set_url}
      </Card.Description>
    </Card.Content>
    <ItemCount/>

  </Card>


)

export default ItemDetail;