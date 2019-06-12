const getters = {
    permission_routes: state => state.permission.routes,
    sidebar: state => state.app.sidebar,
    device: state => state.app.device,
    avatar: state => state.user.avatar,
    token: state => state.user.token,
    roles: state => state.user.roles,
    visitedViews: state => state.tagsView.visitedViews,
    errorLogs: state => state.errorLog.logs,
    showSettings: state => state.settings.showSettings,
    needTagsView: state => state.settings.tagsView,
    fixedHeader: state => state.settings.fixedHeader
}
export default getters