const {Schema, model} = require('mongoose')

const EventoSchema = Schema({
    nota:{
        type: String,
        require:true

    },
    title:{
        type:String,
        require:true,
    },
    start:{
        type:Date,
        require:true
    },
    end:{
        type:Date,
        require:true
    },
    bgcolor:{
        type:String
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'Usuario',
        require:true
    }
})

EventoSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = model('Evento',EventoSchema);