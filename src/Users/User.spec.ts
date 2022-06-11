import request from "supertest";
import { app } from "../app";

describe("Testes das rotas de users",()=>{
    test("Teste de adicionar user",async()=>{
        const response = await request(app)
        .post("/users/new")
        .send({name:"testesJest",password:"123",email:"testeJest@email.com"});
        expect(response.body.msg).toEqual("Usuario criado");
        expect(response.statusCode).toEqual(201);
    });

    test("Teste de adicionar user caso email ja esteja cadastrado",async()=>{
        const response = await request(app)
        .post("/users/new")
        .send({name:"testesJest",password:"123",email:"testeJest@email.com"});
        expect(response.body.msg).toEqual("Email ja cadastrado");
        expect(response.statusCode).toEqual(406);
    });

    test("Teste de adicionar user sem mandar todos os campos",async()=>{
        const response = await request(app)
        .post("/users/new")
        .send({name:"testesJest",password:"123"});
        expect(response.body.msg).toEqual("Usuario não possui todos os dados");
        expect(response.statusCode).toEqual(500);
    });

    test("Teste de login",async()=>{
        const response = await request(app)
        .post("/users/login")
        .send({email:"teste3",password:"123"});
        expect(response.statusCode).toEqual(200);
        expect(response.body.msg.length).toBeGreaterThan(0);
    });
    
    test("Teste de login sem mandar todos os campos",async()=>{
        const response = await request(app)
        .post("/users/login")
        .send({email:"teste3"});
        expect(response.statusCode).toEqual(500);
        expect(response.body.msg).toEqual("Usuario não possui todos os dados")
    });

    test("Teste de login com dados incorretos",async()=>{
        const response = await request(app)
        .post("/users/login")
        .send({email:"teste3",password:"1234"});
        expect(response.statusCode).toEqual(401);
        expect(response.body.msg).toEqual("Email ou senha invalidos")
    })
})