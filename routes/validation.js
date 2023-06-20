import * as yup from 'yup';

const mySchema = yup.object({
    title: yup.string().required(),
    price: yup.number().required(),
    description: yup.string().required(),
    categoryId: yup.number().required(),
    images: yup.array().required(),
});
export const validate = async (req, res, next) => {
    try {
        await mySchema.validate(req.body);
        next();
    } catch (err) {
        res.status(401);
        console.log(err.message);
        res.send('Unauthorized');
    }
};