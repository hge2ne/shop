import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

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
        <div className="alert alert-warning">2초 이내 구매시 할인</div>
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
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾은상품.title}</h4>
          {/* 상품명 인덱싱 */}
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
