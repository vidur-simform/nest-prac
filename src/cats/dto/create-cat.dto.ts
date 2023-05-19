const Joi = require('joi');
export class CreateCatDto {
    breed: string
    name: string
    age: number
}
export const createCatSchema = Joi.object({
    name: Joi.string().required(),
    age: Joi.number().required(),
    breed: Joi.string().required(),
})
