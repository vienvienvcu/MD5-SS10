import * as types from "../constants/actionTypes";
const initialState = {
  items: [], // Danh sách sản phẩm trong giỏ hàng
};

const cartsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD:
      // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIndex >= 0) {
        // Nếu có, cập nhật số lượng
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += action.payload.quantity;
        return { ...state, items: updatedItems };
      } else {
        // Nếu chưa, thêm sản phẩm mới vào giỏ hàng
        return {
          ...state,
          items: [
            ...state.items,
            { ...action.payload, quantity: action.payload.quantity },
          ],
        };
      }
    default:
      return state;
  }
};

export default cartsReducer;
