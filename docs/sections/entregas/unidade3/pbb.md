# Missão 3 - PBB

## 1. Product Backlog Building

**Product Backlog Building** (PBB) é um processo utilizado em metodologias de desenvolvimento de software ágeis, como o Scrum, para criar e manter uma lista de itens de trabalho (ou “backlog”) para um projeto de software. O PBB é realizado pelo Product Owner, que é responsável por definir e priorizar os itens do backlog, com base nas necessidades do negócio e dos usuários. Os itens do backlog incluem histórias do usuário, tarefas técnicas e bugs.

O PBB é um processo contínuo que começa antes do início do projeto e continua durante todo o ciclo de vida do projeto. Ele é usado para garantir que o projeto esteja sempre alinhado com as necessidades do negócio e dos usuários, e para garantir que o trabalho do time de desenvolvimento esteja sempre focado nas coisas mais importantes [(Medium, 2022)](https://medium.com/@jonesroberto/pbb-product-backlog-building-0012a7a5256a).

## 2. HealthNet

A HealthNet atua no setor de saúde e enfrenta diversos desafios em sua operação, especialmente relacionados à eficiência dos processos internos, à comunicação entre diferentes departamentos, e à satisfação dos pacientes. Esses problemas indicam uma necessidade urgente de revisão e otimização de suas práticas, bem como a implementação de soluções tecnológicas que possam integrar e melhorar a gestão das suas atividades.

Entre as principais necessidades identificadas para a HealthNet estão a melhoria da comunicação interna, a padronização dos processos operacionais, e a criação de um sistema centralizado que permita o acesso rápido e eficiente às informações dos pacientes. Além disso, há uma demanda por ferramentas que auxiliem na análise de dados, visando tanto a melhoria da tomada de decisões quanto a personalização do atendimento aos pacientes.

## 3. Construção do PBB

A montagem do Product Backlog utilizando o método PBB foi realizada pela plataforma Miro, software especializado em produção de mapas mentais, organização de notas e tarefas. O Mapa completo pode ser visualizada abaixo:

<center>
<iframe width="768" height="432" src="https://miro.com/app/live-embed/uXjVOrPCNdY=/?moveToViewport=-12086,-8567,14314,6911&embedId=413995676178" frameborder="0" scrolling="no" allow="fullscreen; clipboard-read; clipboard-write" allowfullscreen></iframe>
</center>

A atividade foi conduzida utilizando um template de PBB disponibilizado pela comunidade do Miro. O template possui áreas específicas para cada etapa da metodologia. Começando pela parte esquerda, são preenchidos os problemas e expectativas identificados. Em seguida, no espaço central mais amplo do template, é realizada a definição das personas.

Na próxima etapa, as features são detalhadas com base nas expectativas de cada persona. As features são apresentadas com os problemas ou necessidades relacionados à esquerda e os benefícios proporcionados por cada uma à direita.

Logo após, são listados os Itens do Product Backlog, que correspondem às Histórias de Usuários criadas a partir das Features descritas anteriormente. Por fim, a priorização das US’s foi realizada utilizando o método de priorização COORG. Nesse método, a priorização ocorre tanto vertical quanto horizontalmente, com a posição vertical indicando o grau de prioridade (quanto mais alto, maior) e a posição horizontal indicando a sequência lógica de execução.

## 4. Definição de Users Storys e BDDs:
A fase de Behavior Driven Development (BDD) no framework Product Backlog Building (PBB) é uma etapa crucial para alinhar o desenvolvimento do software com as expectativas dos usuários e do negócio. O BDD se concentra em descrever o comportamento do sistema por meio de cenários concretos que refletem as necessidades e funcionalidades desejadas. Essas descrições são feitas em uma linguagem comum e acessível, frequentemente utilizando a estrutura “Dado-Quando-Então” para detalhar as condições iniciais, as ações tomadas e os resultados esperados. A fase de BDD no PBB envolve a criação de cenários específicos para cada item do backlog.

Para a montagem das US's e BDDs, foi extraído cada PBI obtido pelo método PBB. Os BDDs serão organizados, aqui, por persona.

### 4.1. PERSONA 1 - RECEPCIONISTA
#### User Story:
- **Código:** US01. <br><br>
**Como** recepcionista da "HealthNet", <br>
**Eu quero** cadastrar os dados dos pacientes, <br>
**Para que** eu consiga registrar as informações de novos pacientes de forma rápida e sem atrasos, facilitando o atendimento inicial e o acesso a seus históricos médicos.
<br><br>

#### Critérios de Aceitação no Formato BDD:
##### Cenário 1: Cadastro de um novo paciente com todos os campos obrigatórios preenchidos corretamente
**Dado** que a recepcionista está na tela de cadastro de pacientes, <br>
**E** todos os campos obrigatórios (nome, data de nascimento, endereço, telefone, CPF, e histórico médico básico) estão visíveis, <br>
**Quando** ela preenche todos os campos corretamente e clica no botão "Cadastrar", <br>
**Então** o sistema deve salvar os dados do paciente, <br>
**E** exibir uma mensagem de confirmação "Paciente cadastrado com sucesso", <br>
**E** redirecionar para a página de listagem de pacientes. <br>

##### Cenário 2: Tentativa de cadastro com campos obrigatórios não preenchidos
**Dado** que a recepcionista está na tela de cadastro de pacientes, <br>
**Quando** ela tenta cadastrar o paciente sem preencher todos os campos obrigatórios (ex.: CPF ou data de nascimento em branco),<br>
**Então** o sistema deve impedir o cadastro,<br>
**E** exibir uma mensagem de erro indicando quais campos precisam ser preenchidos, como "Por favor, preencha o campo CPF".<br>

##### Cenário 3: Cadastro de paciente com CPF já registrado
**Dado** que um paciente com o mesmo CPF já está cadastrado no sistema,<br>
**E** a recepcionista está tentando cadastrar um novo paciente com o mesmo CPF,<br>
**Quando** ela clica no botão "Cadastrar",<br>
**Então** o sistema deve bloquear o cadastro,<br>
**E** exibir uma mensagem de erro "CPF já registrado. Verifique as informações do paciente".<br>

##### Cenário 4: Preenchimento automático de endereço pelo CEP
**Dado** que a recepcionista está na tela de cadastro de pacientes,<br>
**E** o campo de CEP está disponível,<br>
**Quando** ela insere um CEP válido no campo correspondente,<br>
**Então** o sistema deve preencher automaticamente os campos de endereço (rua, bairro, cidade e estado),<br>
**E** permitir que a recepcionista revise e edite essas informações, se necessário.<br>

##### Cenário 5: Validação dos dados inseridos no cadastro
**Dado** que a recepcionista está na tela de cadastro de pacientes,<br>
**E** inseriu os dados nos campos de forma incorreta, como nome com números ou telefone com formato inválido,<br>
**Quando** ela tenta prosseguir com o cadastro,<br>
**Então** o sistema deve exibir mensagens específicas de erro junto aos campos incorretos, como "Nome não pode conter números" ou "Formato de telefone inválido".<br>

##### Cenário 6: Cancelamento do cadastro durante o processo
**Dado** que a recepcionista está no meio do processo de cadastro de um paciente,<br>
**Quando** ela clica no botão "Cancelar",<br>
**Então** o sistema deve exibir uma mensagem de confirmação "Tem certeza que deseja cancelar o cadastro?",<br>
**E** se a recepcionista confirmar o cancelamento, o sistema deve descartar todos os dados inseridos,<br>
**E** retornar para a tela inicial de cadastro ou listagem de pacientes.

<hr>

#### User Story:
- **Código:** US02 <br><br>
**Como** recepcionista da "HealthNet",<br>
**Eu quero** atualizar os dados dos pacientes,<br>
**Para que** eu consiga corrigir ou adicionar informações nos cadastros de pacientes existentes, garantindo que os dados estejam sempre atualizados e corretos para melhor atendimento.
<br><br>

#### Critérios de Aceitação no Formato BDD:
##### Cenário 1: Atualização bem-sucedida de dados de um paciente
**Dado** que a recepcionista está na tela de edição dos dados de um paciente,<br>
**E** todos os campos editáveis estão visíveis e acessíveis,<br>
**Quando** ela altera as informações (ex.: endereço ou telefone) e clica no botão "Salvar Alterações",<br>
**Então** o sistema deve atualizar os dados do paciente no banco de dados,<br>
**E** exibir uma mensagem de confirmação "Dados do paciente atualizados com sucesso",<br>
**E** retornar à página de visualização dos dados atualizados do paciente.<br>

##### Cenário 2: Tentativa de atualização com campos obrigatórios deixados em branco
**Dado** que a recepcionista está na tela de atualização dos dados de um paciente,<br>
**Quando** ela apaga informações de um campo obrigatório (ex.: CPF ou data de nascimento) e tenta salvar as alterações,<br>
**Então** o sistema deve impedir a atualização,<br>
**E** exibir uma mensagem de erro "Preencha todos os campos obrigatórios".<br>

##### Cenário 3: Atualização de dados com um CPF que já pertence a outro paciente
**Dado** que a recepcionista está atualizando os dados de um paciente,<br>
**E** insere um CPF que já está registrado em outro cadastro no sistema,<br>
**Quando** ela tenta salvar as alterações,<br>
**Então** o sistema deve bloquear a atualização,<br>
**E** exibir uma mensagem de erro "CPF já cadastrado para outro paciente".<br>

##### Cenário 4: Validação de dados durante a atualização
**Dado** que a recepcionista está na tela de edição dos dados de um paciente,<br>
**E** ela insere informações incorretas, como um telefone com formato inválido ou nome com caracteres especiais,<br>
**Quando** ela clica no botão "Salvar Alterações",<br>
**Então** o sistema deve exibir mensagens específicas de erro junto aos campos incorretos, como "Formato de telefone inválido" ou "Nome não pode conter caracteres especiais".<br>

##### Cenário 5: Cancelamento da atualização dos dados
**Dado** que a recepcionista está atualizando os dados de um paciente,<br>
**Quando** ela clica no botão "Cancelar" antes de salvar as alterações,<br>
**Então** o sistema deve exibir uma mensagem de confirmação "Tem certeza que deseja cancelar as alterações?",<br>
**E** se a recepcionista confirmar o cancelamento, o sistema deve descartar todas as mudanças feitas,<br>
**E** retornar à tela de visualização dos dados originais do paciente sem alterações.<br>

##### Cenário 6: Atualização de dados com preenchimento automático de endereço pelo CEP
**Dado** que a recepcionista está na tela de atualização dos dados de um paciente,<br>
**E** o campo de CEP está disponível para edição,<br>
**Quando** ela insere um CEP válido no campo correspondente,<br>
**Então** o sistema deve preencher automaticamente os campos de endereço (rua, bairro, cidade e estado),<br>
**E** permitir que a recepcionista revise e edite essas informações, se necessário.<br>

<hr>

### 4.2. PERSONA 2 - MÉDICO CLÍNICO GERAL
#### User Story:
- **Código:** US03 <br><br>
**Como**  Médico Clínico Geral <br>
**Eu quero** adicionar prescrições médicas dos pacientes<br>
**Para que** os tratamentos recomendados estejam registrados no prontuário e possam ser facilmente acessados por outros profissionais de saúde, garantindo continuidade e segurança no tratamento.
<br><br>

#### Critérios de Aceitação no Formato BDD:
##### Cenário 1: Adicionar uma nova prescrição com sucesso
**Dado** que o médico está autenticado no sistema e visualizando o prontuário do paciente<br>
**E** há um botão ou campo para adicionar uma nova prescrição<br>
**Quando** o médico insere as informações da prescrição (nome do medicamento, dosagem, frequência, duração do tratamento, etc.)<br>
**E** clica no botão "Salvar"<br>
**Então** a prescrição é salva no sistema<br>
**E** aparece uma mensagem de confirmação "Prescrição adicionada com sucesso"<br>
**E** a prescrição fica visível no histórico de prescrições do paciente.<br>

##### Cenário 2: Validar campos obrigatórios ao adicionar uma prescrição
**Dado** que o médico está adicionando uma nova prescrição<br>
**Quando** o médico tenta salvar a prescrição sem preencher todos os campos obrigatórios (como nome do medicamento ou dosagem)<br>
**Então** o sistema deve exibir uma mensagem de erro "Preencha todos os campos obrigatórios"<br>
**E** o sistema não deve salvar a prescrição até que todas as informações necessárias sejam inseridas.<br>

##### Cenário 3: Alerta de interação medicamentosa ao adicionar uma nova prescrição
**Dado** que o médico está adicionando uma nova prescrição para um paciente com outras prescrições já registradas<br>
**E** o sistema tem acesso aos dados de interação medicamentosa<br>
**Quando** o médico insere uma prescrição que interage de forma adversa com os medicamentos atuais do paciente<br>
**Então** o sistema deve exibir um alerta "Cuidado: Interação medicamentosa detectada"<br>
**E** o médico deve poder revisar a prescrição antes de confirmar.<br>

##### Cenário 4: Visualizar histórico completo de prescrições ao adicionar uma nova prescrição
**Dado** que o médico está no prontuário do paciente<br>
**Quando** o médico clica para adicionar uma nova prescrição<br>
**Então** o sistema deve exibir o histórico completo de prescrições anteriores<br>
**E** deve mostrar alertas relevantes, como histórico de alergias ou medicamentos suspensos.<br>

##### Cenário 5: Editar uma prescrição antes de confirmar
**Dado** que o médico inseriu informações incorretas ou incompletas na nova prescrição<br>
**Quando** o médico clica em "Editar" antes de confirmar a prescrição<br>
**Então** o sistema deve permitir a edição dos campos preenchidos<br>
**E** o médico pode corrigir as informações antes de salvar definitivamente.<br>

<hr>

#### User Story:
- **Código:** US04 <br><br>
**Como** Médico Clínico Geral<br>
**Eu quero**  editar prescrições médicas dos pacientes<br>
**Para que** eu possa corrigir, ajustar dosagens, ou atualizar informações de tratamento conforme o quadro clínico do paciente evolui.
<br><br>

#### Critérios de Aceitação no Formato BDD:
##### Cenário 1: Editar uma prescrição com sucesso
**Dado** que o médico está autenticado no sistema e visualizando o prontuário do paciente<br>
**E** há uma prescrição médica existente no prontuário<br>
**Quando** o médico seleciona a prescrição que deseja editar<br>
**E** modifica os campos necessários (nome do medicamento, dosagem, frequência, etc.)<br>
**E** clica no botão "Salvar alterações"<br>
**Então** o sistema atualiza a prescrição com as novas informações<br>
**E** exibe uma mensagem de confirmação "Prescrição atualizada com sucesso".<br>

##### Cenário 2: Validar campos obrigatórios ao editar uma prescrição
**Dado** que o médico está editando uma prescrição existente<br>
**Quando** o médico tenta salvar a prescrição sem preencher todos os campos obrigatórios<br>
**Então** o sistema deve exibir uma mensagem de erro "Preencha todos os campos obrigatórios"<br>
**E** o sistema não deve salvar as alterações até que todas as informações necessárias sejam inseridas.<br>

##### Cenário 3: Exibir histórico de edições da prescrição
**Dado** que o médico está visualizando uma prescrição editada anteriormente<br>
**Quando** o médico seleciona a prescrição para visualizar ou editar<br>
**Então** o sistema deve exibir um histórico de edições, incluindo quem realizou a edição, quando, e quais alterações foram feitas<br>
**E** deve permitir que o médico veja as versões anteriores para referência.<br>

##### Cenário 4: Alerta de interação medicamentosa após edição
**Dado** que o médico está editando uma prescrição que interage com outra medicação do paciente<br>
**E** o sistema possui dados sobre interações medicamentosas<br>
**Quando** o médico salva a prescrição com mudanças que podem causar uma interação adversa<br>
**Então** o sistema exibe um alerta "Cuidado: Interação medicamentosa detectada"<br>
**E** o médico deve poder revisar as alterações antes de confirmar.<br>

##### Cenário 5: Reverter uma edição de prescrição
**Dado** que o médico realizou uma edição incorreta em uma prescrição<br>
**Quando** o médico clica na opção "Reverter para versão anterior"<br>
**Então** o sistema restaura a prescrição à versão selecionada<br>
**E** exibe uma mensagem de confirmação "Prescrição revertida com sucesso".<br>

<hr>

#### User Story:
- **Código:** US05 <br><br>
**Como** Médico Clínico Geral<br>
**Eu quero** visualizar os dados de histórico médico do paciente<br>
**Para que** eu possa ter uma visão completa das condições passadas, tratamentos, alergias e outros dados relevantes que possam impactar o atendimento atual.
<br><br>

#### Critérios de Aceitação no Formato BDD:
##### Cenário 1: Visualizar o histórico médico completo do paciente
**Dado** que o médico está autenticado no sistema e acessa o prontuário de um paciente<br>
**Quando** o médico clica na seção "Histórico Médico"<br>
**Então** o sistema exibe o histórico completo, incluindo diagnósticos passados, tratamentos realizados, cirurgias, alergias e histórico de medicações.<br>

##### Cenário 2: Filtrar o histórico médico por tipo de informação
**Dado** que o médico está visualizando o histórico médico do paciente<br>
**Quando** o médico utiliza os filtros de visualização (ex.: por data, tipo de consulta, medicação)<br>
**Então** o sistema exibe apenas as informações relevantes de acordo com o filtro selecionado<br>
**E** mantém os demais registros ocultos até que os filtros sejam removidos.<br>

##### Cenário 3: Acessar detalhes de consultas anteriores
**Dado** que o médico está visualizando o histórico médico<br>
**Quando** o médico clica em uma consulta específica no histórico<br>
**Então** o sistema exibe os detalhes dessa consulta, incluindo anotações médicas, resultados de exames, e tratamentos recomendados na época.<br>

##### Cenário 4: Visualizar histórico de prescrições e medicações
**Dado** que o médico está visualizando o histórico do paciente<br>
**Quando** o médico seleciona a aba "Prescrições e Medicações"<br>
**Então** o sistema exibe todas as prescrições passadas, com datas, dosagens e motivos para a prescrição<br>
**E** alerta sobre possíveis interações com medicações atuais do paciente.<br>

<hr>

### 4.3. PERSONA 3 - PACIENTE
#### User Story:
- **Código:** US06 <br><br>
**Como** Paciente<br>
**Eu quero** acessar os dados das minhas consultas<br>
**Para que** eu possa revisar informações importantes, como diagnósticos, prescrições e próximos agendamentos.
<br><br>

#### Critérios de Aceitação no Formato BDD:
##### Cenário 1: Acessar histórico de consultas
**Dado** que o paciente está autenticado no sistema<br>
**Quando** o paciente acessa a seção de histórico de consultas<br>
**Então** o sistema exibe uma lista de todas as consultas anteriores com detalhes como data, médico, diagnóstico e tratamento recomendado.<br>

##### Cenário 2: Visualizar detalhes específicos de uma consulta
**Dado** que o paciente está visualizando seu histórico de consultas<br>
**Quando** o paciente seleciona uma consulta específica na lista<br>
**Então** o sistema exibe os detalhes completos da consulta selecionada, incluindo observações médicas, resultados de exames e prescrições.<br>

##### Cenário 3: Filtrar consultas por data ou especialidade
**Dado** que o paciente deseja encontrar consultas específicas<br>
**Quando** o paciente utiliza os filtros de data e especialidade médica na seção de histórico<br>
**Então** o sistema mostra apenas as consultas que atendem aos critérios selecionados.<br>


<hr>

#### User Story:
- **Código:** US07<br><br>
**Como** Paciente<br>
**Eu quero** acessar as informações dos meus medicamentos<br>
**Para que** eu possa entender as orientações de uso, dosagem, efeitos colaterais e manter o controle do meu tratamento.
<br><br>

#### Critérios de Aceitação no Formato BDD:
##### Cenário 1: Acessar lista de medicamentos prescritos
**Dado** que o paciente está autenticado no sistema<br>
**Quando** o paciente acessa a seção de medicamentos<br>
**Então** o sistema exibe uma lista de todos os medicamentos prescritos, com nome, dosagem e frequência de uso.<br>

##### Cenário 2: Visualizar detalhes de um medicamento específico
**Dado** que o paciente está visualizando a lista de medicamentos<br>
**Quando** o paciente seleciona um medicamento específico<br>
**Então** o sistema exibe os detalhes completos, incluindo as instruções de uso, possíveis efeitos colaterais, interações medicamentosas e precauções.<br>

##### Cenário 3: Verificar orientações de uso e horários de administração
**Dado** que o paciente está acessando os detalhes de um medicamento<br>
**Quando** visualiza as orientações de uso<br>
**Então** o sistema apresenta as instruções detalhadas sobre como tomar o medicamento, incluindo horários recomendados e se deve ser tomado com ou sem alimentos.<br>

##### Cenário 4: Receber notificações de horários para tomar o medicamento
**Dado** que o paciente tem um medicamento com horários específicos de administração<br>
**Quando** a hora de tomar o medicamento estiver próxima<br>
**Então** o sistema envia uma notificação para o paciente, lembrando-o de tomar o medicamento no horário certo.<br>

##### Cenário 5: Acessar alertas de interações medicamentosas
**Dado** que o paciente está visualizando a lista de medicamentos<br>
**Quando** há uma interação medicamentosa entre os remédios prescritos<br>
**Então** o sistema exibe um alerta informando sobre as interações e recomenda cuidados específicos ou consultas com o médico.<br>

##### Cenário 6: Consultar histórico de uso de medicamentos
**Dado** que o paciente deseja revisar quais medicamentos foram usados no passado<br>
**Quando** acessa a seção de histórico de medicamentos<br>
**Então** o sistema exibe uma lista de medicamentos anteriores com datas de prescrição, uso e término do tratamento.<br>

##### Cenário 7: Verificar contraindicações e avisos especiais
**Dado** que o paciente está acessando os detalhes de um medicamento<br>
**Quando** revisa as informações de segurança<br>
**Então** o sistema destaca contraindicações, avisos especiais para gestantes, lactantes, e possíveis alergias.<br>

<hr>

#### User Story:
- **Código:** US08 <br><br>
**Como** Paciente<br>
**Eu quero** solicitar o agendamento de consultas<br>
**Para que** eu possa marcar atendimentos médicos de maneira conveniente, sem precisar ligar ou comparecer fisicamente à clínica.<br>
<br><br>

#### Critérios de Aceitação no Formato BDD:
##### Cenário 1: Solicitar agendamento de consulta via sistema
**Dado** que o paciente está autenticado no sistema<br>
**Quando** o paciente acessa a seção de agendamento de consultas<br>
**E** seleciona a especialidade médica, data e horário desejados<br>
**Então** o sistema exibe as opções de horários disponíveis<br>
**E** permite que o paciente finalize a solicitação de agendamento.<br>

##### Cenário 2: Receber confirmação da solicitação de agendamento
**Dado** que o paciente solicitou o agendamento de uma consulta<br>
**Quando** a solicitação é processada pelo sistema<br>
**Então** o paciente recebe uma notificação de confirmação com os detalhes da consulta agendada<br>
**E** um e-mail ou SMS é enviado com as informações da consulta.<br>

##### Cenário 3: Visualizar disponibilidade de horários para consultas
**Dado** que o paciente deseja agendar uma consulta<br>
**Quando** o paciente seleciona a especialidade médica e o médico desejado<br>
**Então** o sistema exibe um calendário com os horários disponíveis para consulta<br>
**E** permite que o paciente escolha a melhor data e horário.<br>

##### Cenário 4: Receber alerta sobre indisponibilidade de horários
**Dado** que o paciente solicitou um agendamento em uma data e horário específico<br>
**Quando** não há horários disponíveis para a consulta selecionada<br>
**Então** o sistema notifica o paciente sobre a indisponibilidade<br>
**E** sugere horários alternativos ou a possibilidade de adicionar o paciente a uma lista de espera.<br>

##### Cenário 5: Cancelar ou reagendar consulta solicitada
**Dado** que o paciente tem uma consulta previamente agendada<br>
**Quando** o paciente acessa a seção de consultas agendadas<br>
**Então** o sistema exibe a opção de cancelar ou reagendar a consulta<br>
**E** permite que o paciente selecione um novo horário, caso necessário.<br>

<hr>

#### User Story:
- **Código:** US09 <br><br>
**Como** Paciente<br>
**Eu quero** visualizar os agendamentos das minhas consultas<br>
**Para que** eu possa acompanhar meus compromissos médicos e gerenciar meu calendário de forma eficiente.
<br><br>

#### Critérios de Aceitação no Formato BDD:
##### Cenário 1: Visualizar lista de consultas agendadas
**Dado** que o paciente está autenticado no sistema<br>
**Quando** o paciente acessa a seção de consultas agendadas<br>
**Então** o sistema exibe uma lista de todas as consultas futuras marcadas, com detalhes como data, horário, médico, e local da consulta.<br>

##### Cenário 2: Identificar consultas próximas
**Dado** que o paciente está visualizando as consultas agendadas<br>
**Quando** a data da consulta estiver próxima (por exemplo, em 24 horas)<br>
**Então** o sistema destaca a consulta com um alerta visual<br>
**E** envia uma notificação ao paciente para lembrá-lo do compromisso.<br>

##### Cenário 3: Visualizar status de aprovação ou pendência de consulta
**Dado** que o paciente está visualizando suas consultas<br>
**Quando** uma consulta estiver pendente de aprovação (por exemplo, aguardando confirmação do médico)<br>
**Então** o sistema exibe o status atual da consulta e as ações possíveis.<br>

<hr>

#### User Story:
- **Código:** US10 <br><br>
**Como** Paciente <br>
**Eu quero** ser alertado sobre a proximidade da data da minha consulta<br>
**Para que** eu possa me preparar adequadamente e evitar esquecimentos.
<br><br>

#### Critérios de Aceitação no Formato BDD:
##### Cenário 1: Receber alerta de consulta com 24 horas de antecedência
**Dado** que o paciente tem uma consulta marcada para o dia seguinte<br>
**Quando** a consulta estiver a menos de 24 horas de ocorrer<br>
**Então** o sistema envia uma notificação para o paciente informando a data, hora, e local da consulta.<br>

##### Cenário 2: Receber alerta de consulta com 1 hora de antecedência
**Dado** que o paciente tem uma consulta marcada para o mesmo dia<br>
**Quando** a consulta estiver a menos de 1 hora de ocorrer<br>
**Então** o sistema envia um alerta urgente ao paciente, reforçando o horário e as instruções de chegada.<br>

##### Cenário 3: Alerta de consulta reagendada ou alterada
**Dado** que a consulta do paciente foi reagendada ou teve alterações<br>
**Quando** o sistema enviar o alerta de proximidade<br>
**Então** o sistema destaca que houve uma alteração no horário ou data, evitando que o paciente vá em horários errados.<br>

##### Cenário 4: Alerta de falta de confirmação do paciente
**Dado** que o paciente precisa confirmar presença na consulta<br>
**Quando** o sistema identificar que a confirmação ainda não foi feita<br>
**Então** o alerta inclui um pedido de confirmação para garantir o comparecimento.<br>

<hr>

### 4.4. PERSONA 4 - COORDENADOR DE AGENDAMENTO
#### User Story:
- **Código:** US11<br><br>
**Como** Coordenador de Agendamento<br>
**Eu quero** visualizar a disponibilidade de datas e horários na agenda de médicos e especialistas<br>
**Para que** eu possa agendar consultas de forma eficiente, evitando conflitos e melhorando a organização das agendas.
<br><br>

#### Critérios de Aceitação no Formato BDD:
##### Cenário 1: Visualizar disponibilidade em calendário mensal
**Dado** que o sistema possui um calendário mensal para cada médico e especialista<br>
**Quando** o Coordenador de Agendamento acessa a visualização da agenda de um médico<br>
**Então** o sistema exibe um calendário mensal com os dias e horários disponíveis e ocupados, permitindo ao coordenador ver rapidamente a disponibilidade para o mês.<br>

##### Cenário 2: Visualizar disponibilidade em calendário semanal
**Dado** que o sistema possui um calendário semanal para cada médico e especialista<br>
**Quando** o Coordenador de Agendamento acessa a visualização da agenda de um especialista<br>
**Então** o sistema exibe um calendário semanal detalhado com os horários disponíveis e ocupados para a semana atual, facilitando o agendamento imediato.<br>

##### Cenário 3: Filtro por especialidade
**Dado** que o sistema possui médicos e especialistas com diferentes especialidades<br>
**Quando** o Coordenador de Agendamento aplica um filtro por especialidade<br>
**Então** o sistema exibe a disponibilidade apenas dos médicos e especialistas com a especialidade selecionada, ajudando a encontrar a disponibilidade de acordo com a necessidade do paciente.<br>

##### Cenário 4: Visualização da disponibilidade por período específico
**Dado** que o Coordenador de Agendamento precisa visualizar a disponibilidade para um período específico<br>
**Quando** ele solicita a visualização para um intervalo de datas específico<br>
**Então** o sistema exibe a disponibilidade dos médicos e especialistas apenas para o período selecionado, facilitando a busca por horários disponíveis dentro desse intervalo.<br>

<hr>

#### User Story:
- **Código:** US12<br><br>
**Como** Coordenador de Agendamento<br>
**Eu quero** reservar agendamentos de consultas na agenda de médicos e especialistas<br>
**Para que** eu possa garantir que os pacientes sejam atendidos conforme a disponibilidade dos profissionais e evitar conflitos de horário.
<br><br>

#### Critérios de Aceitação no Formato BDD:
##### Cenário 1: Reservar uma consulta para um paciente
**Dado** que o sistema exibe a disponibilidade de médicos e especialistas<br>
**Quando** o Coordenador de Agendamento seleciona um horário disponível e insere as informações do paciente<br>
**Então** o sistema reserva o horário para o paciente e atualiza a agenda do médico ou especialista, confirmando a reserva com um aviso ao paciente e ao profissional.<br>

##### Cenário 2: Confirmar reserva com o paciente
**Dado** que a reserva de uma consulta foi feita com sucesso<br>
**Quando** o sistema finaliza a reserva<br>
**Então** o paciente recebe uma confirmação de agendamento por e-mail ou SMS, contendo a data, hora e o local da consulta, e o médico ou especialista também é notificado.<br>

##### Cenário 3: Ajustar a reserva existente
**Dado** que uma consulta foi previamente agendada e precisa ser ajustada<br>
**Quando** o Coordenador de Agendamento seleciona o agendamento existente e altera a data ou o horário<br>
**Então** o sistema atualiza a reserva, notificando tanto o paciente quanto o médico ou especialista sobre a nova data e hora da consulta.<br>

##### Cenário 4: Cancelar uma reserva
**Dado** que uma consulta agendada precisa ser cancelada<br>
**Quando** o Coordenador de Agendamento seleciona o agendamento e confirma o cancelamento<br>
**Então** o sistema remove o horário da agenda do médico ou especialista e notifica o paciente sobre o cancelamento, permitindo que ele reaja a nova disponibilidade.<br>

##### Cenário 5: Evitar conflitos de horário
**Dado** que o Coordenador de Agendamento está reservando um horário<br>
**Quando** ele seleciona um horário disponível<br>
**Então** o sistema verifica automaticamente se há algum conflito com outros agendamentos e alerta o coordenador se o horário já estiver reservado ou se ocorrer um conflito.<br>

<hr>

#### User Story:
- **Código:** US13<br><br>
**Como** Coordenador de Agendamento<br>
**Eu quero** receber alertas sobre cancelamentos de consultas<br>
**Para que** eu possa rapidamente reagendar os horários e informar tanto os pacientes quanto os médicos ou especialistas sobre as mudanças, minimizando o impacto dos cancelamentos.
<br><br>

#### Critérios de Aceitação no Formato BDD:
##### Cenário 1: Receber alerta de cancelamento de consulta
Dado que um paciente cancela uma consulta<br>
Quando o cancelamento é registrado no sistema<br>
Então o Coordenador de Agendamento recebe um alerta imediato sobre o cancelamento, com detalhes da consulta e informações do paciente.<br>

##### Cenário 2: Atualizar a agenda com o horário liberado
Dado que um horário foi cancelado<br>
Quando o Coordenador de Agendamento recebe o alerta<br>
Então o sistema atualiza a agenda do médico ou especialista para refletir a disponibilidade do horário cancelado, tornando-o visível para novos agendamentos.<br>

### 4.5. PERSONA 5 - FARMACÊUTICA
#### User Story:
- **Código:** US14 <br><br>
**Como** Farmacêutica<br>
**Eu** quero registrar a entrada de medicamentos no estoque<br>
**Para que** eu possa monitorar e gerenciar o inventário de medicamentos de forma eficaz, garantindo que a farmácia tenha todos os medicamentos necessários e evitando faltas ou excessos.
<br><br>

#### Critérios de Aceitação no Formato BDD:
##### Cenário 1: Registrar a entrada de medicamentos no sistema
**Dado** que um novo lote de medicamentos chegou à farmácia<br>
**Quando** a Farmacêutica recebe o lote<br>
**Então** ela acessa o sistema de gerenciamento de estoque e registra a entrada dos medicamentos, incluindo detalhes como nome, quantidade, data de validade e número do lote.<br>

##### Cenário 2: Verificar se o medicamento já está registrado
**Dado** que a Farmacêutica está registrando um medicamento<br>
**Quando** o medicamento já existe no sistema<br>
**Então** o sistema verifica e atualiza a quantidade disponível no estoque existente, ao invés de criar um novo registro, e notifica a Farmacêutica sobre a atualização.<br>

##### Cenário 3: Receber alerta de validade próxima
**Dado** que um medicamento foi registrado no sistema<br>
**Quando** a data de validade está próxima<br>
**Então** o sistema envia um alerta à Farmacêutica sobre o medicamento, destacando a necessidade de uso ou descarte iminente para evitar perdas.<br>

##### Cenário 4: Confirmar a entrada de medicamentos
**Dado** que a Farmacêutica registrou a entrada de medicamentos<br>
**Quando** a entrada é registrada<br>
**Então** o sistema confirma a operação e atualiza a quantidade total de medicamentos no estoque, gerando um recibo digital de entrada.<br>

##### Cenário 5: Validar informações de medicamentos
**Dado** que a Farmacêutica está registrando novos medicamentos<br>
**Quando** as informações do medicamento são inseridas<br>
**Então** o sistema valida os dados para garantir que todas as informações obrigatórias estejam completas e corretas, e notifica a Farmacêutica caso haja algum erro ou informação faltante.<br>

##### Cenário 6: Atualizar quantidade de medicamentos no estoque
**Dado** que o medicamento foi registrado<br>
**Quando** a quantidade registrada é confirmada<br>
**Então** o sistema atualiza o estoque de medicamentos com a nova quantidade e ajusta os níveis disponíveis, garantindo precisão no gerenciamento do inventário.<br>

<hr>

#### User Story:
- **Cenário:** US15<br><br>
**Como** Farmacêutica<br>
**Eu quero** registrar a saída de medicamentos no estoque<br>
**Para que** eu possa monitorar e gerenciar o inventário de medicamentos de forma eficaz, garantindo que o estoque esteja sempre refletindo a quantidade correta disponível e evitando problemas de falta ou excesso de medicamentos.
<br><br>

#### Critérios de Aceitação no Formato BDD:
##### Cenário 1: Registrar a saída de medicamentos para um paciente
**Dado** que um medicamento foi dispensado para um paciente<br>
**Quando** a Farmacêutica processa a saída<br>
**Então** ela acessa o sistema de gerenciamento de estoque e registra a saída do medicamento, incluindo detalhes como nome, quantidade, data e número da receita, se aplicável.<br>

##### Cenário 2: Atualizar a quantidade disponível no estoque
**Dado** que a Farmacêutica registrou a saída de um medicamento<br>
**Quando** a saída é registrada<br>
**Então** o sistema atualiza a quantidade disponível no estoque, refletindo a nova quantidade após a saída do medicamento.<br>

##### Cenário 3: Validar a quantidade registrada para saída
**Dado** que a Farmacêutica está registrando a saída de medicamentos<br>
**Quando** a quantidade registrada é maior do que a disponível no estoque<br>
**Então** o sistema exibe uma mensagem de erro e impede o registro até que a quantidade correta seja inserida, garantindo a precisão do inventário.<br>

##### Cenário 4: Receber alerta de baixo estoque
**Dado** que a saída de um medicamento é registrada<br>
**Quando** a quantidade disponível atinge um nível crítico<br>
**Então** o sistema envia um alerta para a Farmacêutica indicando que o estoque do medicamento está baixo e precisa ser reabastecido.<br>

<hr>

#### User Story:
- **Código:** US16 <br><br>
**Como** Farmacêutica<br>
**Eu quero** buscar os medicamentos existentes no estoque<br>
**Para que** eu possa verificar a disponibilidade e localização dos medicamentos, facilitar o atendimento ao paciente e garantir uma gestão eficiente do inventário.
<br><br>

#### Critérios de Aceitação no Formato BDD:
##### Cenário 1: Buscar medicamento pelo nome
**Dado** que a Farmacêutica deseja buscar um medicamento específico<br>
**Quando** ela insere o nome do medicamento na função de busca do sistema<br>
**Então** o sistema exibe uma lista de medicamentos correspondentes, incluindo detalhes como quantidade disponível, localização no estoque e data de validade.
<br><br>

##### Cenário 2: Buscar medicamento por código de barras
**Dado** que a Farmacêutica tem o código de barras do medicamento<br>
**Quando** ela escaneia ou insere o código de barras no sistema de busca<br>
**Então** o sistema retorna as informações detalhadas sobre o medicamento, incluindo a quantidade disponível e localização no estoque.<br>

##### Cenário 3: Buscar medicamentos por categoria
**Dado** que a Farmacêutica precisa verificar medicamentos em uma categoria específica<br>
**Quando** ela seleciona a categoria desejada no sistema de busca<br>
**Então** o sistema exibe todos os medicamentos pertencentes à categoria selecionada, com detalhes sobre a quantidade disponível e localização no estoque.<br>

##### Cenário 4: Buscar medicamentos próximos da data de validade
**Dado** que a Farmacêutica deseja verificar medicamentos próximos da data de validade<br>
**Quando** ela solicita a busca por medicamentos com validade próxima<br>
**Então** o sistema exibe uma lista de medicamentos cuja data de validade está prestes a expirar, permitindo à Farmacêutica tomar ações apropriadas para evitar desperdício e garantir a segurança dos pacientes.<br>

##### Cenário 5: Buscar medicamentos com baixa quantidade
**Dado** que a Farmacêutica precisa verificar medicamentos com estoque baixo<br>
**Quando** ela solicita a busca por medicamentos com quantidade abaixo de um nível pré-definido<br>
**Então** o sistema exibe uma lista de medicamentos que estão com estoque baixo, facilitando o reabastecimento e a gestão de inventário.<br>

##### Cenário 6: Buscar medicamentos por fornecedor
**Dado** que a Farmacêutica deseja verificar os medicamentos fornecidos por um fornecedor específico<br>
**Quando** ela seleciona o fornecedor desejado no sistema de busca<br>
**Então** o sistema exibe todos os medicamentos que foram fornecidos pelo fornecedor selecionado, incluindo a quantidade disponível e localização no estoque.<br>

<hr>

#### User Story:
- **Código:** US17<br><br>
**Como** Farmacêutica<br>
**Eu quero** visualizar os medicamentos prescritos para o paciente<br>
**Para que** eu possa garantir que o paciente receba a medicação correta, verificar a conformidade com a prescrição e identificar possíveis interações medicamentosas.
<br><br>

#### Critérios de Aceitação no Formato BDD:
##### Cenário 1: Visualizar medicamentos prescritos em uma única prescrição
**Dado** que a Farmacêutica deseja verificar os medicamentos prescritos em uma prescrição específica<br>
**Quando** ela seleciona a prescrição do paciente no sistema<br>
**Então** o sistema exibe uma lista detalhada dos medicamentos prescritos, incluindo nome, dosagem, frequência e duração do tratamento.<br>

##### Cenário 2: Visualizar medicamentos prescritos para um paciente específico
**Dado** que a Farmacêutica precisa revisar todos os medicamentos prescritos para um paciente<br>
**Quando** ela busca o paciente no sistema<br>
**Então** o sistema exibe uma lista completa de todas as prescrições atuais e passadas, incluindo os medicamentos prescritos, dosagem e datas.<br>

##### Cenário 3: Visualizar medicamentos prescritos com informações sobre interações
**Dado** que a Farmacêutica está revisando medicamentos prescritos para um paciente<br>
**Quando** ela acessa a prescrição no sistema<br>
**Então** o sistema fornece informações sobre possíveis interações medicamentosas entre os medicamentos prescritos, ajudando a prevenir reações adversas.<br>

<hr>

#### User Story:
- **Código:** US18<br><br>
**Como** Farmacêutica<br>
**Eu quero** registrar os detalhes de efeitos adversos da medicação<br>
**Para que** eu possa monitorar e gerenciar reações indesejadas, garantir a segurança dos pacientes e atualizar o histórico de medicação com informações importantes para futuras prescrições.
<br><br>

#### Critérios de Aceitação no Formato BDD:
##### Cenário 1: Registrar efeitos adversos de uma medicação específica
**Dado** que a Farmacêutica deseja registrar efeitos adversos para uma medicação específica<br>
**Quando** ela seleciona a medicação no sistema e insere os detalhes dos efeitos adversos observados<br>
**Então** o sistema deve registrar os detalhes e associá-los à medicação, incluindo informações sobre a gravidade, a data e a descrição dos sintomas.<br>

##### Cenário 2: Registrar múltiplos efeitos adversos para uma medicação
**Dado** que foram observados vários efeitos adversos para uma única medicação<br>
**Quando** a Farmacêutica insere múltiplos detalhes de efeitos adversos no sistema<br>
**Então** o sistema deve permitir a entrada de múltiplos efeitos adversos, associando cada um à medicação e fornecendo uma visão consolidada de todos os efeitos observados.<br>

<hr>

#### User Story:
- **Código:** US19<br>
**Como** Farmacêutica
**Eu quero** registrar os dias e horários para medicação conforme a prescrição do paciente<br>
**Para que** eu possa garantir que a medicação seja administrada corretamente e ajudar o paciente a seguir o regime de tratamento conforme prescrito.
<br><br>

#### Critérios de Aceitação no Formato BDD:
##### Cenário 1: Registrar dias e horários para uma medicação específica
**Dado** que a Farmacêutica está no processo de registrar a medicação para um paciente<br>
**Quando** ela insere os dias e horários específicos para a administração da medicação conforme a prescrição<br>
**Então** o sistema deve registrar essas informações associadas à medicação e ao paciente, e exibir uma confirmação da entrada bem-sucedida.<br>

##### Cenário 2: Atualizar dias e horários registrados para uma medicação
**Dado** que houve uma alteração nos dias e horários para a medicação de um paciente<br>
**Quando** a Farmacêutica atualiza os dias e horários no sistema<br>
**Então** o sistema deve atualizar as informações registradas e fornecer uma confirmação de que os detalhes foram modificados com sucesso.<br>

##### Cenário 3: Registrar medicação com múltiplas administrações diárias
**Dado** que um paciente deve tomar a medicação várias vezes ao dia<br>
**Quando** a Farmacêutica insere os horários específicos para cada administração diária<br>
**Então** o sistema deve permitir a entrada de múltiplos horários para a mesma medicação e garantir que todas as entradas sejam corretamente associadas ao paciente.<br>

##### Cenário 4: Visualizar dias e horários registrados para medicação
**Dado** que a Farmacêutica precisa revisar os dias e horários registrados para a medicação de um paciente<br>
**Quando** ela acessa a visualização de medicações e horários no sistema<br>
**Então** o sistema deve exibir uma lista clara e completa dos dias e horários programados para a administração da medicação, permitindo a confirmação e verificação dos dados.<br>

<hr>

#### User Story:
- **Código:** US20<br><br>
Como** Farmacêutica<br>
**Eu quero** registrar a categoria de tarja da medicação<br>
**Para que** eu possa classificar corretamente as medicações e garantir o controle adequado dos medicamentos, além de seguir as regulamentações e requisitos de segurança.
<br><br>

#### Critérios de Aceitação no Formato BDD:
##### Cenário 1: Registrar uma medicação com uma nova categoria de tarja
**Dado** que a Farmacêutica está registrando uma nova medicação<br>
**Quando** ela insere a categoria de tarja apropriada para a medicação<br>
**Então** o sistema deve armazenar a categoria de tarja junto com as informações da medicação e confirmar que o registro foi realizado com sucesso.<br>

##### Cenário 2: Atualizar a categoria de tarja de uma medicação existente
**Dado** que a Farmacêutica precisa alterar a categoria de tarja de uma medicação já registrada<br>
**Quando** ela atualiza a categoria de tarja no sistema<br>
**Então** o sistema deve refletir a nova categoria de tarja e fornecer uma confirmação de que a alteração foi bem-sucedida.<br>

##### Cenário 3: Registrar medicação sem categoria de tarja especificada
**Dado** que uma medicação está sendo registrada e não possui uma categoria de tarja especificada<br>
**Quando** a Farmacêutica tenta salvar o registro sem fornecer a categoria de tarja<br>
**Então** o sistema deve exibir uma mensagem de erro informando que a categoria de tarja é obrigatória e solicitar que a Farmacêutica forneça a informação necessária.<br>

<hr>

#### User Story:
- **Código:** US21<br><br>
**Como** Farmacêutica<br>
**Eu quero** editar os efeitos adversos da medicação<br>
**Para que** eu possa garantir que as informações sobre a medicação estejam atualizadas e precisas, ajudando na segurança e no controle adequado dos medicamentos.
<br><br>

#### Critérios de Aceitação no Formato BDD:
##### Cenário 1: Editar efeitos adversos de uma medicação existente
**Dado** que a Farmacêutica precisa atualizar os efeitos adversos de uma medicação já registrada<br>
**Quando** ela acessa a medicação e modifica a descrição dos efeitos adversos<br>
**Então** o sistema deve salvar as alterações e confirmar que a atualização foi bem-sucedida, refletindo as novas informações no registro da medicação.<br>

##### Cenário 2: Reverter alterações nos efeitos adversos
**Dado** que a Farmacêutica fez uma alteração nos efeitos adversos que precisa ser revertida<br>
**Quando** ela seleciona a opção de reverter para a versão anterior dos efeitos adversos<br>
**Então** o sistema deve restaurar a descrição dos efeitos adversos para o estado anterior e confirmar que a reversão foi concluída com sucesso.<br>

<hr>

#### User Story:
- **Código:** US22<br><br>
**Como** Farmacêutica<br>
**Eu quero** registrar detalhes adicionais da medicação<br>
**Para que** eu possa garantir que todas as informações relevantes e úteis sobre a medicação estejam disponíveis e atualizadas, ajudando na gestão e controle eficiente dos medicamentos.
<br><br>

#### Critérios de Aceitação no Formato BDD:
##### Cenário 1: Adicionar detalhes adicionais a uma medicação existente
**Dado** que a Farmacêutica deseja adicionar mais informações a uma medicação já registrada<br>
**Quando** ela acessa o registro da medicação e insere detalhes adicionais<br>
**Então** o sistema deve atualizar o registro da medicação com as novas informações e confirmar que a atualização foi concluída.<br>

##### Cenário 2: Editar detalhes adicionais de uma medicação
**Dado** que a Farmacêutica está revisando os detalhes adicionais de uma medicação<br>
**Quando** ela modifica ou corrige as informações já registradas<br>
**Então** o sistema deve salvar as alterações e confirmar que os detalhes adicionais foram atualizados, refletindo as mudanças no registro da medicação.<br>

##### Cenário 3: Visualizar detalhes adicionais registrados
**Dado** que a Farmacêutica deseja revisar os detalhes adicionais de uma medicação<br>
**Quando** ela acessa o registro da medicação<br>
**Então** o sistema deve exibir todos os detalhes adicionais registrados, permitindo a visualização completa e clara das informações sobre a medicação.<br>

<hr>

### 4.6. PERSONA 6 - DIRETOR DE TECNOLOGIA
#### User Story:
- **Código:** US23<br><br>
**Como** Diretor de Tecnologia<br>
**Eu quero** gerar relatórios baseados na quantidade de erros de software<br>
**Para que** eu possa analisar a qualidade do sistema, identificar áreas problemáticas e tomar decisões informadas para melhorias.
<br><br>

#### Critérios de Aceitação no Formato BDD:
##### Cenário 1: Gerar relatório de erros por categoria
**Dado** que o sistema tem erros classificados em diferentes categorias (ex: bugs, falhas de segurança, problemas de desempenho)<br>
**Quando** o Diretor de Tecnologia solicita um relatório de erros<br>
**Então** o sistema gera um relatório detalhado, mostrando a quantidade de erros por categoria.<br>

##### Cenário 2: Gerar relatório de erros por data
**Dado** que o sistema registra erros com timestamps<br>
**Quando** o Diretor de Tecnologia solicita um relatório de erros para um intervalo de datas específico<br>
**Então** o sistema gera um relatório mostrando a quantidade de erros ocorridos dentro desse intervalo de datas.<br>

##### Cenário 3: Gerar relatório de erros por gravidade
**Dado** que os erros são classificados por níveis de gravidade (ex: crítico, alto, médio, baixo)<br>
**Quando** o Diretor de Tecnologia solicita um relatório de erros<br>
**Então** o sistema gera um relatório detalhado, mostrando a quantidade de erros por nível de gravidade.<br>

##### Cenário 4: Gerar relatório comparativo de erros
**Dado** que o sistema armazena dados de erros ao longo do tempo<br>
**Quando** o Diretor de Tecnologia solicita um relatório comparativo<br>
**Então** o sistema gera um relatório que compara a quantidade de erros em diferentes períodos (mensal, trimestral, anual) para identificar tendências e melhorias.<br>

##### Cenário 5: Gerar relatório de erros por módulo ou funcionalidade
**Dado** que os erros estão associados a diferentes módulos ou funcionalidades do sistema<br>
**Quando** o Diretor de Tecnologia solicita um relatório de erros<br>
**Então** o sistema gera um relatório mostrando a quantidade de erros por módulo ou funcionalidade, permitindo identificar áreas que precisam de atenção.<br>

##### Cenário 6: Relatório com detalhes dos erros
**Dado** que os erros são registrados com detalhes específicos (ex: mensagem de erro, stack trace, usuário afetado)<br>
**Quando** o Diretor de Tecnologia solicita um relatório de erros<br>
**Então** o sistema gera um relatório detalhado que inclui as informações completas sobre cada erro registrado.<br>

##### Cenário 7: Exportar relatório em diferentes formatos
**Dado** que o sistema permite exportação de relatórios<br>
**Quando** o Diretor de Tecnologia solicita um relatório de erros<br>
**Então** o sistema gera e exporta o relatório em diferentes formatos (ex: PDF, Excel, CSV) conforme a necessidade do Diretor.<br>

##### Cenário 8: Agendar geração de relatórios automáticos
**Dado** que o Diretor de Tecnologia precisa de relatórios regulares<br>
**Quando** ele configurar uma agenda para a geração de relatórios<br>
**Então** o sistema gera e envia automaticamente os relatórios conforme a frequência configurada (diária, semanal, mensal).<br>

<hr>

#### User Story:
- **Código:** US24<br><br>
**Como** Diretor de Tecnologia<br>
**Eu quero** gerar relatórios baseados na taxa de performance<br>
**Para que** eu possa avaliar o desempenho do sistema, identificar áreas que precisam de otimização e tomar decisões informadas para melhorar a eficiência.
<br><br>

#### Critérios de Aceitação no Formato BDD:
##### Cenário 1: Gerar relatório de performance por módulo
**Dado** que o sistema possui vários módulos com diferentes taxas de performance<br>
**Quando** o Diretor de Tecnologia solicita um relatório de performance<br>
**Então** o sistema gera um relatório detalhado mostrando a taxa de performance de cada módulo, incluindo métricas como tempo de resposta e uso de recursos.<br>

##### Cenário 2: Gerar relatório de performance por período
**Dado** que o sistema registra dados de performance ao longo do tempo<br>
**Quando** o Diretor de Tecnologia solicita um relatório de performance para um intervalo de datas específico<br>
**Então** o sistema gera um relatório mostrando a taxa de performance durante o intervalo solicitado, com gráficos e métricas relevantes.<br>

##### Cenário 3: Gerar relatório de performance por funcionalidade
**Dado** que o sistema possui várias funcionalidades com diferentes taxas de performance<br>
**Quando** o Diretor de Tecnologia solicita um relatório de performance<br>
**Então** o sistema gera um relatório detalhado mostrando a taxa de performance de cada funcionalidade, permitindo identificar quais funcionalidades estão impactando o desempenho.<br>

##### Cenário 4: Relatório comparativo de performance
**Dado** que o sistema armazena dados de performance em diferentes períodos<br>
**Quando** o Diretor de Tecnologia solicita um relatório comparativo<br>
**Então** o sistema gera um relatório que compara a taxa de performance entre diferentes períodos (mensal, trimestral, anual) para identificar tendências e mudanças no desempenho.<br>

##### Cenário 5: Relatório de performance por tipo de usuário
**Dado** que o sistema coleta dados de performance com base no tipo de usuário (administrador, usuário comum, etc.)<br>
**Quando** o Diretor de Tecnologia solicita um relatório de performance<br>
**Então** o sistema gera um relatório mostrando a taxa de performance para cada tipo de usuário, identificando possíveis discrepâncias no desempenho entre diferentes grupos de usuários.<br>

##### Cenário 6: Relatório com detalhes de performance
**Dado** que o sistema registra detalhes específicos de performance (ex: tempos de resposta, uso de CPU, memória)<br>
**Quando** o Diretor de Tecnologia solicita um relatório de performance<br>
**Então** o sistema gera um relatório detalhado que inclui informações completas sobre o desempenho do sistema, como tempos de resposta e uso de recursos.<br>

##### Cenário 7: Exportar relatório em diferentes formatos
**Dado** que o sistema permite exportação de relatórios<br>
**Quando** o Diretor de Tecnologia solicita um relatório de performance<br>
**Então** o sistema gera e exporta o relatório em diferentes formatos (ex: PDF, Excel, CSV) conforme a necessidade do Diretor.<br>

##### Cenário 8: Agendar geração de relatórios automáticos
**Dado** que o Diretor de Tecnologia precisa de relatórios regulares sobre performance<br>
**Quando** ele configurar uma agenda para a geração de relatórios<br>
**Então** o sistema gera e envia automaticamente os relatórios conforme a frequência configurada (diária, semanal, mensal).<br>

<hr>

#### User Story:
- **Código:** US25<br><br>
**Como** Diretor de Tecnologia<br>
**Eu quero** gerar relatórios baseados na taxa de segurança<br>
**Para que** eu possa monitorar a segurança do sistema, identificar vulnerabilidades e garantir que as medidas de segurança estejam funcionando adequadamente.
<br><br>

#### Critérios de Aceitação no Formato BDD:
##### Cenário 1: Gerar relatório de segurança por tipo de ameaça
**Dado** que o sistema registra diferentes tipos de ameaças e incidentes de segurança<br>
**Quando** o Diretor de Tecnologia solicita um relatório de segurança<br>
**Então** o sistema gera um relatório detalhado mostrando a taxa de segurança para cada tipo de ameaça (ex: ataques de SQL injection, tentativas de phishing, vulnerabilidades detectadas).<br>

##### Cenário 2: Gerar relatório de segurança por período
**Dado** que o sistema armazena dados de segurança ao longo do tempo<br>
**Quando** o Diretor de Tecnologia solicita um relatório de segurança para um intervalo de datas específico<br>
**Então** o sistema gera um relatório mostrando a taxa de segurança durante o intervalo solicitado, incluindo gráficos e métricas relevantes.<br>

##### Cenário 3: Gerar relatório de segurança por módulo do sistema
**Dado** que o sistema possui diferentes módulos com níveis variados de segurança<br>
**Quando** o Diretor de Tecnologia solicita um relatório de segurança<br>
**Então** o sistema gera um relatório detalhado mostrando a taxa de segurança de cada módulo, permitindo identificar quais módulos têm maiores vulnerabilidades.<br>

##### Cenário 4: Relatório comparativo de segurança
**Dado** que o sistema registra dados de segurança em diferentes períodos<br>
**Quando** o Diretor de Tecnologia solicita um relatório comparativo<br>
**Então** o sistema gera um relatório que compara a taxa de segurança entre diferentes períodos (mensal, trimestral, anual) para identificar tendências e melhorias na segurança.<br>

##### Cenário 5: Relatório de incidentes de segurança
**Dado** que o sistema registra todos os incidentes de segurança<br>
**Quando** o Diretor de Tecnologia solicita um relatório de incidentes<br>
**Então** o sistema gera um relatório detalhado sobre os incidentes de segurança ocorridos, incluindo a gravidade, a resposta e o impacto de cada incidente.<br>

##### Cenário 6: Relatório de conformidade com normas de segurança
**Dado** que o sistema precisa estar em conformidade com normas e regulamentações de segurança (ex: GDPR, HIPAA)<br>
**Quando** o Diretor de Tecnologia solicita um relatório de conformidade<br>
**Então** o sistema gera um relatório que mostra a conformidade com as normas de segurança e identifica áreas onde a conformidade pode ser melhorada.<br>

##### Cenário 7: Relatório de vulnerabilidades identificadas
**Dado** que o sistema realiza varreduras de segurança para identificar vulnerabilidades<br>
**Quando** o Diretor de Tecnologia solicita um relatório de vulnerabilidades<br>
**Então** o sistema gera um relatório detalhado sobre as vulnerabilidades identificadas, incluindo informações sobre a severidade e o status da correção.<br>

##### Cenário 8: Exportar relatório de segurança em diferentes formatos
**Dado** que o sistema permite exportação de relatórios<br>
**Quando** o Diretor de Tecnologia solicita um relatório de segurança<br>
**Então** o sistema gera e exporta o relatório em diferentes formatos (ex: PDF, Excel, CSV) conforme a necessidade do Diretor.<br>

##### Cenário 9: Agendar geração de relatórios de segurança automáticos
**Dado** que o Diretor de Tecnologia precisa de relatórios regulares sobre segurança<br>
**Quando** ele configurar uma agenda para a geração de relatórios<br>
**Então** o sistema gera e envia automaticamente os relatórios conforme a frequência configurada (diária, semanal, mensal).<br>

<hr>

#### User Story:
- **Código:** US26<br><br>
**Como** Diretor de Tecnologia<br>
**Eu quero** gerar relatórios baseados na taxa de utilização<br>
**Para que** eu possa monitorar o uso dos recursos do sistema, identificar padrões de utilização e áreas que podem precisar de otimização ou aumento de capacidade.
<br><br>

#### Critérios de Aceitação no Formato BDD:
##### Cenário 1: Gerar relatório de utilização por módulo
**Dado** que o sistema possui diferentes módulos com níveis variados de utilização<br>
**Quando** o Diretor de Tecnologia solicita um relatório de utilização<br>
**Então** o sistema gera um relatório detalhado mostrando a taxa de utilização de cada módulo, permitindo identificar quais módulos estão mais ou menos utilizados.<br>

##### Cenário 2: Gerar relatório de utilização por período
**Dado** que o sistema armazena dados de utilização ao longo do tempo<br>
**Quando** o Diretor de Tecnologia solicita um relatório de utilização para um intervalo de datas específico<br>
**Então** o sistema gera um relatório mostrando a taxa de utilização durante o intervalo solicitado, incluindo gráficos e métricas relevantes.<br>

##### Cenário 3: Relatório comparativo de utilização
**Dado** que o sistema registra dados de utilização em diferentes períodos<br>
**Quando** o Diretor de Tecnologia solicita um relatório comparativo<br>
**Então** o sistema gera um relatório que compara a taxa de utilização entre diferentes períodos (mensal, trimestral, anual) para identificar tendências e mudanças no padrão de utilização.<br>

##### Cenário 4: Relatório de utilização por usuário
**Dado** que o sistema registra a utilização por usuário<br>
**Quando** o Diretor de Tecnologia solicita um relatório de utilização<br>
**Então** o sistema gera um relatório mostrando a taxa de utilização por usuário, permitindo identificar quais usuários estão mais ou menos ativos.<br>

##### Cenário 5: Relatório de utilização de recursos críticos
**Dado** que o sistema possui recursos críticos cuja utilização precisa ser monitorada<br>
**Quando** o Diretor de Tecnologia solicita um relatório de utilização<br>
**Então** o sistema gera um relatório detalhado mostrando a taxa de utilização de recursos críticos, como servidores, banco de dados, e redes, permitindo identificar gargalos e áreas que precisam de mais capacidade.<br>

##### Cenário 6: Exportar relatório de utilização em diferentes formatos
**Dado** que o sistema permite exportação de relatórios<br>
**Quando** o Diretor de Tecnologia solicita um relatório de utilização<br>
**Então** o sistema gera e exporta o relatório em diferentes formatos (ex: PDF, Excel, CSV) conforme a necessidade do Diretor.<br>

##### Cenário 7: Agendar geração de relatórios de utilização automáticos
**Dado** que o Diretor de Tecnologia precisa de relatórios regulares sobre utilização<br>
**Quando** ele configurar uma agenda para a geração de relatórios<br>
**Então** o sistema gera e envia automaticamente os relatórios conforme a frequência configurada (diária, semanal, mensal).<br>

## 5. Referências
> JONES, Roberto. PBB: Product Backlog Building. Medium, 02 Mar. 2022. Disponível em: [https://medium.com/@jonesroberto/pbb-product-backlog-building-0012a7a5256a](https://medium.com/@jonesroberto/pbb-product-backlog-building-0012a7a5256a). 


## Histórico de Revisão
Data | Versão | Descrição | Autor | Revisores 
---- | ------ | --------- | ----- | ---------
31/07/24 | 1.0 | Criação do documento | Daniel Rodrigues | Joyce Dionizio
08/09/24 | 1.1 | Atualizacao do documento | Daniel Rodrigues | Jésus Gabriel
