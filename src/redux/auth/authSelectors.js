export const selectorToken = state => state.auth.token;
export const selectName = state => state.auth.name;
export const selectIsFetchingCurrentUser = state =>
  state.auth.sisFetchingCurrentUser;