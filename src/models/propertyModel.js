import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

//prisma.users.findMany() //Buscar todos os itens da tabela

export async function create(property){
    const result = await prisma.property.create({
        data: property
    })
    return result
}