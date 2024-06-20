import express, {Request, Response} from 'express';

const server = express();
const port = 5000;

server.get("/", (request:Request, response:Response) => {
    return response.json({mensagem: "Bem-vindo a API"});
})


server.listen(port, () => {
    console.log(`Servidor on na porta ${port}. http://localhost:${port}/`)
})