import axios from "axios";

export const DELETE_LIST = "DELETE_LIST";
export const CREATE_LIST = "CREATE_LIST";
export const UPDATE_LIST = "UPDATE_LIST";
export const ISDONE_LIST ="ISDONE_LIST";
export const FETCH_LIST = "FETCH_LIST";

export const deleteList = (listId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:8080/lists/${listId}`);
      dispatch({
        type: DELETE_LIST,
        payload: {
          listId: listId,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const addList = (newList) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        "http://localhost:8080/lists",
        newList
      );
      dispatch({
        type: CREATE_LIST,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateList = (updatedList) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(
        `http://localhost:8080/lists/${updatedList.id}`,
        updatedList
      );
      dispatch({
        type: UPDATE_LIST,
        payload: { updatedList: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const isDone=(toChange)=>{
  const res = await axios.post(
    "http://localhost:8080/lists",toChange)
  return async(dispatch)=>{
    try {
      type:ISDONE_LIST;
      payload: {isDone: res.data}
    } catch (error) {
      console.log(error);
    }
  }
}
export const fetchLists = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:8080/lists");
      dispatch({
        type: FETCH_LIST,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};