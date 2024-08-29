const {Router} = require('express')
const{validaJWT}= require('../middlewares/validar-jwt')
const {check} =require('express-validator')
const {validarCampos} = require('../middlewares/validar-campos')
const {getEvento,crearEvento,editarEvento,eliminarEvento}=require('../controllers/events')
const { isDate } = require('../helpers/isDate')

 const router = Router()

router.use(validaJWT)

router.get('/',getEvento)


router.post('/',
    [
        check('title','el titulo es obligatorio').not().isEmpty(),
        check('start','fecha de inicio obligatoria').custom(isDate),
        check('end','fecha de final es obligatoria').custom(isDate),
        validarCampos
    ],
    crearEvento)

router.put('/:id',    [
    check('title','El titulo es obligatorio').not().isEmpty(),
    check('start','Fecha de inicio es obligatoria').custom( isDate ),
    check('end','Fecha de finalización es obligatoria').custom( isDate ),
    validarCampos
],editarEvento)

router.delete('/',eliminarEvento)



module.exports =router