# 3. PROCESSO DE DESENVOLVIMENTO DE SOFTWARE

## 3.1 Metodologia

Baseado na proposta de Gupta (2019), foi respondido um conjunto de questões distintas sobre determinados tópicos para definir a abordagem que melhor se encaixa ao projeto e time. Tópicos norteadores:

1. Requisitos
2. Equipe de Desenvolvimento
3. Usuários
4. Tipo de Projeto e Riscos Associados

### 3.1.1 Requisitos

<center>

![Gupta](assets/gupta_requisitos.png)

Figura 3 - Modelo Gupta para requisitos (fonte: Gupta, 2019)

</center>

Pergunta | Nosso contexto
-------- | --------------- 
Os requisitos são fáceis de entender e definir? | Sim.
Nós mudamos os requisitos com bastante frequência? | Não.
Nós podemos definir os requisitos ao início de cada ciclo? | Sim.
Os requisitos estão indicando um sistema complexo para se construir? | Sim.

Conclusão: Em termos de requisitos, temos o indicativo para o RAD e Desenvolvimento Evolutivo.

### 3.1.2 Equipe de Desenvolvimento
<center>

![Gupta](assets/gupta_equipe_desenvolvimento.png)

Figura 4 - Modelo Gupta para equipe de desenvolvimento (fonte: Gupta, 2019)

</center>

Pergunta | Nosso contexto
-------- | --------------
Pouca experiência em projetos similares? | Sim.
Pouco conhecimento de domínio (novato na tecnologia)? | Não.
Pouca experiência com as ferramentas que serão usadas? | Sim.
Disponibilidade para treinamento, se necessário | Sim. 

Conclusão: Em termos de equipe de desenvolvimento, temos o indicativo para o Spiral e o RAD.

### 3.1.3 Usuários

<center>

![Gupta](assets/gupta_usuario.png)

Figura 5 - Modelo Gupta para usuários (fonte: Gupta, 2019)

</center>

Pergunta | Nosso contexto 
-------- | -------------- 
Usuário está envolvido em todas as fases? | Sim. 
Participação limitada do usuário? | Não.
Usuário não tem experiência anterior em participação em projetos similares? | Não.
Usuário são especialistas no domínio do problema? | Sim.

Conclusão: Em termos de usuário, temos o indicativo para o RAD e Protótipo

### 3.1.4 Tipo de Projeto e Risco Associado

<center>

![Gupta](assets/gupta_projeto_risco.png)

Figura 6 - Modelo Gupta para tipo de projeto e risco associado (fonte: Gupta, 2019)

</center>

Pergunta | Nosso contexto
-------- | --------------
O projeto é melhoria de um sistema existente? | Não.
O financiamento está estável para o projeto? | Sim.
Requisitos de alta confiabilidade? | Não.
Cronograma do projeto é apertado? | Sim.
Uso de componentes reutilizáveis? | Sim.
Os recursos (Tempo, dinheiro, pessoas etc) estão escassos? | Sim.   

Conclusão: Em termos de Tipo de Projeto e Risco Associado, temos o indicativo para o Protótipo e RAD

### 3.1.5 Escolha do Processo de Desenvolvimento de Software

<center>

![RAD](assets/rapid_application_development.png)

Figura 7 - Procedimento do RAD (fonte: MARSICANO, 2023)

</center>

Considerando o foco principal no nosso usuário, a pouca experiência dos membros da equipe e o risco associado, além do cronograma da disciplina, entendemos que devemos utilizar uma abordagem híbrida, com uma abordagem dirigida a plano, com o método cascata, na fase de requisitos e com as fases seguintes, utilizando o método ágil de desenvolvimento RAD (Rapid Application Development) (SWEBOK, p. 170).

## 3.2 Ferramentas

Para a execução dessa metodologia, escolheu-se as seguintes Ferramentas de organização e controle da equipe:

- **Gerenciamento de tarefas**: GitHub Projects
- **Comunicação: WhatsApp e Microsoft Teams**
- **Versionamento**: GitHub
- **Interface de Desenvolvimento**: VSCode
- **Desenvolvimento de ideias e *frameworks* da disciplina**: Mural
- **Prototipação**: Figma

