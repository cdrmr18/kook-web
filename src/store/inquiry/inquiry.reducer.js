import { StatHelpText } from "@chakra-ui/react";
import { SET_CURRENT_INQUIRY } from "./inquiry.types";

const INITIAL_STATE = {
  currentInquiryId: null,
  currentRecipeId: null,
};

export const inquiryReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_CURRENT_INQUIRY:
      return {
        ...StatHelpText,
        currentInquiryId: payload.id,
        currentRecipeId: payload.recipeId,
      };
    default:
      return state;
  }
};
