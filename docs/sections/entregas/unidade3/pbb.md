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

## 4. Definição dos DBB's:
A fase de Behavior Driven Development (BDD) no framework Product Backlog Building (PBB) é uma etapa crucial para alinhar o desenvolvimento do software com as expectativas dos usuários e do negócio. O BDD se concentra em descrever o comportamento do sistema por meio de cenários concretos que refletem as necessidades e funcionalidades desejadas. Essas descrições são feitas em uma linguagem comum e acessível, frequentemente utilizando a estrutura “Dado-Quando-Então” para detalhar as condições iniciais, as ações tomadas e os resultados esperados. A fase de BDD no PBB envolve a criação de cenários específicos para cada item do backlog.

Os BDD's do caso de estudo HealthNet podem ser identificadas logo abaixo:


### 4.1 FEATURE 1: Prescrição de Medicamentos

#### 4.1.1. User Story:
Eu como Médico Clínico Geral, <br>
Quero prescrever as medicações nos dados do paciente <br>
Para que ele possa coletar as medicações com o(a) farmacêutico(a).

#### 4.1.2. Critérios de Aceitação em forma de Cenários: Prescrição bem-
##### 4.1.2.1. CENÁRIO 1 - Título de Cenário: Prescrição bem-sucedida
Dado que o Médico Clínico Geral está logado no sistema, <br>
E o paciente está registrado no prontuário, <br>
Quando o médico prescrever uma medicação, <br>
Então a prescrição deve ser salva automaticamente no prontuário do paciente, <br>
E deve ser enviada automaticamente para o sistema da farmácia para que o(a) farmacêutico(a) tenha acesso à prescrição.
##### 4.1.2.3. CENÁRIO 2 - Título de Cenário: Verificação de interações medicamentosas
Dado que o Médico Clínico Geral está prescrevendo uma nova medicação, <br>
E o paciente já tem outras medicações prescritas, <br> 
Quando o médico tenta confirmar a nova prescrição, <br>
Então o sistema deve verificar automaticamente se há interações medicamentosas entre a nova medicação e as já prescritas, <br>
E deve alertar o médico caso sejam detectadas interações perigosas, <br>
E permitir que o médico revise a prescrição antes de confirmá-la. <br>
##### 4.1.2.3. CENÁRIO 3 - Título de Cenário: Paciente alérgico à medicação prescrita
Dado que o Médico Clínico Geral está prescrevendo uma medicação, <br>
E o paciente possui histórico de alergia a essa medicação, <br>
Quando o médico tenta prescrever a medicação, <br>
Então o sistema deve exibir um alerta sobre a alergia do paciente, <br>
E solicitar a confirmação do médico caso deseje continuar com a prescrição, <br>
Para que o médico possa tomar uma decisão informada.  <br>\

### 4.2. FEATURE 2: Registro de Pacientes

#### 4.2.1. User Story:
Eu como Recepcionista <br>
Quero registrar as informações pessoais dos pacientes,  <br>
Para que os médicos e farmacêuticos tenham acesso aos dados essenciais, além do próprio paciente.

#### 4.2.2. Critérios de Aceitação em forma de Cenários:
##### 4.2.2.1. CENÁRIO 1 - Título de Cenário: Registro bem-sucedido de um novo paciente
Dado que a recepcionista está logada no sistema, <br>
Quando um novo paciente chega e fornece suas informações pessoais (nome, data de nascimento, endereço, contato e informações de saúde), <br>
Então a recepcionista deve conseguir registrar todas as informações no sistema, <br>
E o sistema deve validar que os dados obrigatórios foram preenchidos corretamente, <br>
E o registro deve ser salvo com sucesso, permitindo que os médicos e farmacêuticos acessem esses dados. 
##### 4.2.2.2. CENÁRIO 2 - Título de Cenário: Tentativa de registro com dados incompletos
Dado que a recepcionista está registrando um novo paciente, <br>
Quando informações obrigatórias como nome ou data de nascimento estiverem ausentes, <br>
Então o sistema deve exibir uma mensagem de erro indicando quais campos estão faltando, <br>
E o registro não deve ser salvo até que todas as informações obrigatórias estejam corretamente preenchidas.
##### 4.2.2.3. CENÁRIO 3 - Título de Cenário: Atualização de dados de pacientes já registrados
Dado que a recepcionista está logada no sistema, <br> 
E um paciente já registrado deseja atualizar suas informações pessoais (como endereço ou número de telefone), <br>
Quando a recepcionista atualizar os dados no sistema, <br>
Então as novas informações devem ser refletidas instantaneamente no prontuário do paciente, <br>
E estar disponíveis para médicos e farmacêuticos.


