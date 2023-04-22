const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD de cafes", () => {

    //Primer requerimiento
    it('la ruta GET /cafes devuelve un status code 200... continua-->', async ()=>{
        const respuesta = await request(server).get('/cafes').send()
        const status = respuesta.statusCode
        const esperado = 200
        expect(status).toBe(esperado)
    })

    it('viene de --> ...el tipo de dato recibido es un arreglo con por lo menos 1 objeto', async ()=>{
        const { body } = await request(server).get("/cafes").send()
        const arreglo = body
        expect(arreglo).toBeInstanceOf(Array)
    })

        //Segundo requerimiento
        it("Comprueba que se obtiene un código 404 al intentar eliminar un café con un id que no existe", async () => {
            const id = 11;
            const response = await request(server).delete(`/cafes/:${id}`).set("Authorization", "token").send();
            expect(response.statusCode).toBe(404);
        })

});
