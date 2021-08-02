import page from '../node_modules/page/page.mjs';
import dashboardPage from './pages/dashboard/dashboardPage.js';
import renderingMiddleware from './rendering/renderingMiddleware.js';
import nav from './nav/nav.js';
import loginPage from './pages/login/loginPage.js';
import authService from './services/authService.js';
import registerPage from './pages/register/registerPage.js';

let appContainer = document.querySelector('#viewContainer');
let navContainer = document.querySelector('#navigation');

renderingMiddleware.initialize(appContainer,navContainer);

page('/dashboard',renderingMiddleware.decorateContext,nav.getView, dashboardPage.getView);
page('/login',renderingMiddleware.decorateContext,nav.getView, loginPage.getView);
page('/register',renderingMiddleware.decorateContext,nav.getView, registerPage.getView);

page('/logout', async(context) => { await authService.logout() ; page.redirect('/dashboard')})
page('/index.html','/dashboard');
page('/', '/dashboard');


page.start()