### 4.3. FEATURE 3: Acompanhamento de Consultas

#### 4.3.1. User Story:
Eu como Paciente, <br>
Quero ter acessos aos meus dados pessoais além dos resultados das consultas anteriores, <br>
Para que eu possa segur o processo de tratamento corretamente.

#### 4.3.2. Critérios de Aceitação em forma de Cenários:
##### 4.3.2.1. CENÁRIO 1 - Título de Cenário: Acesso aos dados pessoais e histórico de consultas
Dado que o paciente está logado no portal da "HealthNet", <br>
Quando o paciente acessar a área de "Histórico de Consultas", <br>
Então ele deve visualizar seus dados pessoais (nome, data de nascimento, contato, etc.), <br>
E deve visualizar o histórico completo das consultas anteriores, incluindo diagnósticos e prescrições, <br>
Para que possa acompanhar seu tratamento e entender as instruções dadas pelos médicos.
##### 4.3.2.2. CENÁRIO 2 - Título de Cenário: Visualização de exames e resultados
Dado que o paciente realizou exames e recebeu os resultados, <br>
Quando o paciente acessar a área de "Resultados de Exames" no portal, <br>
Então ele deve conseguir visualizar os resultados dos exames associados a suas consultas, <br>
E ver comentários dos médicos sobre os exames, <br>
Para que tenha um entendimento claro sobre sua condição e o próximo passo no tratamento.
##### 4.3.2.3. CENÁRIO 3 - Título de Cenário: Notificação de consultas futuras
Dado que o paciente tem consultas agendadas no sistema, <br>
Quando o paciente acessar o portal, <br>
Então ele deve ser notificado sobre as próximas consultas, <br>
E receber um lembrete automático via e-mail ou SMS para confirmar ou reagendar, <br>
Para que possa se organizar melhor e não perder seus compromissos de saúde.


### 4.4. FEATURE 4: Planejamento de Consultas

#### 4.4.1. User Story:
Eu como Paciente <br>
Quero solicitar a reserva de um dia para consulta, <br>
Para que eu possa receber os diagnósticos e ser medicado.

#### 4.4.2. Critérios de Aceitação em forma de Cenários:
##### 4.4.2.1. CENÁRIO 1 - Título de Cenário: Solicitação de agendamento bem-sucedida
Dado que o paciente está logado no portal, <br>
E selecionou o especialista desejado, <br> 
Quando o paciente solicitar a reserva de um dia e horário disponíveis para consulta, <br>
Então o sistema deve exibir a confirmação do agendamento, <br>
E enviar uma notificação via e-mail ou SMS confirmando a data e hora da consulta.
##### 4.4.2.2. CENÁRIO 2 - Título de Cenário: Tentativa de agendamento em dia sem disponibilidade
Dado que o paciente está tentando agendar uma consulta, <br>
E o especialista não possui horários disponíveis no dia selecionado, <br>
Quando o paciente tentar confirmar o agendamento, <br>
Então o sistema deve informar a falta de disponibilidade, <br>
E sugerir datas alternativas próximas para a consulta, <br>
Para que o paciente possa escolher outro horário adequado.
##### 4.4.2.3. CENÁRIO 3 - Título de Cenário: Reagendamento de consulta
Dado que o paciente já tem uma consulta agendada, <br>
Quando o paciente precisar alterar a data ou horário da consulta, <br>
Então ele deve ser capaz de acessar o sistema e selecionar um novo horário disponível, <br>
E o sistema deve enviar uma notificação confirmando a nova data e hora da consulta, <br> 
Para que o paciente possa ajustar seu planejamento de forma conveniente.


