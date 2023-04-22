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
        it('Comprueba que se obtiene un código 404 al intentar eliminar un café con un id que no existe', async () => {
            const id = 11;
            const respuesta = await request(server).delete(`/cafes/:${id}`).set('Authorization', 'token').send();
            expect(respuesta.statusCode).toBe(404);
        })
        
        //Tercer requerimiento
        it('la ruta POST /cafes agrega un nuevo café y devuelve un código 201', async ()=>{
            const nuevoCafe = {id: 5, nombre : 'Nuevo Café'}
            respuesta = await request(server).post("/cafes").send(nuevoCafe)
            const status = respuesta.statusCode
            expect(status).toBe(201)
            expect(respuesta.body).toContainEqual(nuevoCafe)
        })

});
