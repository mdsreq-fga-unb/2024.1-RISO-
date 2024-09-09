# Definition of Done & Definition of Ready

### **1. [US01] Cadastrar e Logar na Conta**

Eu como usuário, devo ser capaz de me cadastrar e logar na plataforma, para que eu possa utilizar das funções do software e ter a segurança de meus dados.

#### **1.1. Definition of Ready da User Story:**
- [x] User Story foi escrita utilizando o padrão: "Eu como _[Agente]_, _[Ação]_. para que _[Objetivo]_".
- [x] A User Story possui possuir ao menos um critério de aceite, que precisam estar claros entre os desenvolvedores e Stakeholders;
- [x] A User Story foi estimado pelo pelo time de desenvolvimento.
- [x] O ambiente de desenvolvimento está estável.
- [x] Os desenvolvedores possui acesso às ferramentas necessárias.
- [x] Conexão com o banco de dados estável para realizar requisições e receber respostas.
- [x] Ambiente de desenvolvimento e produção com as variáveis de configuração definidas.

#### **1.2. Definition of Done da User Story:**

- [x] Os dados de Nome, Email e Senha precisam ser salvos no ato do cadastro;
- [x] É possível entrar na plataforma, após o cadastro, no login apenas com Email e Senha;
- [x] A senha deve ser criptografada no código para que seja assegurada a segurança dos dados do usuário.
- [x] É possível alterar os seguintes dados posteriormente: Nome e Senha.
- [x] É possível excluir minha conta.

### **2. [US02] Cadastrar Empresa-Unidade**

Eu como usuário, devo ser capaz de registrar uma nova Unidade/Empresa, para que os dados obtidos pelo sistema RISO seja acessada apenas pelos associados à esta Unidade/Empresa.

#### **2.1. Definition of Ready da User Story:**
- [x] User Story foi escrita utilizando o padrão: "Eu como _[Agente]_, _[Ação]_. para que _[Objetivo]_".
- [x] A User Story possui possuir ao menos um critério de aceite, que precisam estar claros entre os desenvolvedores e Stakeholders;
- [x] A User Story foi estimado pelo pelo time de desenvolvimento.
- [x] O ambiente de desenvolvimento está estável.
- [x] Os desenvolvedores possui acesso às ferramentas necessárias.
- [x] Desenvolvedores com acesso às ferramentas necessárias.
- [x] Conexão com o banco de dados estável para realizar requisições e receber respostas.
- [x] Ambiente de desenvolvimento e produção com as variáveis de configuração definidas.

#### **2..2. Definition of Done da User Story:*

- [x] Os dados de minha Unidade/Empresa, tal como: Nome da Unidade/Empresa, Número Aproximado de Funcionários, CNPJ, Estado, Rua, Complemento e Número, devem ser salvos no sistema;
- [x] Após a criação da Unidade, preciso automaticamente me associar à esta unidade;
- [x] É possível alterar os dados como Nome da Unidade/Empresa e Número de Funcionários posteriormente.
- [x] É possível excluir uma Unidade/Empresa criada anteriormente.

### **3. [US03] Adicionar Colaboradores**

Eu como Administrador da Unidade/Empresa, devo ser capaz de adicionar colaboradores a partir de um código aleatório gerado no ato da criação da Unidade/Empresa, para que mais pessoas possam acompanhar os dados obtido pelo sistema RISO.

#### **3.1. Definition of Ready da User Story:**
- [x] User Story foi escrita utilizando o padrão: "Eu como _[Agente]_, _[Ação]_. para que _[Objetivo]_".
- [x] A User Story possui possuir ao menos um critério de aceite, que precisam estar claros entre os desenvolvedores e Stakeholders;
- [x] A User Story foi estimado pelo pelo time de desenvolvimento.
- [x] O ambiente de desenvolvimento está estável.
- [x] Os desenvolvedores possui acesso às ferramentas necessárias.
- [x] Conexão com o banco de dados estável para realizar requisições e receber respostas.
- [x] Estrutura do banco de dados configurada para associar usuários às Unidades/Empresas.

#### **3.2. Definition of Done da User Story:**

- [x] Um código aleatório de 5 dígitos deve ser gerado apenas 1 vez no ato da criação da Unidade/Empresa;
- [x] Um usuário comum deve ser capaz de entrar na Unidade/Empresa após digitar um código existente;
- [x] Um usuário não deve entrar em nenhuma Unidade/Empresa quando o código não existe.

### **4. [US04] Editar Colaboradores**

Eu como Usuário administrador da Unidade/Empresa, devo ser capaz de atribuir os dados profissionais internos de qualquer colaborador associado à minha Unidade/Empresa, para que eu organize melhor as atribuições da equipe dentro da plataforma.

#### **4.1. Definition of Ready da User Story:**
- [x] User Story foi escrita utilizando o padrão: "Eu como _[Agente]_, _[Ação]_. para que _[Objetivo]_".
- [x] A User Story possui possuir ao menos um critério de aceite, que precisam estar claros entre os desenvolvedores e Stakeholders;
- [x] A User Story foi estimado pelo pelo time de desenvolvimento.
- [x] O ambiente de desenvolvimento está estável.
- [x] Os desenvolvedores possui acesso às ferramentas necessárias.
- [x] Conexão com o banco de dados estável para realizar requisições e receber respostas.

