import { BiChevronDown } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { AiTwotoneStar, AiOutlinePercentage } from "react-icons/ai";
import { BiRupee } from "react-icons/bi";
import { MdLocalOffer } from "react-icons/md";
import { useParams } from "react-router-dom";

function Info() {
  const { id } = useParams();
  console.log(id);

  let [val, setval] = useState([]);
  let [data, setdata] = useState([]);

  let [sp, setsp] = useState(false);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then(function (response) {
        // console.log(response.data);
        setval(response.data);
        setdata(response.data.images);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const fa = (sp) => {
    setval({ ...val, thumbnail: sp });
  };

  return (
    <>
      <Row></Row>
      <Row>
        <header style={{ background: "#2874f0" }}>
          <div className="container">
            <div className="d-flex">
              <div className="logo1">
                <img width={75} src={require("./images/1.jpg")} alt="" />
              </div>
              <div className="d-flex align-items-center search">
                <input
                  type="text"
                  placeholder="Search for product, brands and more"
                  id=""
                />
                <input
                  className="w-25 ms-5 text-primary fw-bold"
                  type="button"
                  value="Login"
                  id=""
                />
              </div>
              <div className="d-flex align-items-center become">
                <a href="" className="text-white fw-bold fs-6 ms-5">
                  Become a Seller
                </a>
                <a href="" className="text-white fw-bold fs-6 ms-5">
                  More
                  <BiChevronDown />
                </a>
                <a href="" className="text-white fw-bold fs-6 ms-5">
                  <FaShoppingCart /> Cart
                </a>
              </div>
            </div>
          </div>
        </header>
        {/* <Side/> */}
      </Row>

      <Row>
        <div className="head1">
          <div className="container">
            <div className="d-flex between head p-2">
              <a href="">
                <h6>
                  Electronics
                  <BiChevronDown />
                </h6>
              </a>
              <a href="">
                <h6>
                  TVs & Appliances
                  <BiChevronDown />
                </h6>
              </a>
              <a href="">
                <h6>
                  Men
                  <BiChevronDown />
                </h6>
              </a>
              <a href="">
                <h6>
                  Women
                  <BiChevronDown />
                </h6>
              </a>
              <a href="">
                <h6>
                  Baby & Kids
                  <BiChevronDown />
                </h6>
              </a>
              <a href="">
                <h6>
                  Home & Furniture
                  <BiChevronDown />
                </h6>
              </a>
              <a href="">
                <h6>
                  Sports,Books & More
                  <BiChevronDown />
                </h6>
              </a>
              <a href="">
                <h6>Flights</h6>
              </a>
              <a href="">
                <h6>Offer Zone</h6>
              </a>
            </div>
          </div>
        </div>
      </Row>

      <Container>
        <Row className="mt-3">
          <Col md={2}>
            {data.map((item) => {
              return (
                <>
                  <img
                    src={item}
                    alt=""
                    width={150}
                    onClick={() => fa(item)}
                    className="p-2"
                  />
                </>
              );
            })}
          </Col>
          <Col md={5} className="">
            <img className="zoom-img" src={val.thumbnail} alt="" />
          </Col>
          <Col className="mt-3" md={5}>
            <h5 className="fs-3">{val.title}</h5>
            <div>
              <span className="bg-success fs-6 ps-1 pe-1 text-white rounded">
                4.4 <AiTwotoneStar className="fs-5 pb-1" />
              </span>
              <span className="ms-2">2,30,108 Ratings & 12,214 Reviews</span>
              <img
                style={{ width: "80px", marginLeft: "10px" }}
                src={require("./images/3.jpg")}
                alt=""
              />
            </div>
            <div>
              <h6 className="text-success mt-2">
                Extra <BiRupee />
                5000 off
              </h6>
            </div>
            <div className="d-flex align-items-center">
              <h2>$ {val.price}</h2>
              <h6 className="ms-2 text-secondary">
                <BiRupee />
                <del>69,900</del>
              </h6>
              <h6 className="ms-3 text-success">
                12
                <AiOutlinePercentage /> off
              </h6>
            </div>
            <h6>+₹99 Secured Packaging Fee</h6>
            <h5>Available offers</h5>
            <h6>
              <MdLocalOffer className="text-success me-3" />
              Bank Offer5% Cashback on Flipkart Axis Bank Card{" "}
              <span className="text-info">T&C</span>
            </h6>
            <h6>
              <MdLocalOffer className="text-success me-3" />
              Bank Offer₹2000 Off On HDFC Bank Credit Card TransactionsT&C
            </h6>
            <h6>
              <MdLocalOffer className="text-success me-3" />
              Bank Offer₹2000 Off On HDFC Bank Debit Card EMI TransactionsT&C
            </h6>
            <h6>
              <MdLocalOffer className="text-success me-3" />
              Special PriceGet extra ₹5000 off (price inclusive of
              cashback/coupon)T&C
            </h6>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Info;