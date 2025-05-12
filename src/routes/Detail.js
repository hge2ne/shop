import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Nav } from "react-bootstrap";
import '../App.css';
import { addItem } from "../store";
import { useDispatch } from "react-redux";

let YellowBtn = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg === "green" ? "white" : "black")};
  padding: 10px;
`;

function Detail(props) {
  let { id } = useParams();
  let 찾은상품 = props.shoes.find((x) => {
    //냅다 props요소 전체 선언
    return x.id === Number(id); //위에 선언한 id랑 배열의 x 요소의 id 값과 같은 id 를 출력
  });

  //let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);
  let [탭, 탭변경] = useState(0);
  let [fade2,setFade2] = useState('')
  let dispatch=useDispatch();

  useEffect(()=>{
    let 꺼낸자료 =
    localStorage.getItem('watched')//로컬스토리지에서 arr 꺼냄
    꺼낸자료 = JSON.parse(꺼낸자료)//꺼낸 자료를 다시 원본에 넣음
    꺼낸자료.push(찾은상품.id)//처음 추가 상품은 arr에 추가
    꺼낸자료=new Set(꺼낸자료)
    꺼낸자료 = Array.from(꺼낸자료)
    localStorage.setItem('watched',JSON.stringify(꺼낸자료))//자료 저장
  },[])


  useEffect(()=>{
   setTimeout(()=>{setFade2('end')}) 
    return(()=>{
      setFade2('')
    })
  },[])

  useEffect(() => {
    let a = setTimeout(() => {
      setAlert(false);
    }, 2000);
    console.log(2);
    return () => {
      console.log(1);
      clearTimeout(a);
    };
  }, []);
  /* []: useEffect 실행조건 자리. 디펜던시. 변수 변동시, 함수 작동 */
  if (!찾은상품) {
    return <div>상품을 찾을 수 없습니다.</div>;
  }
 
  return (
    <div className="container">
      {alert == true ? (
        <div className={"alert alert-warning start " + fade2}>2초 이내 구매시 할인</div>
      ) : null}
      <YellowBtn>버튼</YellowBtn>
      <YellowBtn bg="green">버튼</YellowBtn>
      <div className="row">
        <div className="col-md-6">
          <img
            src={
              "https://codingapple1.github.io/shop/shoes" +
              (찾은상품.id + 1) +
              ".jpg"
            }
            width="100%"
          />
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{찾은상품.title}</h4>
            {/* 상품명 인덱싱 */}
            <p>{찾은상품.content}</p>
            <p>{찾은상품.price}원</p>
            <button className="btn btn-danger" onClick={()=>{
              dispatch(addItem({id:찾은상품.id,name:찾은상품.title,count:1}))//상품 처음 추가 : 수량 1고정/그 뒤는 작동 잘함.
            }}>주문하기</button>
          </div>
        </div>
        <Nav variant="tabs" defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                탭변경(0);
              }}
              eventKey="link0"
            >
              버튼0
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                탭변경(1);
              }}
              eventKey="link1"
            >
              버튼1
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                탭변경(2);
              }}
              eventKey="link2"
            >
              버튼2
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <TabContent 탭={탭} />
      </div>
    </div>
  );
}
function TabContent({ 탭 }) {
  let [fade, setFade] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      setFade('');
    };
  }, [탭]);
  return (
    <div className={'start ' + fade}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭]}
    </div>
  );
}
export default Detail;

