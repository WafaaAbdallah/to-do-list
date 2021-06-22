import {
    CREATE_LIST,
    DELETE_LIST,
    FETCH_LIST,
    UPDATE_LIST,
    ISDONE_LIST,
  } from "./actions";

  const initialState = {
    lists: [],
  };
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case DELETE_LIST:
        const keepList = state.lists.filter(
          (list) => list.id !== action.payload.listId
        );
        return {
          ...state,
          lists: keepList,
        };
      case CREATE_LIST:
        return {
          ...state,
          lists: [...state.lists, action.payload],
        };
      case UPDATE_LIST:
        const { updatedList } = action.payload;
        return {
          ...state,
          lists: state.lists.map((list) =>
            list.id === updatedList.id ? updatedList : list
          ),
        };
        case ISDONE_LIST:
          let listUpToDate=action.payload.toUpdate
            if(listUpToDate.isDone ==="false")
            listUpToDate.isDone ="true"
            else listUpToDate.isDone ="false"
            let newlists = state.lists.map((list)=> list.id === listUpToDate.id?listUpToDate:list)
            return{
                ...state,
                lists:newlists


            }
      case FETCH_LIST:
        return {
          ...state,
          lists: action.payload,
        };
      default:
        return state;
    }
  };
  export default reducer;