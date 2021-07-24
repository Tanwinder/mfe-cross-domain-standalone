const ItemDetails = ({items}) => {
    return items && items.map( (item, i) => (
            <Row key={item._id} style={{background: i % 2 == 0 ? 'lightGray' : 'white', padding: '5px 2px'}} xs="12">
                <Col>{item.customer.email}</Col>
                <Col>{item.customer.age}</Col>
                <Col>{item.storeLocation}</Col>
            </Row>
        )
    )
}

export default ItemDetails;