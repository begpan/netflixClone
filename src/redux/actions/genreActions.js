import axios from "axios";
import { ActionTypes } from "../actionTypes";
import { options } from "../../constant";

//kategprileri verilerini al reducera haber ver
export const getGenres = () => (dispatch) => {
  // api isteği atıldıgını reducera haber ver
  dispatch({ type: ActionTypes.GENRES_LOADING });
  // api isteği at
  axios
    .get("https://api.themoviedb.org/3/genre/movie/list", options)
    // veri gelirse reducera haber ver

    .then((res) =>
      dispatch({ type: ActionTypes.GENRES_SUCCESS, payload: res.data.genres })
    )
    // hata oluesa reducera hata ver

    .catch((err) =>
      dispatch({
        type: ActionTypes.GENRES_ERROR,
        payload: err.message,
      })
    );
};
