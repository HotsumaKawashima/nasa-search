export default (state, props) => {
  return {
    ...state.searchPage,
    q: state.router.location.query.q ? state.router.location.query.q : '',
  }
}
