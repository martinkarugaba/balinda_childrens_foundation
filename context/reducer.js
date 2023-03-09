const reducer = (state, action) => {
  switch (action.type) {
    case 'HANDLE_CLICK':
      return {
        ...state,
        result: calculate(state.result, action.payload),
      };

    default:
      return state;
  }
};

export default reducer;
