const express = require('express');
const router = express.Router();

const { addToDo, getToDoList, deleteToDo, markCompleted } = require('../controllers/getToDoList');

router.post('/addToDo', addToDo);
router.get('/getToDoList', getToDoList);
router.delete('/deleteToDo/:_id', deleteToDo);
router.put('/markCompleted/:_id', markCompleted);

module.exports = router;