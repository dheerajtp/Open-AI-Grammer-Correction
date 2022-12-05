const Joi = require("joi");

//register validation
exports.textValidation = (data) => {
  const schema = Joi.object({
    text: Joi.string().trim().min(3).required(),
  });
  return schema.validate(data);
};
