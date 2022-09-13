export const selectCurrentInquiry = (state) => {
  if (!state.inquiry) {
    return;
  }
  return state.inquiry;
};
