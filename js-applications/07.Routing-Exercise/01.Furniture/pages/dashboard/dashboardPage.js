import furnitureService from "../../services/furnitureService.js";
import { dashboardTemplate } from "./dashboardTemplate.js"

async function getView(context){
    let allFurniture = await furnitureService.getAll();
let templateResult = dashboardTemplate(allFurniture);
context.renderView(templateResult);
//context.renderNav(templateResult);
}

export default {
    getView
}