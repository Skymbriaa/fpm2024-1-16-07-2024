import * as Yup from 'yup';

export const taskShema = Yup.object( {
    content: Yup.string()
    .trim()
    .min(3, 'min 3 symbols')
    .max(100, 'max 100 symbols')
    .matches(/[-0-9a-zA-Zф-яФ-Я ,.!?]{3, 100}/)
    .required('write smth')
});