### 4.5. FEATURE 5: Gerenciamento de Agendamentos

#### 4.5.1. User Story:
Eu como Coordenador de Agendamento, <br>
Quero gerenciar a agenda de consultas entre médicos ou especialistas da clínica e os pacientes, <br>
Para que os pacientes possam agendar consultas com os especialistas. 

#### 4.5.2. Critérios de Aceitação em forma de Cenários:
##### 4.5.2.1. CENÁRIO 1 - Título de Cenário: Gerenciamento de disponibilidade dos médicos
Dado que o coordenador de agendamento está logado no sistema, <br>
E tem acesso às agendas dos médicos, <br>
Quando ele adicionar, remover ou ajustar a disponibilidade de horários dos médicos, <br>
Então as mudanças devem ser refletidas automaticamente no sistema de agendamento, <br>
E os pacientes devem poder visualizar e agendar de acordo com as novas disponibilidades.
##### 4.5.2.2. CENÁRIO 2 - Título de Cenário: Notificação de alterações de agenda para pacientes
Dado que o coordenador de agendamento alterou a data ou cancelou a consulta de um paciente, <br>
Quando essa alteração for feita no sistema, <br>
Então o sistema deve notificar automaticamente o paciente sobre a alteração, <br>
E sugerir novos horários disponíveis, <br>
Para que o paciente possa reagendar a consulta de forma rápida e eficiente.
##### 4.5.2.3. CENÁRIO 3 - Título de Cenário: Prevenção de conflitos de agendamento
Dado que o coordenador de agendamento está ajustando a agenda dos médicos, <br>
Quando ele tentar agendar dois pacientes no mesmo horário para o mesmo médico, <br>
Então o sistema deve alertar sobre o conflito de horários, <br> 
E impedir a sobreposição de agendamentos, <br>
Para que as consultas sejam organizadas de maneira eficiente e sem erros de agendamento.


### 4.6. FEATURE 6: Supervisão do serviço da empresa

#### 4.6.1. User Story:
Eu como Diretor de Tecnologia <br>
Quero ter acesso a relatórios de atividades da empresa, <br>
Para que eu possa supervisionar o serviço da empresa.

#### 4.6.2. Critérios de Aceitação em forma de Cenários:
##### 4.6.2.1. CENÁRIO 1 - Título de Cenário: Acesso a relatórios de desempenho
Dado que o Diretor de Tecnologia está logado no sistema, <br>
Quando ele acessar a área de relatórios, <br>
Então ele deve conseguir visualizar relatórios detalhados de todas as atividades da empresa, incluindo dados sobre consultas, prescrições e agendamentos, <br>
Para que possa acompanhar a performance de cada unidade e tomar decisões estratégicas baseadas nesses dados.
##### 4.6.2.2 CENÁRIO 2 - Título de Cenário: Notificações automáticas de anomalias ou falhas
Dado que o sistema está monitorando as operações da empresa, <br>
Quando houver alguma anomalia ou falha no serviço (ex: tempo de resposta elevado, falha em consultas ou agendamentos), <br>
Então o sistema deve enviar uma notificação automática ao Diretor de Tecnologia, <br>
Para que ele possa agir rapidamente para corrigir os problemas e garantir a eficiência dos serviços.
##### 4.6.2.3 CENÁRIO 3 - Título de Cenário: Exportação de relatórios para auditoria
Dado que o Diretor de Tecnologia precisa compartilhar relatórios para auditorias externas, <br> 
Quando ele acessar a área de relatórios, <br>
Então ele deve ter a opção de exportar os dados em formatos comuns (ex: PDF, CSV), <br>
Para que possa enviar os relatórios para autoridades regulatórias ou auditorias de conformidade de maneira simples e eficiente.


### 4.7 FEATURE 7: Dispensa de Medicamentos

