# Backlog do Produto

## 1. Metodologia Ágil SAFe - Scaled Agile Framework
A Metodologia SAFe (Scaled Agile Framework) é um framework amplamente utilizado para escalonamento de metodologias ágeis em grandes organizações, facilitando a coordenação de várias equipes em projetos complexos. SAFe combina práticas ágeis, Lean e DevOps para entregar valor contínuo ao cliente, proporcionando alinhamento, colaboração e entrega de resultados de forma eficaz entre os níveis de equipe, programa e portfólio. A metodologia oferece uma estrutura para planejar, executar e monitorar o progresso das atividades, promovendo uma abordagem iterativa e incremental. Entre seus principais componentes, destacam-se o backlog do produto, o Program Increment (PI) Planning, e as cerimônias de sincronização, como as demos de sistema e as retrospectivas, que permitem ajustes contínuos no desenvolvimento.

Além de alinhar as equipes em torno de um objetivo comum, SAFe promove a tomada de decisões descentralizadas, permitindo que as equipes tenham autonomia para solucionar problemas rapidamente, sem depender de constantes aprovações da gerência. O uso do backlog priorizado é central para o framework, possibilitando que as equipes direcionem seus esforços para as tarefas mais críticas primeiro, adaptando-se rapidamente às mudanças nas necessidades do cliente. A metodologia também enfatiza a importância de práticas de melhoria contínua e feedback rápido, criando um ambiente propício para inovações e ajustes rápidos.

## 2. Organização do Backlog no SAFe:
A metodologia SAFe organiza o backlog de forma hierárquica em quatro níveis principais: Épicos, Features, User Stories e Tasks. Essa estrutura facilita o gerenciamento de requisitos em diferentes camadas de complexidade, proporcionando clareza e foco na entrega de valor contínuo ao cliente.

### 2.1 Épicos:
Os Épicos são as iniciativas de maior escala dentro do backlog e representam grandes funcionalidades ou investimentos significativos que impactam a organização como um todo. Eles são identificados e priorizados no projeto e, muitas vezes, requerem planejamento estratégico e alocação de recursos ao longo de várias iterações ou Program Increments (PIs). Os Épicos são divididos em Features para facilitar a implementação e o monitoramento do progresso. Esse nível do backlog é essencial para alinhar os objetivos de longo prazo da organização com as atividades operacionais das equipes.

### 2.2 Features:
As Features são funcionalidades que entregam valor específico e imediato ao cliente ou aos usuários finais. Elas são menores que os Épicos e representam um conjunto coeso de User Stories que podem ser concluídas dentro de um ou dois Program Increments. Cada Feature possui critérios de aceitação claros que definem o que deve ser entregue para ser considerada "pronta". As Features ajudam a alinhar o trabalho das equipes com as necessidades do mercado ou com objetivos internos da empresa, traduzindo requisitos de alto nível em ações práticas e mensuráveis.

### 2.3 User's Storys:
As User Stories são descrições curtas e simples de uma funcionalidade do ponto de vista do usuário final. Elas ajudam as equipes a compreenderem exatamente o que é necessário entregar para atender às expectativas do cliente, mantendo o foco no valor do produto. As User Stories são escritas em um formato que descreve quem é o usuário, o que ele deseja alcançar e qual o benefício dessa funcionalidade, seguindo o modelo: "Como _[persona]_, eu quero _[ação]_ para _[benefício]_." Este nível do backlog permite a decomposição de Features em tarefas menores e facilita a comunicação com as partes interessadas.

### 2.4 Tasks (Crtérios de Aceitação):
As Tasks são as unidades mais granulares dentro do backlog e representam o trabalho necessário para completar uma User Story. Cada Task é orientada pelos critérios de aceitação da User Story, que especificam as condições que devem ser atendidas para que a história seja considerada concluída. As Tasks detalham as ações práticas que a equipe precisa realizar, ajudando a planejar as sprints e monitorar o progresso de forma precisa. Esse nível permite que as equipes definam claramente suas responsabilidades, colaborem de forma eficaz e mantenham o foco nos objetivos do sprint.

## 3. O Backlog do Sistema RISo:

