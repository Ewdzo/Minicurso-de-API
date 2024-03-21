import ProjectService from "../service/project.service.js";

export default class ProjectController {
    hello(req, res) {
        const projectService = new ProjectService();

        const data = projectService.hello(req);

        res.send(data);
    }

    hello_name(req, res) {
        const projectService = new ProjectService();

        if(!req.query.name) {
            res.send("O parâmetro 'name' não foi encontrado na requisição.");
            return;
        };

        const data = projectService.hello_name(req.query.name);

        res.send(data);
    }

    multiply(req, res) {
        const projectService = new ProjectService();
        
        if(!req.query.n1 || !req.query.n2) {
            res.status(400).send("Os parâmetros 'n1' ou 'n2' não foram encontrados na requisição.");
            return;
        };
    
        const data = projectService.multiply(req.query.n1, req.query.n2);
        
        res.status(200).send(data);
    }
}