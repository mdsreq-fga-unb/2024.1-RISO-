# Introdução 
RISO é um software projetado para medir a satisfação dos clientes em uma loja específica, analisando suas expressões faciais por meio de tecnologias de visão computacional. Este documento de backlog visa apresentar:

- Histórias de Usuário (USs)
- Requisitos Funcionais
- Requisitos Não Funcionais
- Backlog

# User Storys (USs)

| Nº   | Descrição                                                                                                                                        |
|------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| US01 | Cadastrar e Logar na Conta: Eu como usuário, devo ser capaz de me cadastrar e logar na plataforma, para que eu possa utilizar das funções do software e ter a segurança de meus dados. |
| US02 | Cadastrar Empresa-Unidade: Eu como usuário, devo ser capaz de registrar uma nova Unidade/Empresa, para que os dados obtidos pelo sistema RISO seja acessada apenas pelos associados à esta Unidade/Empresa. |
| US03 | Adicionar Colaboradores: Eu como Administrador da Unidade/Empresa, devo ser capaz de adicionar colaboradores a partir de um código aleatório gerado no ato da criação da Unidade/Empresa, para que mais pessoas possam acompanhar os dados obtido pelo sistema RISO. |
| US04 | Editar Colaboradores: Eu como Usuário administrador da Unidade/Empresa, devo ser capaz de atribuir os dados profissionais internos de qualquer colaborador associado à minha Unidade/Empresa, para que eu organize melhor as atribuições da equipe dentro da plataforma. |
| US05 | Gerenciar Privilégios: Eu como usuário administrador, devo ser capaz de adicionar e remover usuários privilegiados de minha Unidade/Empresa, isto é, de gerenciar sub-administradores, para que outros usuários possam me dar assistência no gerenciamento da Unidade/Empresa além de mim. |
| US06 | Reconhecer Sorrisos: O sistema deve ser capaz de capturar sorrisos de uma pessoa a partir da visão computacional fornecida por uma câmera ou webcam, para que o reconhecimento de sorrisos aconteça. |
| US07 | Contabilizar Sorrisos: O sistema, deve ser capaz de contabilizar a quantidade de sorrisos totais da clientela no dia, e por pessoa no dia, para que os dados possam ficar organizados posteriormente. |
| US08 | Visualizar filtro de gráfico de sorrisos por dia, semana e mês: Eu como usuário comum e administrador, devo ser capaz de visualizar um gráfico da quantidade total de sorrisos por dia, semana ou mês, para que eu tenha visão clara e facilidade dos dados. |
| US09 | Visualizar gráfico de média de sorrisos por pessoa por dia, semana e mês: Eu como usuário e usuário administrador, devo ser capaz de visualizar a quantidade média de sorrisos por pessoa filtrada por dia, semana ou mês, para que eu possa consultar os dados facilmente de forma clara e de forma mais clara. |
| US10 | Visualizar dados de taxas gerais de risos: Eu como usuário e usuário administrador, devo ser capaz de visualizar uma taxa em porcentagem que exibe a quantidade de pessoas capturadas para o levantamentos dos dados no dia e quantas dessas riram, para que eu obtenha dados aprofundados da taxa de sorrisos. |
| US11 | Integrar em uma câmera única na Caixa: O Sistema, deve ser capaz de capturar e realizar o reconhecimento de sorrisos com uma câmera especializada do cliente, para que o sistema RISO seja devidamente aplicado ao contexto do cliente. |

# Backlog

| Épico                                    | User Story | Objetivo                                                                                  |
|------------------------------------------|------------|-------------------------------------------------------------------------------------------|
| [EP01]: Reconhecimento de Sorrisos       | US11       | Integrar em uma câmera Única na Caixa                                                     |
| [EP01]: Reconhecimento de Sorrisos       | US07       | Contabilizar Sorrisos                                                                     |
| [EP01]: Reconhecimento de Sorrisos       | US06       | Reconhecer Sorrisos                                                                       |
| [EP02]: Visualização de Dados            | US09       | Visualizar gráfico de média de sorrisos por pessoa por dia, semana e mês                  |
| [EP02]: Visualização de Dados            | US10       | Visualizar dados de taxas gerais de risos                                                 |
| [EP02]: Visualização de Dados            | US08       | Visualizar filtro de gráfico de sorrisos por dia, semana e mês                            |
| [EP03]: Gerenciamento de Unidade/Empresa | US05       | Gerenciar Privilégios                                                                     |
| [EP03]: Gerenciamento de Unidade/Empresa | US04       | Adicionar Colaboradores                                                                   |
| [EP03]: Gerenciamento de Unidade/Empresa | US03       | Adicionar Colaboradores                                                                   |
| [EP04]: Gerenciamento de Conta           | US01       | Cadastrar e Logar na Conta                                                                |
| [EP04]: Gerenciamento de Conta           | US02       | Cadastrar Empresa-Unidade                                                                 |