#### **4.2. Definition of Done da User Story:**

- [x] É possível visualizar uma lista dos colaboradores de minha Unidade/Empresa;
- [x] Apenas os Administradores da Unidade/Empresa consegue editar os dados empresariais internos;

### **5. [US05] Gerenciar Privilégios**

Eu como usuário administrador, devo ser capaz de adicionar e remover usuários privilegiados de minha Unidade/Empresa, isto é, de gerenciar sub-administradores, para que outros usuários possam me dar assistência no gerenciamento da Unidade/Empresa além de mim.

#### **5.1. Definition of Ready da User Story:**
- [ ] User Story foi escrita utilizando o padrão: "Eu como _[Agente]_, _[Ação]_. para que _[Objetivo]_".
- [ ] A User Story possui possuir ao menos um critério de aceite, que precisam estar claros entre os desenvolvedores e Stakeholders;
- [ ] A User Story foi estimado pelo pelo time de desenvolvimento.
- [ ] O ambiente de desenvolvimento está estável.
- [ ] Os desenvolvedores possui acesso às ferramentas necessárias.
- [ ] Conexão com o banco de dados estável para realizar requisições e receber respostas.


#### **5.2. Definition of Done da User Story:**

- [ ] É possível trocar um usuário comum para usuário sub-administrador de minha Unidade/Empresa, dando-lhe quase os mesmos privilégios de um administrador;
- [ ] É possível remover o privilégio e título de um usuário sob-administrador para apenas usuário comum;

### **6. [US06] Reconhecer Sorrisos**

O sistema deve ser capaz de capturar sorrisos de uma pessoa a partir da visão computacional fornecida por uma câmera ou webcam, para que o reconhecimento de sorrisos aconteça.

#### **6.1. Definition of Ready da User Story:**
- [ ] User Story foi escrita utilizando o padrão: "Eu como _[Agente]_, _[Ação]_. para que _[Objetivo]_".
- [ ] A User Story possui possuir ao menos um critério de aceite, que precisam estar claros entre os desenvolvedores e Stakeholders;
- [ ] A User Story foi estimado pelo pelo time de desenvolvimento.
- [ ] O ambiente de desenvolvimento está estável.
- [ ] Os desenvolvedores possui acesso às ferramentas necessárias.
- [ ] O ambiente de Desenvolvimento possui o serviço de Front-End configurado com React.Js.
- [ ] O ambiente de Desenvolvimento possui o serviço de Back-end configurado com Node, Express e Mongoose.

#### **6.2. Definition of Done da User Story:**
- [ ] O sistema deverá reconhecer o sorriso de uma pessoa capturada na câmera;
- [ ] O sistema deverá ter precisão de 80% de acerto na identificação de sorrisos entre 10 testes, dentre elas, 7 deverão ser sorrindo e as outras 3 deverá apresentar outra emoção.

### **7. [US07] Contabilizar Sorrisos**

O sistema, deve ser capaz de contabilizar a quantidade de sorrisos totais da clientela no dia, e por pessoa no dia, para que os dados possam ficar organizador posteriormente.

#### **7.1. Definition of Ready da User Story:**
- [ ] User Story foi escrita utilizando o padrão: "Eu como _[Agente]_, _[Ação]_. para que _[Objetivo]_".
- [ ] A User Story possui possuir ao menos um critério de aceite, que precisam estar claros entre os desenvolvedores e Stakeholders;
- [ ] A User Story foi estimado pelo pelo time de desenvolvimento.
- [ ] O ambiente de desenvolvimento está estável.
- [ ] Os desenvolvedores possui acesso às ferramentas necessárias.
- [ ] O software é capaz de reconhecer rostos e seus sorrisos.

#### **7.2. Definition of Done da User Story:**

- [ ] O sistema deve contar + 1 para cada sorriso identificado pelo RISO;
- [ ] O sistema deve manter a contagem de sorrisos para a mesma pessoa, isto é, enquanto um usuário estiver sendo vigiado pelo RISO;
- [ ] Mesmo quando o usuário não der 1 sorriso, o sistema deverá registrar o usuário e informar 0 sorrisos àquela pessoa, iniciando outro logo em seguida.

### **8. [US08] Visualizar filtro de gráfico de sorrisos por dia, semana e mês**

Eu como usuário comum e administrador, devo ser capaz de visualizar um gráfico da quantidade total de sorrisos por dia, semana ou mês, para que eu tenha visão clara e facilitada dos dados.

#### **8.1. Definition of Ready da User Story:**
- [ ] User Story foi escrita utilizando o padrão: "Eu como _[Agente]_, _[Ação]_. para que _[Objetivo]_".
- [ ] A User Story possui possuir ao menos um critério de aceite, que precisam estar claros entre os desenvolvedores e Stakeholders;
- [ ] A User Story foi estimado pelo pelo time de desenvolvimento.
- [ ] O ambiente de desenvolvimento está estável.
- [ ] Os desenvolvedores possui acesso às ferramentas necessárias.
- [ ] Conexão com o banco de dados estável para realizar requisições e receber respostas.

