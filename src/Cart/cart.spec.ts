import { PrismaClient } from "@prisma/client";
import request from "supertest";
import { app } from "../app";

describe("Testes das rotas de cart",()=>{
    test("Teste de erro ao ver cart sem token de acesso",async()=>{
        const response = await request(app)
        .get("/cart/");
        expect(response.statusCode).toEqual(401);
    });
    
    test("Teste de ver cart",async()=>{
        const response = await request(app)
        .get("/cart/")
        .set({"authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjU0NzgxMjEyfQ.keNgW4c__XPooeZZCfAdc16f_EedaX2MDuxQjGxtzI8"})
        expect(response.body.msg).toBeInstanceOf(Object);
        expect(response.body.msg.items.length).toBeGreaterThan(0);
        expect(response.statusCode).toEqual(200);

    })
})