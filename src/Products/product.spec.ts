import request from "supertest";
import { app } from "../app";

describe("Testes das rotas de products",()=>{
    test("Teste de adicionar product",async()=>{
        const response = await request(app)
        .post("/products/new")
        .send({name:"testeJest",price:20.0})
        expect(response.statusCode).toEqual(201);
        expect(response.body.msg).toEqual("Produto cadastrado");
    });

    test("Teste de adicionar product sem todos os campos",async()=>{
        const response = await request(app)
        .post("/products/new")
        .send({name:"testeJest"});
        expect(response.statusCode).toEqual(500);
        expect(response.body.msg).toEqual("Produto não possui todos os dados");
    });
})