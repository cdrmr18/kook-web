import { createSelector } from "reselect";

export const getChefs = createSelector(
  (state) => state.chefs.chefs,
  (chefs) => chefs
);
