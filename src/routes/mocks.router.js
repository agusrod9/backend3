import { Router } from "express"
import { generateProduct, generateUser } from "../utils/mocking.util.js";
const router = Router()
import { create as createProduct} from '../dao/managers/productManager.js';
import { create as createUser } from "../dao/managers/userManager.js";

router.get('/mockingProducts', (req,res)=>{
    const {n} = req.query;
    if(n<1){
        return res.status(400).json({error: 'N must be greater than 0', data : null})
    }
    const mockedProducts = []
    for(let i=0; i<n; i++){
        mockedProducts.push(generateProduct())
    }
    if(mockedProducts.length>0){
        return res.status(200).json({error: null, data : mockedProducts})
    }else{
        return res.status(500).json({error: 'Unknown Server Error', data : null})
    }
})
router.get('/mockingUsers',(req,res)=>{
    const {n} = req.query;
    if(n<1){
        return res.status(400).json({error: 'N must be greater than 0', data : null})
    }
    const mockedUsers = []
    for(let i=0; i<n; i++){
        mockedUsers.push(generateUser())
    }
    if(mockedUsers.length>0){
        return res.status(200).json({error: null, data : mockedUsers})
    }else{
        return res.status(500).json({error: 'Unknown Server Error', data : null})
    }
})
router.post('/generateData', async(req,res)=>{
    const {usersN, productsN} = req.query;

    if(usersN<1 || productsN<1){
        return res.status(400).json({error: 'usersN & productsN must be greater than 0', data : null})
    }
    const mockedProducts = []
    for(let i=0; i<productsN; i++){
        mockedProducts.push(generateProduct())
    }
    for(let i=0; i<mockedProducts.length; i++){
        await createProduct(mockedProducts[i]);
    }

    const mockedUsers = []
    for(let i=0; i<usersN; i++){
        mockedUsers.push(generateUser())
    }
    for(let i=0; i<mockedUsers.length; i++){
        await createUser(mockedUsers[i]);
    }

    if(mockedUsers.length>0 && mockedProducts.length>0 ){
        return res.status(201).json({error: null, data : {users: mockedUsers, products: mockedProducts}})
    }else{
        return res.status(500).json({error: 'Unknown Server Error', data : null})
    }

})

export default router