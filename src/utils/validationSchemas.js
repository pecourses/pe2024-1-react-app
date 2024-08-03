import * as yup from "yup";

export const USER_NAME_SCHEMA = yup.object({
  userName: yup
    .string()
    .trim()
    .min(2)
    .max(32)
    .matches(/^[A-Z]/)
    .required(),
});

export const CONTACTS_VALIDATION_SCHEMA = yup.object({
  userName: yup
    .string()
    .trim()
    .min(2)
    .max(32)
    .matches(/^[A-Z]/)
    .required(),
  phoneNumber: yup
    .string()
    .trim()
    .length(13)
    .matches(/^\+380\d{9}$/, "Number must correspond format +380XXXXXXXXX")
    .required(),
  email: yup.string().email(),
  birthday: yup.date().max(new Date()),
});

/**************************************************/
// 1 Визначення схеми
const LOGIN_SCHEMA = yup.object({
  login: yup.string().trim().email().required(),
  password: yup
    .string()
    .trim()
    .min(8)
    .max(32)
    .matches(/(?=.*[a-z])/, "Password must contain at least 1 a-z")
    .matches(/(?=.*[A-Z])/, "Password must contain at least 1 A-Z")
    .required(),
});

const userLogin = { login: "    u@mail", password: "1!QQQQQQwQQ" };

// 2 Перевірка об'єкта за схемою
// LOGIN_SCHEMA.validate(userLogin)
//   .then(data => console.log(data))
//   .catch(err => console.log(err.errors));

//  Реалізувати схему для об'єкта, що містить інфо про авто у вгляді:
// {
//   model, productionYear, km, number (AA0000AA)
// }
// Здійснити валідацію об'єкта за схемою

const CAR_SCHEMA = yup.object({
  model: yup.string().trim().min(1).required(),
  productionYear: yup
    .number()
    .positive()
    .integer()
    .max(new Date().getFullYear())
    .required(),
  km: yup.number().positive().integer().required(),
  number: yup
    .string()
    .trim()
    .matches(/^[A-Z]{2}\d{4}[A-Z]{2}$/)
    .required(),
});

const car = {
  model: "Audi A6",
  productionYear: 2023,
  km: 155000,
  number: "CE1111AA",
};

// CAR_SCHEMA.validate(car)
//   .then(data => console.log(data))
//   .catch(err => console.log(err.errors));
