import "./App.css";
import { useState } from "react";
import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/Detail.js";

function App() {
  let [shoes] = useState(data);
  let navigate = useNavigate();
  //data.js 데이터 가져오기
  /* 데이터 랜더링 성공 여부 확인법 */
  console.log(shoes);
  return (
    <>
      <h1>hello</h1>;
      <div>
        <Button variant="primary">Primary</Button>
        <Link></Link>
      </div>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
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
                <div className="main-bg"></div>
              </>
            }
          />
          <Route path="/detail" element={<Detail />} />
          <Route path="*" element={<div>없는페이지임</div>} />
        </Routes>
      </div>
      <Card shoes={shoes[0]} i={1} />
      <Card shoes={shoes[0]} i={2} />
      <Card shoes={shoes[0]} i={3} />
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

export default App;
