import authService from "../../services/authService.js";
import { registerTemplate } from "./registerTemplate.js";

async function submitHandler(context, e){
    let formData = new FormData(e.target);
    let user = {
        email: formData.get('email'),
        password: formData.get('password')
    }
    let registerResult = await authService.register(user);
    context.page.redirect('/dashboard');
}

async function getView(context){
    let boundSubmitHandler = submitHandler.bind(null , context);
    let form = {
        submitHandler: boundSubmitHandler,
    }
    
    let templateResult = registerTemplate(form);
    context.renderView(templateResult);

context.renderView(templateResult);

}

export default {
    getView
}