const selectIsLoading = (state) => state.auth.isLoading;
const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
const selectUser = (state) => state.auth.user;

export { selectIsLoading, selectUser, selectIsLoggedIn };
