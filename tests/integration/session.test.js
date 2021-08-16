const { it, expect } = require("@jest/globals");
const request = require("supertest")
const app = require("../../app")
const Users = require("../../models/user")


describe('inicio dos testes', () => {

    it('Inicializou Okay - 200', async () => {
       const response = await request(app)
            .get('/')
        expect(response.status).toBe(200);
    });

    it('acessa a rota da home e verifica o conteúdo que é exibido ', async () => {
        const response = await request(app)
             .get('/user/getAll')
        expect(response.body[0].name).toEqual("Victor");
     });
});