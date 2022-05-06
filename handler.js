'use strict';
let Validator = require("./validator/Validator");

module.exports.hello = async (event) => {
  try {
    const validacao = await Validator.validator(event);

    if(validacao.error){
      return {
        codigo: 422,
        message: validacao.error.details[0].message
      }
    }

    console.log(validacao);

  } catch (error) {
      console.log(error.message)
  }
  
};
