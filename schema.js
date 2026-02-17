const Joi = require("joi");

const valid = Joi.object({
    name:Joi.string().min(3).required(),
    age:Joi.number().min(1).max(120),
    email:Joi.string().email(),
    city:Joi.string(),
    father_name:Joi.string(),
    contact:Joi.number().required(),
});

module.exports = valid;