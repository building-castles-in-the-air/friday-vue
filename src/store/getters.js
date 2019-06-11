const getters = {
    permission_routes: state => state.permission.routes,
    sidebar: state => state.app.sidebar,
    device: state => state.app.device,
    avatar: state => state.user.avatar,
    token: state => state.user.token,
    visitedViews: state => state.tagsView.visitedViews,
}
export default getters