import { prisma } from "../lib/prisma.lib"

export const get_all_users = async () => {
    const users = await prisma.user.findMany()
    return users
}

export const find_unique_user = async () => {
    const users = await prisma.user.findMany()
    return users
}

export const create_user = async () => {
    const users = await prisma.user.findMany()
    return users
}

export const edit_user = async () => {
    const users = await prisma.user.findMany()
    return users
}

export const delete_user = async () => {
    const users = await prisma.user.findMany()
    return users
}
