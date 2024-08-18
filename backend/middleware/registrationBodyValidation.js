import Joi from "joi";

const registrationSchema = Joi.object({
    name: Joi.string().min(3).max(20).required(),
    email: Joi.string().pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).required(),
    password: Joi.string()
        .min(8)
        .max(30)
        .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'))
        .required(),
    age: Joi.number()
        .integer()
        .min(18)
        .max(120)
        .required(),
});

export async function validateRegistrationBody(req, res, next) {
    const { error } = registrationSchema.validate(req.body);

    if (error) {
        res.status(400).json({ message: error.details[0].message });
        return;
    }

    next();
}
