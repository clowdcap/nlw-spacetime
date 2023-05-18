import { FastifyInstance } from "fastify"
import { get_all_users } from "../controllers/users.controllers"


export const usersRoutes = async (app: FastifyInstance) => {
    app.get('/users', get_all_users)
}
