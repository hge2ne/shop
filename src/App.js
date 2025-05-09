import "./App.css";
import { useState } from "react";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/Detail.js";

function App() {
  let [shoes] =
    useState(data); /* 직역: data.js 파일에 있는 데이터 가져와서 shoe로 선언 */
  let navigate = useNavigate();
  /* 데이터 랜더링 성공 여부 확인법:콘솔 */
  return (
    <>
      <div>
        <Link></Link>
      </div>
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
              <Nav.Link href="#features">Features</Nav.Link>
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
                  <Card shoes={shoes[0]} i={1} />
                  {/* 상품정보: 0부터시작 */}
                  <Card shoes={shoes[1]} i={2} />
                  <Card shoes={shoes[2]} i={3} />
                </Row>
              </>
            }
          />
          <Route path="/detail/0" element={<Detail shoes={shoes} />} />
          <Route path="/detail/1" element={<Detail shoes={shoes} />} />
          <Route path="/detail/2" element={<Detail shoes={shoes} />} />

          {/* detail페이지 상품명 인덱싱 */}

          <Route path="/about" element={<About />}>
            <Route path="member" element={<div>멤버임</div>} />
            <Route path="location" element={<div>위치정보임</div>} />
          </Route>
          <Route path="*" element={<div>없는페이지임</div>} />
        </Routes>
      </div>
    </>
  );
} //App 함수 끝

function Card(props) {
  return (
    <Col>
      <img
        alt=""
        src={"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"}
        width="80%"
      />
      {/*  이미지이름 숫자 변수로 이용하기 +props.i+'.jpg'*/}
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
      {/* 배열 "전체" 값 뚫어놓고 위에서 인덱스 주기 */}
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
