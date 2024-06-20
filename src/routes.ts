import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/CreateUserController";

const createUserController = new CreateUserController();
//instancia responsavel por criar rotas
const router = Router();

router.get("/", (request:Request, response:Response) => {
    return response.json({mensagem: "Bem-vindo a API"});
})

router.post("/users", createUserController.handle) 

export { router }