import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

//prisma.users.findMany() //Buscar todos os itens da tabela

export async function create(property){
    const result = await prisma.property.create({
        data: property
    })
    return result
}

export async function remove(id){
    const result = await prisma.property.delete({
        where:{ //Quando o id for igual
            id //Mesma coisa que falar id : id
        }
    })
    return result
}

export async function getList(){
    const result = await prisma.property.findMany({
        
    })
    return result
}

export async function update(id, property){
    const result = await prisma.property.update({
        where:{ //Quando o id for igual
            id //Mesma coisa que falar id : id
        },
        data: property
    })
    return result
}