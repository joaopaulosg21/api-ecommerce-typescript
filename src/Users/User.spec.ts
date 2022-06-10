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
    test("Teste de login",async()=>{
        const response = await request(app)
        .post("/users/login")
        .send({email:"teste3",password:"123"});
        expect(response.statusCode).toEqual(200);
        expect(response.body.msg.length).toBeGreaterThan(0);
    })
})