### 3.1 Quanto aos Épicos:
No projeto RISo, utilizando a metodologia SAFe, foram definidos quatro épicos que guiarão o desenvolvimento do sistema. Esses épicos representam as iniciativas estratégicas que direcionam os esforços da equipe, garantindo a entrega de valor contínuo e alinhado aos objetivos do produto:

<center>

Código do Épico | Descrição
--------------- | --------- 
EP01 | Gerenciamento de Unidade/Empresa
EP02 | Gerenciamento de Conta
EP03 | Reconhecimento de Sorrisos
EP04 | Visualização de Dados

</center>

### 3.2 Quanto às Features:
As Features definidas para o projeto foram organizadas da seguinte forma:

<center>

Código da Feature | Código do Épico Associado | Descrição
----------------- | ------------------------- | ---------
F01 | EP01 | Reconhecimento e Contagem de Sorrisos
F02 | EP01 | Integração com Câmera Especializada
F03 | EP02 | Visualização de Gráficos de Sorrisos
F04 | EP02 | Exibição de Taxas de Sorrisos	
F05 | EP03 | Gestão de Colaboradores
F06 | EP04 |	Autenticação e Cadastro de Conta

</center>

### 3.3 Quanto às User's Story e Critérios de Aceitação:
Para a produção do sistema RISo, foram identificadas 11 User Stories, que descrevem as funcionalidades a serem desenvolvidas do ponto de vista dos usuários.

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

Com base nos Épicos já categorizados, o agrupamento das User Stories em Features, mantendo-as nos respectivos Épicos, ficou da seguinte forma:

Código do Épico	| Código da Feature |	Título da Feature	| Código das US Associadas
--------------- | ----------------- | ----------------- | -------------------------
[EP01]: Reconhecimento de Sorrisos	| F01 |	Reconhecimento e Contagem de Sorrisos |	US06, US07
[EP01]: Reconhecimento de Sorrisos	| F02 |	Integração com Câmera Especializada	| US11
[EP02]: Visualização de Dados	| F03 |	Visualização de Gráficos de Sorrisos | US08, US09
[EP02]: Visualização de Dados	| F04	| Exibição de Taxas de Sorrisos	| US10
[EP03]: Gerenciamento de Unidade/Empresa | F05 | Gestão de Colaboradores	| US03, US04, US05
[EP04]: Gerenciamento de Conta | F06	| Autenticação e Cadastro de Conta | US01, US02

## 4. Atualizações do Backlog:
#### ATT01 - Ciclo 6: Descontinuação da US05
- **Link da Issue no GitHub:** [Issue #16](https://github.com/mdsreq-fga-unb/2024.1-RISO-/issues/16)
- **Motivo da Mudança:** A US05 foi descontinuada devido ao impacto significativo que causou no cronograma do projeto. A complexidade da implementação e os atrasos associados comprometeram o andamento geral, levando à decisão de removê-la para realinhar o projeto ao cronograma estabelecido e garantir a entrega das demais funcionalidades dentro do prazo.

##### Backlog atualizado:

Código do Épico	| Código da Feature |	Título da Feature	| Código das US Associadas
--------------- | ----------------- | ----------------- | -------------------------
[EP01]: Reconhecimento de Sorrisos	| F01 |	Reconhecimento e Contagem de Sorrisos |	US06, US07
[EP01]: Reconhecimento de Sorrisos	| F02 |	Integração com Câmera Especializada	| US11
[EP02]: Visualização de Dados	| F03 |	Visualização de Gráficos de Sorrisos | US08, US09
[EP02]: Visualização de Dados	| F04	| Exibição de Taxas de Sorrisos	| US10
[EP03]: Gerenciamento de Unidade/Empresa | F05 | Gestão de Colaboradores	| US03, US04
[EP04]: Gerenciamento de Conta | F06	| Autenticação e Cadastro de Conta | US01, US02


## Bibliografia:
> SCALED AGILE INC. SAFe 6.0 Framework. Disponível em: https://scaledagileframework.com/.

## Histórico de Versão:
Data | Versão | Descrição | Autor | Revisores 
---- | ------ | --------- | ----- | ---------
04/09/24 | 1.0 | Criação do documento | Daniel Rodrigues | Jésus Gabriel