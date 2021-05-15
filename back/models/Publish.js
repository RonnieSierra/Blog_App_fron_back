const { urlencoded } = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const publishSchema = new Schema({
    titulo: {
        type: String,
        required: [true, 'El campo titulo es obligatorio']
    },
    post: {
        type: String,
        
    },
    img: String,
    activo: Boolean,
    numero: Number
});

publishSchema.virtual('titu').get(function () {
    return this.titulo+ ' ' + this.publicacion;
});

publishSchema.virtual('titu').set(function (newValue) {
    const arr = newValue.split(' ');
    this.titulo = arr[0];
    this.publicacion =arr[1]
});


publishSchema.statics.activos = function () {
    return this.model('publish').find({ activo: true });
}

module.exports = mongoose.model('publish', publishSchema);