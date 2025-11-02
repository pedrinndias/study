# Modelo de Dados da Farmacia

```mermaid
erDiagram
    Farmacia {
        string CNPJ PK
        string Nome
        string Endereco
    }

    Cliente {
        string CPF PK
        string Nome
        date Data_Nascimento
        int Idade
        string Telefones
        string Endereco
    }

    Nota_Fiscal {
        int Numero_NF PK
        date Data_Emissao
        float Valor_Total
    }

    Item_Nota {
        int Quantidade_Comprada
    }

    Funcionario {
        int Matricula PK
        string Nome
        string Cargo
        float Salario
    }

    Farmaceutico {
        string Num_Conselho_Profissional
    }

    Atendente {
        float Percentual_Comissao
    }

    Gerente {
        float Volume_Vendas
    }

    Produto {
        int Codigo PK
        string Descricao
        float Preco_Unitario
        int Qtde_em_Estoque
    }

    Remedio {
        date Data_Validade
        bool Obrigat_Receita
    }

    Farmacia ||--|{ Funcionario : "possui"
    Farmacia ||--|{ Nota_Fiscal : "emite"
    Cliente ||--|{ Nota_Fiscal : "realiza_compra"

    Nota_Fiscal ||--|{ Item_Nota : "contem"
    Produto ||--|{ Item_Nota : "e_item_de"

    Funcionario ||--|| Farmaceutico : "e_um"
    Funcionario ||--|| Atendente : "e_um"
    Funcionario ||--|| Gerente : "e_um"
    Produto ||--|| Remedio : "e_um"
