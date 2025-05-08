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
      <div>
        <Button variant="primary">Primary</Button>
      </div>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">햄부기 농장</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link
                onClick={() => {
                  navigate(-1);
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("./detail");
                }}
              >
                Detail
              </Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Link to="/">홈</Link>
              <Link to="/detail">상세페이지</Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="main-bg"></div>
                <div className="container">
                  <div className="row">
                    {
                      <Row md={4}>
                        <Card shoes={shoes[0]} i={1} />
                        <Card shoes={shoes[1]} i={2} />
                        <Card shoes={shoes[2]} i={3} />
                      </Row>
                    }
                  </div>
                </div>
              </>
            }
          ></Route>
          <Route path="/detail" element={<Detail />}></Route>
          <Route path="/about" element={<About/>}>
           <Route path="/about/member" element={<About/>}/>
           <Route path="/about/location" element={<About/>}/>
          </Route>
          <Route path="*" element={<div>페이지를 찾을 수 없음</div>} />
        </Routes>
      </div>
    </>
  );
}

function About(){
  return (
    <div>
      <h4>회사정보</h4>
    </div>
  )
}

/* 박스마다 다른 상품 정보 삽입
            App 함수 안 <>에서 [] 인덱스 넣기
            주의. Card 함수 안 인덱스 빼기
            */

function Card(props) {
  return (
    <Col>
      <img
        src={"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"}
        width="80%"
        alt="My company logo"
      />
      {/*  이미지이름 숫자 변수로 이용하기 +props.i+'.jpg'*/}
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
      {/* 배열전체 값 뚫어놓고 위에서 인덱스 주기 */}
    </Col>
  );
}

export default App;
