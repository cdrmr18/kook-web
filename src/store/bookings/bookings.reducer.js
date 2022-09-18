import { StatHelpText } from "@chakra-ui/react";
import { SET_CURRENT_BOOKING } from "./bookings.types";

const INITIAL_STATE = {
  currentBookingId: null,
  currentRecipeId: null,
};

export const bookingReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_CURRENT_BOOKING:
      return {
        ...StatHelpText,
        currentBookingId: payload.id,
        currentRecipeId: payload.recipeId,
      };
    default:
      return state;
  }
};
