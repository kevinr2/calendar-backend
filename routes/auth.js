const { Router } = require("express");
const { check } = require("express-validator");
const { validaJWT }= require('../middlewares/validar-jwt')
const router = Router();

const {
  crearUsuario,
  loginUsuario,
  revalidarToken,
} = require("../controllers/auth");
const { validarCampos } = require("../middlewares/validar-campos");

router.post("/", 
    [
        check('email','email es obligatorio').isEmail(),
        check('password','el password debe ser de  6 caracteres').isLength({min:6}),
        validarCampos
    ],
    loginUsuario);
router.post("/new",
     [
        check('name','el nombre es obligatorio').not().isEmpty(),
        check('email','email es obligatorio').isEmail(),
        check('password','el password debe ser de  6 caracteres').isLength({min:6}),
        validarCampos
     ], 
     crearUsuario);

router.get("/renew", validaJWT,revalidarToken);

module.exports = router;
