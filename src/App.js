import "./App.css";
import { useState, useEffect } from "react";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/Detail.js";
import axios from "axios";
import Cart from "./Cart.js";

function App() {
  useEffect(() => {
    //접속시 함수 실행
    localStorage.setItem("watched", JSON.stringify([])); //[ ] : arr를 뜻함.
  }, []);
  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify([]));
  }, []);
  let [shoes, setShoes] =
    useState(data); /* 직역: data.js 파일에 있는 데이터 가져와서 shoe로 선언 */
  let navigate = useNavigate();
  /* 데이터 랜더링 성공 여부 확인법:콘솔 */
  return (
    <>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">햄부기 농장</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/detail");
                }}
              >
                Detail
              </Nav.Link>
              {/* useNavigate :해당url로 이동 */}
              <Nav.Link
                onClick={() => {
                  navigate("/cart");
                }}
              >
                Cart
              </Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="main-bg"></div>
                <Row md={4}>
                  {shoes.map((item, i) => (
                    <Card shoes={item} key={i} />
                  ))}
                </Row>
                <button
                  onClick={() => {
                    axios
                      .get("https://codingapple1.github.io/shop/data2.json")
                      .then((result) => {
                        let copy = [...shoes, ...result.data];
                        setShoes(copy);
                      });
                  }}
                >
                  더보기
                </button>
                {/* ajax 요청 */}
              </>
            }
          />
          <Route path="/detail/:id" element={<Detail shoes={shoes} />} />

          {/* detail페이지 상품명 인덱싱 */}

          <Route path="/about" element={<About />}>
            <Route path="member" element={<div>멤버임</div>} />
            <Route path="location" element={<div>위치정보임</div>} />
          </Route>
          <Route path="*" element={<div>없는페이지임</div>} />
          <Route path="/cart" element={<Cart />} />
          {/* 리덕스 장바구니 페이지 만들기
          직역 : 누가 /cart로 접속하면 <Cart> 컴포넌트 보여줘
          */}
        </Routes>
      </div>
    </>
  );
} //App 함수 끝

function Card(props) {
  return (
    <Col>
      <Link to={`/detail/${props.shoes.id}`}>
        <img
          alt=""
          src={
            "https://codingapple1.github.io/shop/shoes" +
            (props.shoes.id + 1) +
            ".jpg"
          }
          width="80%"
        />
        {/*  이미지이름 숫자 변수로 이용하기 +props.i+'.jpg'*/}
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.price}</p>
        {/* 배열 "전체" 값 뚫어놓고 위에서 인덱스 주기 */}
      </Link>
    </Col>
  );
}

function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
