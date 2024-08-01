## 1. Introdução 
RISO é um software projetado para medir a satisfação dos clientes em uma loja específica, analisando suas expressões faciais por meio de tecnologias de visão computacional. Este documento de backlog visa apresentar:

- Histórias de Usuário (US's)
- Requisitos Não Funcionais
- Backlog

## 2. User Storys (USs)
User Story (ou história do usuário) é uma sentença curta e simples sobre uma funcionalidade (escrita sob a perspectiva do usuário que a deseja), utilizada para informar e inspirar decisões de design.

Nº | Título | História de Usuário
-- | ------ | --------- 
US01 | Cadastrar e Logar na Conta | Eu como usuário, devo ser capaz de me cadastrar e logar na plataforma, para que eu possa utilizar das funções do software e ter a segurança de meus dados.
US02 | Cadastrar Empresa-Unidade | Eu como usuário, devo ser capaz de registrar uma nova Unidade/Empresa, para que os dados obtidos pelo sistema RISO seja acessada apenas pelos associados à esta Unidade/Empresa.
US03 | Adicionar Colaboradores | Eu como Administrador da Unidade/Empresa, devo ser capaz de adicionar colaboradores a partir de um código aleatório gerado no ato da criação da Unidade/Empresa, para que mais pessoas possam acompanhar os dados obtido pelo sistema RISO.
US04 | Editar Colaboradores | Eu como Usuário administrador da Unidade/Empresa, devo ser capaz de atribuir os dados profissionais internos de qualquer colaborador associado à minha Unidade/Empresa, para que eu organize melhor as atribuições da equipe dentro da plataforma.
US05 | Gerenciar Privilégios | Eu como usuário administrador, devo ser capaz de adicionar e remover usuários privilegiados de minha Unidade/Empresa, isto é, de gerenciar sub-administradores, para que outros usuários possam me dar assistência no gerenciamento da Unidade/Empresa além de mim.
US06 | Reconhecer Sorrisos | O sistema deve ser capaz de capturar sorrisos de uma pessoa a partir da visão computacional fornecida por uma câmera ou webcam, para que o reconhecimento de sorrisos aconteça.
US07 | Contabilizar Sorrisos | O sistema, deve ser capaz de contabilizar a quantidade de sorrisos totais da clientela no dia, e por pessoa no dia, para que os dados possam ficar organizados posteriormente.
US08 | Visualizar filtro de gráfico de sorrisos por dia, semana e mês | Eu como usuário comum e administrador, devo ser capaz de visualizar um gráfico da quantidade total de sorrisos por dia, semana ou mês, para que eu tenha visão clara e facilidade dos dados.
US09 | Visualizar gráfico de média de sorrisos por pessoa por dia, semana e mês | Eu como usuário e usuário administrador, devo ser capaz de visualizar a quantidade média de sorrisos por pessoa filtrada por dia, semana ou mês, para que eu possa consultar os dados facilmente de forma clara e de forma mais clara.
US10 | Visualizar dados de taxas gerais de risos | Eu como usuário e usuário administrador, devo ser capaz de visualizar uma taxa em porcentagem que exibe a quantidade de pessoas capturadas para o levantamentos dos dados no dia e quantas dessas riram, para que eu obtenha dados aprofundados da taxa de sorrisos.
US11 | Integrar em uma câmera única no Caixa | O Sistema, deve ser capaz de capturar e realizar o reconhecimento de sorrisos com uma câmera especializada do cliente, para que o sistema RISO seja devidamente aplicado ao contexto do cliente.

## 2. Requisitos Não Funcionais
Requisitos não funcionais são critérios que especificam a operação de um sistema, diferentemente dos requisitos funcionais, que descrevem o comportamento e as funcionalidades do sistema. Eles incluem aspectos como desempenho, segurança, usabilidade, confiabilidade, e conformidade com padrões. Esses requisitos são cruciais para garantir que o sistema não apenas funcione conforme esperado, mas também atenda a determinadas qualidades e restrições que são importantes para os usuários e outras partes interessadas.

Nº | Categoria | Descrição 
-- | --------- | ---------
RQNF01 | Design | O sistema deverá garantir que o design adotado promova uma facilidade na curva de aprendizagem de uso da plataforma.
RQNF02 | Portabilidade | O sistema deverá ser um Web.
RQNF03 | Interface | O sistema deverá ser utilizável em qualquer dispositivo com acesso à internet, independente do tamanho do visor. Isto é, ser responsivo.
RQNF04 | Seguraça | O sistema deverá ter páginas protegidas com autenticação do usuário.
RQNF05 | Segurança | O sistema deverá criptografar dados sensíveis dos usuários.
RQNF06 | Desenpenho | O sistema deverá garantir que as requisições ao banco de dados não durem mais que 1 segundo.


## 4. Backlog
O backlog é uma lista prioritária de tarefas, funcionalidades, e requisitos que devem ser implementados em um projeto de desenvolvimento de software. Ele é essencialmente um repositório dinâmico e evolutivo que reflete tudo o que é necessário para melhorar o produto. No contexto do desenvolvimento ágil, o backlog é frequentemente revisitado e reorganizado para assegurar que o trabalho mais valioso seja realizado primeiro. Esse processo contínuo de refinamento ajuda a garantir que a equipe esteja sempre alinhada com as prioridades e objetivos do projeto.

| Épico | User Story | Objetivo |
|-------|------------|----------|
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
| [EP04]: Gerenciamento de Conta           | US02       | Cadastrar Empresa-Unidade   

## 4. Referências Bibliográficas:
> Cursospm3. Glossário: User Story. 2024. Disponível em: <https://www.cursospm3.com.br/glossario/user-story/>.

> PRESSMAN, Roger S. Engenharia de Software. 8. ed. Porto Alegre: AMGH, 2016.

> SCHWABER, Ken; SUTHERLAND, Jeff. The Scrum Guide: The Definitive Guide to Scrum: The Rules of the Game. 2020. Disponível em: <https://www.scrumguides.org/scrum-guide.html>.

## 5. Histórico de Revisão:
Data | Versão | Descrição | Autor | Revisores 
---- | ------ | --------- | ----- | ---------
31/07/24 | 1.0 | Criação do documento | Marco Tulio, Joao Pedro | Daniel Rodrigues
01/08/24 | 2.0 | Adição do Requisito Não Funcional | Daniel Rodrigues | Joao Pedro