| Ferramenta | Finalidade |
| :-: | :-: | 
| ![Github](./assets/logo_github.png){width="25%"} |  Versionamento e Gerenciamento de tarefas |
| ![Microsoft Teams](./assets/logo-microsoft-teams.png){width="25%"} | Comunicação |
| ![WhatsApp](./assets/whats_app.png){width="25%"} | Comunicação |
| ![Visual Studio Code](./assets/vscode.png){width="20%"} | Interface de Desenvolvimento |
| ![Mural](./assets/mural.png){width="25%"} | Desenvolvimento de ideias e *frameworks* da disciplina |
| ![Figma](./assets/figmaLogo.png){width="25%"} | Prototipação |

## 3.3 Processos e Procedimentos

### 3.3.1 Escolhas do Processo de Engenharia de Requisitos

<center>

![ER](assets/er_facetas_ireb.png)

Figura 8 - Faceta da engenharia de requisitos (fonte: MARSICANO, 2023)

</center>

Com base nas Facetas do Processo de ER (IREB, 2022), foi definido que é um processo de ER orientado a produto, visto que: 

1. Alvo é o mercado; 
2. O propósito é exploratório; 
3. Tempo é interativo.

### 3.3.2 Atividades do Processo de Engenharia de Requisitos

<center>

![ER](assets/er_atividades_marsicano.png)

Figura 9 - Atividades da ER (fonte: MARSICANO, 2023).

</center>

Assim, incluímos as atividades de ER (MARSICANO, 2023) dentro dos procedimentos do processo de desenvolvimento de software RAD, pontuado no tópico 3.

### 3.3.3 ATIVIDADES RAD

A metodologia *Rapid Application Development*, também chamado de RAD é um processo incremental na qual desenvolvemos as atividades descritas na figura 10. A metodologia envolve desenvolver módulos que apresentam as fases de análise, design, codificação e testagem. Esses módulos são desenvolvidos por equipes específicas, de forma paralela, e isso é desenvolvido a partir dos requisitos que foram elicitados e modularizados na Ciclo. Assim, várias técnicas e ferramentas de desenvolvimento são utilizadas para o desenvolvimento desses módulos. A ideia é que ao integrar esses módulos, o produto final é testado e entregado.

Nosso grupo optou por utilizar um método híbrido que envolve o uso de cascata nos requisitos iniciais que elicitamos, enquanto que nas fases posteriores utilizaremos de abordagens ágeis e o processo do RAD como um todo. Com isso, vamos separar nossos 5 membros em dois times que vão estar trabalhando paralelamente em módulos diferentes.

<center>

![RAD](assets/RAD-model.png)

Figura 10 - Modelo de trabalho do RAD (fonte: *Software Engineering | Rapid application development model*, 2023)

</center>

#### 3.3.3.1	REQUISITOS E PLANEJAMENTO

##### 3.3.3.1.1 DESCOBERTA E ELICITAÇÃO DE REQUISITOS

Fase focada em encontrar, extrair, obter ou provocar uma resposta, reação, informação dos usuários para construção dos requisitos (MARSICANO, 2023).

Identificador | Atividade | Método | Ferramenta | Entrega
------------- | --------- | ------ | ---------- | -------
ELI-01 | Elicitação e Descoberta | Diagrama de causa e 5 porquês | Mural | Backlog de requisitos não validado

##### 3.3.3.1.2 ANALISE E CONSENSO DE REQUISITOS

Fase focada em analisar os requisitos brutos e conciliar os interesses dos _stakeholders_ (MARSICANO, 2023).

Identificador | Atividade | Método | Ferramenta | Entrega
------------- | --------- | ------ | ---------- | -------
AA-01 | Análise e Consenso | Análise de Viabilidade | Teams | Backlog de requisitos validados

##### 3.3.3.1.3 DECLARAÇÃO DE REQUISITOS

Fase focada em comunicar os requisitos para os interessados em diferentes níveis de glanularidade e dividindo entre funcionais e não funcionais (MARSICANO, 2023).

