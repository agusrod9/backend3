import {faker} from '@faker-js/faker';
import {fakerES as fakerNombresEsp} from '@faker-js/faker';
import { createHashUtil } from './hash.util.js';
import crypto from 'crypto';

export const generateUser = ()=>{

    const firstName = fakerNombresEsp.person.firstName();
    const lastName = fakerNombresEsp.person.lastName();
    const roles = {USER: 'USER', ADMIN : 'ADMIN', PREM : 'PREM'};
    const roleRandomNumber = Math.floor(Math.random()* Object.keys(roles).length);
    const randomRole = roles[Object.keys(roles)[roleRandomNumber]];
    const mails = {GMAIL : '@gmail.com', HOTMAIL : '@hotmail.com', YAHOO : '@yahoo.com', OUTLOOK : '@outlook.com', ICLOUD : '@icloud.com'};
    const mailRandomNumber = Math.floor(Math.random()*Object.keys(mails).length);
    const randomMail = mails[Object.keys(mails)[mailRandomNumber]]
    const user = {
        firstName,
        lastName,
        email :  `${firstName.toLocaleLowerCase().split(' ')[0]}.${lastName.toLocaleLowerCase().split(' ')[0]}${randomMail}`,
        password : createHashUtil('coder123'),
        role : randomRole,
        verifiedUser : true,
        verificationCode : crypto.randomBytes(12).toString('hex')
    }
    return user;
}

export const generateProduct = ()=>{
    const categories = {
        ELECTRONICS: 'ELECTRONICS',
        FASHION: 'FASHION',
        HOME_APPLIANCES: 'HOME_APPLIANCES',
        TOYS: 'TOYS',
        SPORTS: 'SPORTS',
        BOOKS: 'BOOKS',
        BEAUTY: 'BEAUTY',
        AUTOMOTIVE: 'AUTOMOTIVE',
        GROCERY: 'GROCERY',
        HEALTH: 'HEALTH'
      };
    const catRandomNumber = Math.floor(Math.random()* Object.keys(categories).length);
    const randomCategory = categories[Object.keys(categories)[catRandomNumber]];
    const product = {
        title: faker.commerce.productName(),
        description : faker.commerce.productDescription(),
        code : faker.number.int({min: 10000000000, max: 99999999999 }),
        price : +faker.commerce.price(),
        status : faker.datatype.boolean(),
        stock : faker.number.int({min: 0, max: 120}),
        category : randomCategory,
        thumbnails : []
    }
    return product
}