#### **8.2. Definition of Done da User Story:**

- [ ] O gráfico deverá ser em barras com a coordenada Y representando a quantidade de sorrisos e o X representando os dias da semana;
- [ ] O gráfico deverá ter um filtrador configurado para gerir a exibição dos dados de acordo com a opção selecionada: Diário, Semanal ou Mensal.
- [ ] O gráfico deverá fornecer a quantidade TOTAL de sorrisos pelo filtro selecionado;
- [ ] Os dados exibidos no gráfico deverão ter 100% de fidelidade com os dados do banco.

### **9. [US09] Visualizar gráfico de média de sorrisos por pessoa por dia, semana e mês**

Eu como usuário e usuário administrador, devo ser capaz de visualizar a quantidade média de sorrisos por pessoa filtrada por dia, semana ou por mês, para que eu possa consultar os dados facilmente e de forma mais clara.

#### **9.1. Definition of Ready da User Story:**
- [ ] User Story foi escrita utilizando o padrão: "Eu como _[Agente]_, _[Ação]_. para que _[Objetivo]_".
- [ ] A User Story possui possuir ao menos um critério de aceite, que precisam estar claros entre os desenvolvedores e Stakeholders;
- [ ] A User Story foi estimado pelo pelo time de desenvolvimento.
- [ ] O ambiente de desenvolvimento está estável.
- [ ] Os desenvolvedores possui acesso às ferramentas necessárias.
- [ ] Conexão com o banco de dados estável para realizar requisições e receber respostas.

#### **9.2. Definition of Done da User Story:**

- [ ] Um gráfico de barras é exibido na interface com o eixo Y representando a quantidade de sorrisos médios e o eixo X representando os dias da semana ou o ano;
- [ ] Um filtro deverá estar configurado junto ao gráfico para alternar ao modo diário, semanal ou mensal;
- [ ] O gráfico deverá mostrar a quantidade MÉDIA de sorrisos pelo filtro selecionado.
- [ ] Os dados do gráfico devem ter 100% de fidelidade com os dados do banco.

### **10. [US010] Visualizar dados de taxas gerais de risos**

Eu como usuário e usuário administrador, devo ser capaz de visualizar uma taxa em porcentagem que exibe a quantidade de pessoas capturadas para o levantamento dos dados no dia e quantas dessas riram, para que eu obtenha dados aprofundados da taxa de sorrisos.

#### **10.1. Definition of Ready da User Story:**
- [ ] User Story foi escrita utilizando o padrão: "Eu como _[Agente]_, _[Ação]_. para que _[Objetivo]_".
- [ ] A User Story possui possuir ao menos um critério de aceite, que precisam estar claros entre os desenvolvedores e Stakeholders;
- [ ] A User Story foi estimado pelo pelo time de desenvolvimento.
- [ ] O ambiente de desenvolvimento está estável.
- [ ] Os desenvolvedores possui acesso às ferramentas necessárias.
- [ ] Conexão com o banco de dados estável para realizar requisições e receber respostas.

#### **10.2. Definition of Done da User Story:**

- [ ] A interface deverá exibir um letreiro com a quantidade de rostos totais identificados no dia;
- [ ] A interface deverá exibir a quantidade de pessoas que riram (desconsiderando todo qualquer outro riso quando uma mesma pessoa já riu).
- [ ] A interface deverá exibir a quantidade de pessoas que não riram.
- [ ] A interface deverá exibir um percentual de [(Pessoas que Riram / Pessoas Totais Identificadas) * 100], cujo define a taxa de risos do dia.

### **11. [US011] Integrar em uma câmera Única no Caixa**

O Sistema, deve ser capaz de capturar e realizar o reconhecimento de sorrisos com uma câmera especializada do cliente, para que o sistema RISO seja devidamente aplicado ao contexto do cliente.

#### **11.1. Definition of Ready da User Story:**
- [ ] User Story foi escrita utilizando o padrão: "Eu como _[Agente]_, _[Ação]_. para que _[Objetivo]_".
- [ ] A User Story possui possuir ao menos um critério de aceite, que precisam estar claros entre os desenvolvedores e Stakeholders;
- [ ] A User Story foi estimado pelo pelo time de desenvolvimento.
- [ ] O ambiente de desenvolvimento está estável.
- [ ] Os desenvolvedores possui acesso às ferramentas necessárias.

#### **11.2. Definition of Done da User Story:**

- [ ] O reconhecimento de sorrisos identifica corretamente no hardware do cliente;
- [ ] As US #17 e #18 não foram comprometidas por essa funcionalidade;
- [ ] O reconhecimento possui 80% de precisão dentre 10 testes realizados com 6 Tentativas Sorrindo e 4 outras tentativas apresentando outra emoção no hardware do cliente.

## Histórico de Revisão
Data | Versão | Descrição | Autor | Revisores 
---- | ------ | --------- | ----- | ---------
08/09/24 | 1.0 | Atualizacao do documento | Daniel Rodrigues e Jésus Gabriel| Jésus Gabriel