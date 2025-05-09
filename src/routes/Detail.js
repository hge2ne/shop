import { useParams } from "react-router-dom";

function Detail(props) {
  let { id } = useParams();
  let 찾은상품 = props.shoes.find((x) => {
    //냅다 props요소 전체 선언
    return x.id === id; //위에 선언한 id랑 배열의 x 요소의 id 값과 같은 id 를 출력
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
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