Identificador | Atividade | Método | Ferramenta | Entrega
------------- | --------- | ------ | ---------- | -------
DEC-01 | Declaração | Temas, Epicos e User Stories | Mural | User Stories representadas

##### 3.3.3.1.4 VERIFICAÇÃO E VALIDAÇÃO DE REQUISITOS

Fase focada em manter os requisitos do produto estruturados, organizados e atualizados (MARSICANO, 2023).

Identificador | Atividade | Método | Ferramenta | Entrega
------------- | --------- | ------ | ---------- | -------
GEREN-01 | Verificação e Validação | Feedback | Reunião | User Stories validadas

##### 3.3.3.1.5 GERENCIAMENTO DE REQUISITOS (ORGANIZAÇÃO E ATUALIZAÇÃO)

Fase focada em manter os requisitos do produto estruturados, organizados e atualizados (MARSICANO, 2023).

Identificador | Atividade | Método | Ferramenta | Entrega
------------- | --------- | ------ | ---------- | -------
GEREN-01 | Organização e Atualização | MoSCoW | Mural e Excel | Definição de prioridades (MVP1 e MVP2)

#### 3.3.3.2 PROTOTIPAÇÃO E FEEDBACK

##### 3.3.3.2.1 REPRESENTAÇÃO DE REQUISITOS (PROTÓTIPO)

Apresentação dos requisitos em modelos e/ou visualizações do produto (MARSICANO, 2023).

Identificador | Atividade | Método | Ferramenta | Entrega
------------- | --------- | ------ | ---------- | -------
PRO-01 | Construção de prototipo de Baixa Fidelidade | Prototipagem | Figma | Prototipo de baixa fidelidade
PRO-02 | Construção de prototipo de Média Fidelidade | Prototipagem | Figma | Prototipo de média fidelidade
PRO-03 | Construção de prototipo de Alta Fidelidade | Prototipagem | Figma | Prototipo de alta fidelidade

##### 3.3.3.2.2    VALIDAÇÃO E VERIFICAÇÃO DE REQUISITOS (PROTÓTIPO)

Validação é confirmar ou não se os requisitos definem a solução correta conforme consensuado entre os _stakeholders_ (MARSICANO, 2023). Enquanto verificação é garantir se os requisitos foram ou não executados na maneira correta (MARSICANO, 2023). Além disso, definir o preparado (DoR) e o pronto (DoD) também faz parte dessa fase.

Identificador | Atividade | Método | Ferramenta | Entrega
------------- | --------- | ------ | ---------- | -------
VAP-01 | Coleta de Feedbacks sobre os protótipos | Feedback | Teams e Figma | Relação de feedbacks

#### 3.3.3.3 CONSTRUÇÃO

##### 3.3.3.3.1 CONSTRUÇÃO MÓDULOS

Identificador | Atividade | Método | Ferramenta | Entrega
------------- | --------- | ------ | ---------- | -------
CM-01 | Desenvolvimento da Aplicação | PairProgramming | VSCODE, GitHub, Navegador | Módulo Unitário

##### 3.3.3.3.1 VALIDAÇÃO MÓDULOS

Identificador | Atividade | Método | Ferramenta | Entrega
------------- | --------- | ------ | ---------- | -------
VAM-01 | Atividade de Validação dos Módulos | Feedback | Teams e Navegador | Relação de Feedbacks

#### 3.3.3.4 CUTOVER

##### 3.3.3.4.1 INTEGRAÇÃO MÓDULOS

Identificador | Atividade | Método | Ferramenta | Entrega
------------- | --------- | ------ | ---------- | -------
IT-01 | Integração de Módulos | União de Módulos | GitHub, VSCODE e Navegador | MVP

##### 3.3.3.4.2 TESTE PRODUTO

Identificador | Atividade | Método | Ferramenta | Entrega
------------- | --------- | ------ | ---------- | -------
TP-01 | Testagem do Produto | Teste Manual, Teste de Módulo, Teste de Integração, Teste de Sistema, Teste de Aceitação | VSCODE, GitHub | Relatório de Testes

## 3.4 Arquitetura do Projeto

![Arquitetura](assets/arquitetura.jpg)
