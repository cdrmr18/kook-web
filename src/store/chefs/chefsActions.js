import { GET_CHEFS } from "./chefsTypes";
import { createAction } from "../../utils/reducer/reducerUtils";

export const setChefsMap = (chefsMap) => createAction(GET_CHEFS, chefsMap);
