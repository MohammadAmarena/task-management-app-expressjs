import express from 'express'
import { createTask, getTasks, getTaskById, updateTask, deleteTask, getApiDocs } from '../controllers/taskController.js'

const router = express.Router()

router.post('/tasks', createTask)
router.get('/tasks', getTasks)
router.get('/tasks/:id', getTaskById)
router.put('/tasks/:id', updateTask)
router.delete('/tasks/:id', deleteTask)
router.get('/', getApiDocs)

export { router as routes }