#### 4.7.1 User Story:
Eu como Farmacêutica, <br>
Quero controlar a dispensa de medicamentos dos pacientes mediante ao sistema, <br>
Para que seja assegurado a disponibilidade de todos os medicamentos aos pacientes pelo estoque.

#### 4.7.2 Critérios de Aceitação em forma de Cenários:
##### 4.7.2.1 CENÁRIO 1 - Título de Cenário: Dispensa de medicamentos com validação de prescrição
Dado que a farmacêutica recebeu uma solicitação de medicamento, <br>
Quando o paciente apresentar a receita no sistema, <br>
Então o sistema deve validar a prescrição do médico, <br>
E liberar a dispensa dos medicamentos para o paciente, <br>
Para que seja garantido que apenas pacientes com receita médica válida recebam os medicamentos.
##### 4.7.2.2 CENÁRIO 2 - Título de Cenário: Controle de estoque após a dispensa
Dado que a farmacêutica dispensou medicamentos para um paciente, <br>
Quando a transação for finalizada, <br>
Então o sistema deve atualizar automaticamente o estoque, <br>
Para que a quantidade disponível de cada medicamento seja refletida em tempo real, <br>
E seja possível prevenir faltas no estoque.
##### 4.7.2.3 CENÁRIO 3 - Título de Cenário: Alerta de interação medicamentosa
Dado que o paciente tem uma prescrição ativa, <br>
Quando um medicamento for prescrito ou dispensado, <br>
Então o sistema deve verificar automaticamente possíveis interações medicamentosas com outras prescrições do paciente, <br>
E alertar a farmacêutica caso haja algum risco, <br>
Para que o medicamento seja revisado antes de ser dispensado, garantindo a segurança do paciente.


### 4.8. FEATURE 8: Detalhamento de Prescrição Médica

#### 4.8.1. User Story:
Eu como Farmacêutica, <br>
Quero escrever todos os detalhes pertinentes de cada medicamento e seu uso de acordo com o paciente mediante à prescrição médica,  <br>
Para que os médicos e pacientes tenham boa acessibilidade dos detalhes da medicação. 

#### 4.8.2. Critérios de Aceitação em forma de Cenários:
##### 4.8.2.1. CENÁRIO 1 - Título de Cenário: Adição de detalhes da medicação
Dado que o paciente tem uma prescrição ativa no sistema, <br>
Quando a farmacêutica acessar a prescrição, <br>
Então ela deve poder adicionar detalhes sobre o uso correto da medicação, incluindo dosagem, frequência e duração do tratamento, <br>
Para que médicos e pacientes possam visualizar todas as instruções detalhadas sobre o medicamento.
##### 4.8.2.2. CENÁRIO 2 - Título de Cenário: Acessibilidade dos detalhes pelos médicos
Dado que um médico está tratando um paciente, <br>
Quando ele acessar o prontuário do paciente, <br>
Então ele deve conseguir visualizar todos os detalhes das medicações prescritas e seus usos, <br>
Para que tenha clareza sobre o tratamento em andamento e possa ajustar ou revisar a medicação, se necessário.
##### 4.8.2.3. CENÁRIO 3 - Título de Cenário: Acessibilidade dos detalhes pelos pacientes
Dado que o paciente foi medicado, <br>
Quando ele acessar seu perfil ou portal de paciente, <br>
Então ele deve conseguir visualizar as instruções de uso de cada medicamento de forma clara e detalhada, <br>
Para que possa seguir corretamente o tratamento prescrito. 


## 5. Referências
> JONES, Roberto. PBB: Product Backlog Building. Medium, 02 Mar. 2022. Disponível em: [https://medium.com/@jonesroberto/pbb-product-backlog-building-0012a7a5256a](https://medium.com/@jonesroberto/pbb-product-backlog-building-0012a7a5256a). 


## Histórico de Revisão
Data | Versão | Descrição | Autor | Revisores 
---- | ------ | --------- | ----- | ---------
31/07/24 | 1.0 | Criação do documento | Daniel Rodrigues | Joyce Dionizio
08/09/24 | 1.1 | Atualizacao do documento | Daniel Rodrigues | Jésus Gabriel
