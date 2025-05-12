import { Table } from "react-bootstrap"; //부트스트랩에서 가져옴
import { useSelector, useDispatch } from "react-redux";
import { changeAge, addCount } from "./store.js";

function Cart(state=initialState,action) {
  switch(action.type){
    case 'addItem':{
      const found = state.find
    }
  }
  let state = useSelector((state) => state);
  console.log(state.cart[0].name); //밑에 컴포넌트랑 관련 X
  let dispatch = useDispatch();
  return (
    <>
      <h6>
        {state.user.name}
        {state.user.age}의 장바구니
      </h6>
      <button onClick={() => dispatch(changeAge())}>버튼</button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((a, i) => (
            <tr key={i}>
              <td>{state.cart[i].id}</td>
              <td>{state.cart[i].name}</td>
              <td>
                {state.cart[i].count}
                <button
                  onClick={() => {
                    dispatch(addCount(state.cart[i].id));
                    //배열오류 보완 위해 (i)가 아닌 id요소에 +1
                  }}
                >
                  +
                </button>
              </td>
              {/* 제품 수량 */}
              <td>안녕</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Cart;
