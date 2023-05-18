import { prisma } from "../lib/prisma.lib"
import { z } from 'zod'

export const get_all_memories = async () => {
    const memories = await prisma.memory.findMany({
        orderBy: {
            createdAt: 'asc'
        }
    })
    return memories.map( (memory) => {
        return {
            id: memory.id,
            coverurl: memory.coverurl,
            excerpt: memory.content.substring(0, 115).concat('...')
        }
    }) 
}

export const find_unique_memory = async (request: any) => {
    const paramsSchema = z.object({
        id: z.string().uuid()
    })
    const { id } = paramsSchema.parse(request.params)

    const memory = await prisma.memory.findUniqueOrThrow({
        where: {
            id, 
        }
    })

    return memory
}

export const create_memmory = async (request: any) => {
    const bodySchema = z.object({
        content: z.string(),
        coverurl: z.string(),
        isPublic: z.coerce.boolean().default(false)
    })

    const { content, coverurl, isPublic } = bodySchema.parse(request.body)


    const memory = await prisma.memory.create({
        data: {
            content,
            coverurl,
            isPublic,
            userId: '5c83192a-5786-4dbf-ba6d-faf0b10de1c0',
        }
    })

    return memory
}

export const edit_memmory = async (request: any) => {
    const paramsSchema = z.object({
        id: z.string().uuid()
    })

    const { id } = paramsSchema.parse(request.params)

    const bodySchema = z.object({
        content: z.string(),
        coverurl: z.string(),
        isPublic: z.coerce.boolean().default(false)
    }) 

    const { content, coverurl, isPublic } = bodySchema.parse(request.body)

    const memory = await prisma.memory.update({
        where: {
            id,
        },
        data: {
            content, 
            coverurl,
            isPublic
        }
    })

    return memory
}



export const delete_memmory = async (request: any) => {
    const paramsSchema = z.object({
        id: z.string().uuid()
    })
    const { id } = paramsSchema.parse(request.params)

    const memory = await prisma.memory.delete({
        where: {
            id, 
        }
    })

    return 'Delete memory successfully' 
}
