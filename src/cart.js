import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux'


function Cart() {

    const cartinfo = useSelector((state) => state.counter.cartdata)
    const dispatch = useDispatch()
    var total = 0;

    return (
        <>
            <Row>

                <div>
                    {
                        cartinfo.map((item) => {
                            <span>total += {item.price}</span>
                        })
                    }
                    <h1>{total}</h1>
                </div>

                <div>
                    {
                        cartinfo.map((item) => {
                            return (
                                <>
                                    <div>
                                        <div className='d-flex'>

                                            <div>
                                                <Link to={`/Info/${item.id}`}><img width={400} height={250} src={item.thumbnail} alt="" />
                                                </Link>
                                            </div>

                                            <div>
                                                <div className='fs-3 fw-bold ms-5'>{item.title}</div>

                                                <div className='fs-1 fw-bold ms-5'>$ {item.price} Rs.</div>

                                                <div className='ms-5 fs-3'><del className='fw-light'>1300</del> <span className='fs-5'>25% off</span>
                                                    <img style={{ width: '80px', marginLeft: '10px' }} src={require('./images/3.jpg')} alt="" /></div>

                                                <div className='fs-3 fw-bold ms-5'><span className='fs-6'>Only few items in stock :</span> {item.stock}</div>

                                                <div className='fs-1 fw-bold ms-5'><img style={{ width: '150px' }} src={require('./images/2.jpg')} alt="" />
                                                    <span className='bg-success fs-4 ps-2 pe-2 text-white rounded'>4.4</span></div>

                                            </div>
                                        </div>
                                    </div>

                                    <hr />
                                </>
                            )
                        })
                    }
                </div>
            </Row>
        </>
    )
}

export default Cart;