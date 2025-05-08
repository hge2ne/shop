import "./App.css";
import { useState } from "react";
import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import data from "./data.js";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";

function App() {
  let [shoes] = useState(data);
  //data.js 데이터 가져오기
  /* 데이터 랜더링 성공 여부 확인법 */
  console.log(shoes);
  return (
    <>
    <h1>hello</h1>;
      <div>
        <Button variant="primary">Primary</Button>
      </div>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail" element={<div>상세페이지임</div>}></Route>
        </Routes>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">햄부기 농장</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <div className="main-bg"></div>
      </div>
      <div className="container">
        <div className="row">
          <Row md={4}>
            <Card shoes={shoes[0]} i={1} />
            <Card shoes={shoes[1]} i={2} />
            <Card shoes={shoes[2]} i={3} />
          </Row>
        </div>
      </div>
    </>
  );
}
{
  /* 박스마다 다른 상품 정보 삽입
            App 함수 안 <>에서 [] 인덱스 넣기
            주의. Card 함수 안 인덱스 빼기
            */
}
function Card(props) {
  return (
    <Col>
      <img
        src={"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"}
        width="80%"
      />
      {/*  이미지이름 숫자 변수로 이용하기 +props.i+'.jpg'*/}
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
      {/* 배열전체 값 뚫어놓고 위에서 인덱스 주기 */}
    </Col>
  );
}

export default App;
