import { FastifyInstance } from "fastify"
import { create_memmory, delete_memmory, edit_memmory, find_unique_memory, get_all_memories } from "../controllers/memories.controllers"

export const memoriesRoutes = async (app: FastifyInstance) => {
    app.get('/memories', get_all_memories) // OK
    app.get('/memory/:id', find_unique_memory) // OK
    app.post('/memory', create_memmory)
    app.put('/memory/:id', edit_memmory)
    app.delete('/memory/:id', delete_memmory)
}
