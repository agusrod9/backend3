import { create, readAllPopulated, readByIdPopulated, update, deleteById, readById } from '../dao/managers/cartManager.js';
import Assert from 'assert';
import mongoose, { mongo } from "mongoose";
import envUtil from '../utils/env.util.js';
const assert = Assert.strict;

const {MONGO_REMOTE_URI} = envUtil;

describe('Testing de Cart Manager', function() {
    const ids = [];
    before(async function(){
        await mongoose.connect(MONGO_REMOTE_URI)
    })

    beforeEach(function(){
        this.timeout(1000);
    })

    after(async function(){
        await Promise.all(ids.map(id => deleteById(id)))
    })

    it('El manager debe poder obtener todos los carritos y devolverlos en un array.', async function () {
        const carts = await readAllPopulated()
        assert.ok(Array.isArray(carts), "Los carts obtenidos NO son un Array.")
    })

    it('El manager debe poder agregar un carrito a la base de datos, con un arreglo de productos vacío por defecto.', async function () {
        const userId = '676ea3bb427976671b930fed'
        const cart = await create({userId})
        assert.ok(cart._id, "El cart no se creó correctamente.")
        ids.push(cart._id)
        assert.ok(Array.isArray(cart.productList), "El productList del cart NO es un Array.")
    })
})
