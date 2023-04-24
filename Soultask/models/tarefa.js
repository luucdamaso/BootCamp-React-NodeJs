const { model, Schema } = require("mongoose");

// Uma tarefa tem um titulo, descrição e status (finalizada/pendente)
const Tarefa = model(
    "tarefa", // Nome do modelo (base p/ coleção)
    new Schema({ // Validação do documento
        titulo: {
            type: String, // String, number, boolean
            required: true,
        },
        descricao: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            default: "pendente",
        },
    })
);
module.exports = Tarefa;