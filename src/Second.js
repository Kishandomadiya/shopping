import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiChevronDown } from "react-icons/bi";
import { FaHtml5, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsFillLightningFill } from "react-icons/bs";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux'
import { addTocart } from './app/counter/counterSlice';


function Second() {

    let [val, setval] = useState([])
    let [search, setsearch] = useState()
    let [cat, setcat] = useState([])
    let [cart, setcart] = useState([])
    const cartdata1 = useSelector((state) => state.counter.cartdata)

    const dispatch = useDispatch()


    useEffect(() => {

        axios.get('https://dummyjson.com/products')
            .then(function (response) {
                setval(response.data.products)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    const sb = (e) => {
        setsearch(e.target.value);

        axios.get(`https://dummyjson.com/products/search?q=${search}`)
            .then(function (response) {
                console.log(response)
                setval(response.data.products)
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    useEffect(() => {

        axios.get('https://dummyjson.com/products/categories')
            .then(function (response) {
                console.log(response)
                setcat(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    const cate = (item) => {

        axios.get(`https://dummyjson.com/products/category/${item}`)
            .then(function (response) {
                console.log(response.data.products);
                setval(response.data.products);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    return (
        <>
            <Row>
                <header style={{ background: '#2874f0' }}>
                    <div className="container">
                        <div className='d-flex'>
                            <div className='logo1'>
                                <img width={75} src={require('./images/1.jpg')} alt="" />
                            </div>
                            <div className='d-flex align-items-center search'>
                                <input type="text" placeholder="Search for product, brands and more" id="" onChange={sb} />
                                <input className='w-25 ms-5 text-primary fw-bold' type="button" value='Login' id="" />
                            </div>
                            <div className='d-flex align-items-center become'>
                                <a href="" className='text-white fw-bold fs-6 ms-5'>Become a Seller</a>
                                <a href="" className='text-white fw-bold fs-6 ms-5'>More<BiChevronDown /></a>
                             
                                  <Link to={`/cart`} className='text-white fw-bold fs-6 ms-5'><FaShoppingCart /> Cart</Link>
                            </div>
                        </div>
                    </div>
                </header>
            </Row>


            <div className='d-flex'>

                <div className="mt-5 side w-25">
                    <div>
                        <h3 className="pb-2 p-3">Filters</h3><hr />
                        <h6 className="ms-3 p-2">CATEGORIES</h6>
                        <h6 className="text-secondary ms-5">Mobiles & Accessories</h6>
                        <h6 className="ms-5">Mobiles</h6><hr />
                    </div>
                    <div>
                        <h6 className="p-2 ms-3">BRAND</h6>

                        <div className='ps-5 cat'>
                            {
                                cat.map((item) => {
                                    return (
                                        <p className='m-2 cate' onClick={() => cate(item)}>{item}</p>
                                    )   
                                })
                            }
                        </div>

                    </div>

                    <div>
                        <h6 className="p-2 ms-3">BRAND</h6>
                        
                        <div><input className="ms-4" type="checkbox" /> 4 GB</div>
                        <div><input className="ms-4 mt-3" type="checkbox" /> 3 GB</div>
                        <div> <input className="ms-4 mt-3" type="checkbox" /> 2 GBe</div>
                        <div><input className="ms-4 mt-3" type="checkbox" /> 8 GB and Above</div>
                        <div><input className="ms-4 mt-3" type="checkbox" /> 6 GB</div><hr />
                    </div>

                    <div>
                        <h6 className="ms-4">INTERNAL STORAGE<BiChevronDown className="" /></h6><hr />
                        <h6 className="ms-4">BATTERY CAPACITY<BiChevronDown className="" /></h6><hr />
                        <h6 className="ms-4">SCREEN SIZE<BiChevronDown className="" /></h6><hr />
                        <h6 className="ms-4">PRIMARY CAMERA<BiChevronDown className="" /></h6><hr />
                        <h6 className="ms-4">SECONDARY CAMERA<BiChevronDown className="" /></h6><hr />
                        <h6 className="ms-4">PROCESSOR BRAND<BiChevronDown className="" /></h6><hr />
                        <h6 className="ms-4">SPECIALITY<BiChevronDown className="" /></h6><hr />
                        <h6 className="ms-4">RESOLUTION TYPE<BiChevronDown className="" /></h6><hr />
                        <h6 className="ms-4">OPERATING SYSTEM<BiChevronDown className="" /></h6><hr />
                        <h6 className="ms-4">NETWORK TYPE<BiChevronDown className="" /></h6><hr />
                        <h6 className="ms-4">SIM TYPE<BiChevronDown className="" /></h6><hr />
                    </div>


                </div>

                <div className='p-5 m-auto images w-75'>

                    {
                        val.map((item) => {
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
                                    <div className='d-flex ms-3'>
                                    <button className='d-flex add' onClick={() => dispatch(addTocart(item))}><FaShoppingCart className='fs-4 me-2' />ADD TO CART</button>
                                        <button className='d-flex add1 ms-2'><BsFillLightningFill className='fs-4 me-2' />BUY NOW</button>
                                    </div>
                                    <hr />
                                </>
                            )
                        })
                    }

                </div>
            </div>

        </>
    )

}

export default Second;