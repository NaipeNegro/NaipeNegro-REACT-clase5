import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import ItemCount from '../ItemCount/ItemCount';

const Item = ({data}) => (
  <Card class="tarjeta">
    <Image src={data.avatar_url} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{data.login}</Card.Header>
      <Card.Meta>
        <span className='date'>{data.id}</span>
      </Card.Meta>
      <Card.Description>
        {data.url}
      </Card.Description>
    </Card.Content>
    <ItemCount/>

  </Card>


)

export default Item;