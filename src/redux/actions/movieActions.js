import axios from "axios";
import { options } from "../../constant";
import { ActionTypes } from "../actionTypes";

// apiden filmleri alır ve store a aktaran aksiyon
export const getPopular = () => (dispatch) => {
  dispatch({ type: ActionTypes.MOVIES_LOADING });

  //   APİDEN POPULER FİLMERİ AL

  axios
    .get("https://api.themoviedb.org/3/movie/popular", options)
    // basarılı olursa reduceere bildir
    .then((res) =>
      dispatch({
        type: ActionTypes.MOVIES_SUCCESS,
        payload: res.data.results,
      })
    )
    // basarısız olursa reducera bildir
    .catch((err) =>
      dispatch({ type: ActionTypes.MOVIES_ERROR, payload: err.message })
    );
};
