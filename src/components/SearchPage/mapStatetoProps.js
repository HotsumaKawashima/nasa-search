export default (state, props) => {
  return {
    ...state.searchPage,
    loading: state.app.loading,
    q: state.router.location.query.q ? state.router.location.query.q : '',
    page: state.router.location.query.page ? state.router.location.query.page : 1,
  }
}
