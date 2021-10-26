

import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const ItemCart = ({ data }) => {
	return (
		<div style={{ maxWidth: 400, margin: 20 }}>
			<Card>
				<CardBody>
					<CardTitle tag='h5'>Producto</CardTitle>
					<CardSubtitle tag='h6' className='mb-2 text-muted'>
						{data.name}
					</CardSubtitle>
					<CardText>${data.price}</CardText>
				</CardBody>
			</Card>
		</div>
	);
};

export default ItemCart;