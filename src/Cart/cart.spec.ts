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
        .set({"authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsImlhdCI6MTY1NTAzMjc2MX0.C03ZXHbxgjbdcSdfkjvXPLDh5GRvNKGVx8evi0BazxI"});
        expect(response.body.msg.id).toBeGreaterThan(0);
        expect(response.body.msg.items.length).toBeGreaterThan(0);
        expect(response.statusCode).toEqual(200);

    });

    test("Teste para ver carrinho que não existe",async()=>{
        const response = await request(app)
        .get("/cart/")
        .set({"authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjYsImlhdCI6MTY1NTAzMzYxOX0.Uwtl3owQIkrkJviFbm4LRMHELWXLB0QQJxrgZCPnLY8"});
        expect(response.body.msg).toEqual("Carrinho não existe");
        expect(response.statusCode).toEqual(404);

     })

    test("Teste para criar novo cart",async()=>{
        const response = await request(app)
        .post("/cart/addItem/4")
        .set({"authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsImlhdCI6MTY1NTAzMjc2MX0.C03ZXHbxgjbdcSdfkjvXPLDh5GRvNKGVx8evi0BazxI"});
        expect(response.body.msg.id).toBeGreaterThan(0);
        expect(response.body.msg.items.length).toBeGreaterThan(0);
        expect(response.statusCode).toEqual(200);
    });

    test("Teste para adicionar product que não existe no cart",async()=>{
        const response = await request(app)
        .post("/cart/addItem/1")
        .set({"authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsImlhdCI6MTY1NTAzMjc2MX0.C03ZXHbxgjbdcSdfkjvXPLDh5GRvNKGVx8evi0BazxI"});
        expect(response.body.msg).toEqual("Produto não existe");
        expect(response.statusCode).toEqual(404);
    });
})