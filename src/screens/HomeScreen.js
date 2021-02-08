import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { productAction } from '../actions/productAction';
import Loader from '../components/Loader';
import Message from '../components/Message';
//custom components
import Product from '../components/Product';
const HomeScreen = () => {
    const dispatch = useDispatch()
    const productsList = useSelector(state => state.productsList)
    const { loading, error, products } = productsList

    // const [products, setProducts] = useState([])
    useEffect(() => {
        // const fetchProducts = async () => {
        //     const { data } = await axios.get(`${api}/products`)
        //     setProducts(data.products)
        // }
        // fetchProducts()
        dispatch(productAction())
    }, [dispatch])
    return (
        <>
            <h1> Latest Products </h1> 
            { loading ? ( <Loader /> ) : error ? ( <Message> {error} </Message> ) : (
                <Row>
                    {products.map((product) => (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product} />
                        </Col>
                    ))}
                </Row>
            ) }  
            
        </>
    );
};

export default HomeScreen;