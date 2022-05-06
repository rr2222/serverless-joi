const Joi = require('joi');


module.exports.validator = async (event) => {

  const cpfPattern = /([0-9]{2}[0-9]{3}[0-9]{3}[0-9]{4}[0-9]{2})|([0-9]{3}[0-9]{3}[0-9]{3}[0-9]{2})/;
  const cpfMessage = {
    'string.base': `"cpf" deve ser do tipo texto`,
    'string.empty': `"cpf" nao pode estar vazio`,
    'any.required': `"cpf" campo é um campo necessário`,
    'string.pattern.base': `"cpf" número de cpf inválido. Necessario digitar sem pontuações`

  }
try {
  const schema = Joi.object({
    nome: Joi.string().trim().required().messages({
      'string.base': `"nome" deve ser do tipo texto`,
      'string.empty': `"nome" nao pode estar vazio`,
      'any.required': `"nome" é um campo necessário`
    }),
    cpf: Joi.string().trim().regex(cpfPattern).length(11).required().messages(cpfMessage),
    conta: Joi.string().trim().required(),
    beneficiario: Joi.string().trim().required(),
    valor:Joi.number().required(),
    cpf_beneficiario: Joi.string().trim().regex(cpfPattern).length(11).required().messages(cpfMessage)
   })
    
   return schema.validate(event);
} catch (error) {
  throw error
}
};
  
