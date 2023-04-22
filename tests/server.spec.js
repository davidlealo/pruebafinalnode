const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD de cafes", () => {

    //Primera parte del desafío
    it('la ruta GET /cafes devuelve un status code 200 y el tipo de dato recibido es un arreglo con por lo menos 1 objeto', async ()=>{
        const respuesta = (await request(server).get('/cafes')).send()
        const status = respuesta.statusCode
        const esperado = 200
        expect(status).toBe(esperado)
    })
});
