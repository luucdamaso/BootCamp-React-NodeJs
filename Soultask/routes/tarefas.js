const { Router } = require("express");
const Tarefa = require("../models/tarefa");

const router = Router();

// Rotas

// Inserção de Tarefa (POST)
router.post("/tarefas", async (req, res) => {
    try {
        const { titulo, descricao, status } = req.body;
        // Criando um novo documento mongo
        const tarefa = new Tarefa({titulo, descricao, status});
        // O save vai inserir o documento na coleção tarfeas
        await tarefa.save();
        res.status(201).json(tarefa);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Um erro aconteceu." })
    }
});
// Listagem de todas as Tarefas (GET)
router.get("/tarefas", async (req, res) => {
    try {
        // Realiza uma busca de todos os documentos da coleção
    const tarefas = await Tarefa.find();
    res.status(200).json(tarefas);
    } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Um erro aconteceu." })
    }
    });
// Listagem de uma Tarefa (GET)
router.get("/tarefas/:id", async (req, res) => {
    try {
    const tarefa = await Tarefa.findById(req.params.id);
    if (!tarefa) return res.status(404).json({ message: "Tarefa não encontrada." });
    res.status(200).json(tarefa);
    } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Um erro aconteceu." })
    }
    });
// Atualização de uma Tarefa (PUT)
router.put("/tarefas/:id", async (req, res) => {
    try {
    const { titulo, descricao, status } = req.body;

    // Caso encontre o id, realiza a atualização e retorna o objeto encontrado.
    const tarefa = await Tarefa.findByIdAndUpdate(req.params.id, { titulo, descricao, status }, { new: true });
    if (!tarefa) return res.status(404).json({ message: "Tarefa não encontrada." });
    res.status(200).json(tarefa);
    } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Um erro aconteceu." })
    }
    });
// Remoção de uma Tarefa (DELETE)
router.delete("/tarefas/:id", async (req, res) => {
    try {
    const tarefa = await Tarefa.findByIdAndDelete(req.params.id);
    if (!tarefa) return res.status(404).json({ message: "Tarefa não encontrada." });
    res.status(200).json({ message: "Tarefa removida com sucesso." });
    } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Um erro aconteceu." })
    }
    });

module.exports = router;