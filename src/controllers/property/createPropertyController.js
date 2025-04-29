import { create, propertyValidator } from "../../models/propertyModel.js";
export default async function createPropertyController(req, res) {

    const property = req.body;

    // Desestrutura o resultado da função propertyValidator:
    // - 'success': indica se a validação foi bem-sucedida
    // - 'error': contém os erros, se houver
    // - 'data' é renomeado para 'propertyValited' e contém os dados validados (caso válidos)
    const { success, error, data: propertyValited } = propertyValidator(property, { id: true })

    // Verifica se a validação falhou (success é false)
    if (!success) {
        // Retorna uma resposta HTTP 400 (Bad Request) com uma mensagem de erro e os erros detalhados por campo
        return res.status(400).json({
            message: 'Erro ao cadastrar a propriedade', // Mensagem geral do erro
            errors: error.flatten().fieldErrors          // Lista de erros por campo (formato do Zod)
        })
    }

    const result = await create(propertyValited)


    return res.json({
        message: "imóvel criado com sucesso",
        property: result
    }
    )
}