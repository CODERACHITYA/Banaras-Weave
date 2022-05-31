import home from'../app/http/controllers/home';
function indexRoutes(app) {
    app.get('/', home().index)
}
export default indexRoutes