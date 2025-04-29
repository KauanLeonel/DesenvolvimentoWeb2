import { PrismaClient } from "@prisma/client";
import { string, z } from 'zod'; //Importar o zod

const prisma = new PrismaClient()

const propertySchema = z.object({//Cria o objeto para as validações
    id:z.number().positive(),
    type: z.string().min(5).max(7),
    endress: string().min(6).max(500),
    rooms: number().positive(),
    property: string().min(4).max(11)
}) 

export const propertyValidator = (property, partial = null) => {
    if(partial){
        return propertySchema.partial({partial}).safeParse(property);
    }
    return propertySchema.safeParse(property)
}

//prisma.users.findMany() //Buscar todos os itens da tabela

export async function create(property) {
    const result = await prisma.property.create({
        data: property
    })
    return result
}

export async function remove(id) {
    const result = await prisma.property.delete({
        where: { //Quando o id for igual
            id //Mesma coisa que falar id : id
        }
    })
    return result
}

export async function getList() {
    const result = await prisma.property.findMany({

    })
    return result
}

export async function update(id, property) {
    const result = await prisma.property.update({
        where: { //Quando o id for igual
            id //Mesma coisa que falar id : id
        },
        data: property
    })
    return result
}