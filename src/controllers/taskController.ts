import { Request, Response } from 'express'
import { v4 as uuidv4 } from 'uuid'
import { Task, TaskStatus } from '../types/taskTypes.js'

const tasks: Task[] = []

export const createTask = (req: Request, res: Response) => {
  const { title, description }: { title: string; description: string } = req.body

  if (!title || !description || typeof title !== 'string' || typeof description !== 'string' || title.trim() === '' || description.trim() === '') {
    return res.status(400).json({ message: 'Title and description are required and must be "non-empty" strings' })
  }

  const newTask: Task = {
    id: uuidv4(),
    title,
    description,
    status: 'pending',
  }

  tasks.push(newTask)

  res.status(200).json(newTask)
}

export const getTasks = (req: Request, res: Response) => {
  const { limit = '10', offset = '0' } = req.query
  const paginatedTasks = tasks.slice(Number(offset), Number(offset) + Number(limit))

  res.status(200).json(paginatedTasks)
}

export const getTaskById = (req: Request, res: Response) => {
  const taskId = req.params.id
  const task = tasks.find((t) => t.id === taskId)

  if (!task) {
    return res.status(404).json({ message: 'Task not found' })
  }

  res.status(200).json(task)
}

export const updateTask = (req: Request, res: Response) => {
  const taskId = req.params.id
  const task = tasks.find((t) => t.id === taskId)

  if (!task) {
    return res.status(404).json({ message: 'Task not found' })
  }

  const { title, description, status }: { title?: string; description?: string; status?: TaskStatus } = req.body

  if (status && status !== 'pending' && status !== 'completed') {
    return res.status(400).json({ message: 'Status must be either "pending" or "completed"' })
  }

  if (title) {
    task.title = title
  }

  if (description) {
    task.description = description
  }

  if (status) {
    task.status = status
  }

  if (
    typeof title !== 'string' ||
    typeof description !== 'string' ||
    title.trim() === '' ||
    description.trim() === ''
  ) {
    return res.status(400).json({ message: 'must be "non-empty" string' })
  }

  res.status(200).json(task)
}

export const deleteTask = (req: Request, res: Response) => {
  const taskId = req.params.id
  const taskIndex = tasks.findIndex((t) => t.id === taskId)

  if (taskIndex === -1) {
    return res.status(404).json({ message: 'Task not found' })
  }

  tasks.splice(taskIndex, 1)

  res.status(200).json({ message: 'Task deleted successfully' })
}

export const getApiDocs = ( req: Request, res: Response) => {
  const apiDocs = `
  <style>
      body { background-color: #333; font-family: courier; }
      li { font-size: 1.3rem; padding: .5rem;
          color: gray; margin: .5rem; background-color: #111;}
      a { color: indianred; }
  </style>
      <h1>Api Documentation</h1>
      <ul>
          <li>
              <a href='/tasks'>/Tasks</a>
              Get All Tasks
          </li>
      </ul>
  `;
  res.send(apiDocs);
};
