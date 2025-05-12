import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: { name: "kim", age: 20 },
  reducers: {
    changeName(state) {
      state.name = "park"; //state 직접 수정 함수
    },
    changeAge(state) {
      state.age = state.age + 1; //state.age는 숫자임. 연산가능
    },
  },
});

let stock = createSlice({
  name: "stock",
  initialState: [10, 11, 12],
});
let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    addCount(state, action) {
      let 번호 = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[번호].count++;
    },
    addItem(state, action) {//중복상품 체크 (조건문)
      let found = state.findIndex((a)=>a.id===action.payload.id);
      if(found >=0){
        state[found].count++;
        //이미 있으면 count만 증가
      } else {
        //없으면 상품 추가
        state.push(action.payload);
      }
    },
  },
});

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    cart: cart.reducer,
  },
}); //복붙하기. state 보관하는 파일임.
export let { changeName } = user.actions; //state 수정 함수
export let { changeAge } = user.actions;
export let { addCount,addItem } = cart.actions; //함수 위치 cart임

