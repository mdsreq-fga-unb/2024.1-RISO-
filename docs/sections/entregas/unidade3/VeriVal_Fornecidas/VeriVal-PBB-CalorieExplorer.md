# Verificação e Validação - PBB do Projeto Calorie Explorer

# 1. Verificação
A verificação do PBB (Product Backlog Building) para o projeto Calorie Explorer foi conduzida utilizando um checklist para avaliar se todos os elementos fundamentais do Canvas PBB foram atendidos. Entre os pontos verificados, constatou-se que o Canvas PBB está devidamente identificado com o produto, e os problemas e expectativas do cliente foram corretamente listados. Também foram criadas personas, e as ações associadas a essas personas foram mapeadas, incluindo o que fazem atualmente e o que desejam fazer com o sistema. As funcionalidades foram definidas com base nas ações das personas, identificando os problemas que cada funcionalidade resolve e os benefícios que trazem.

No entanto, durante a verificação, foram observadas algumas inconsistências: o PBI "Fazer atualizações e melhorias" não segue corretamente o modelo ARO, apresentando ausência do objeto, e alguns PBIs foram organizados sem seguir a prioridade estabelecida. Além disso, as histórias de usuário, que deveriam ser derivadas diretamente dos PBIs, não seguiram o modelo de escrita proposto, o que gerou inconsistências na forma como as histórias foram elaboradas em relação aos PBIs originais.

Pergunta | Check | Comentários
-------- | ----- | ----------
O Canvas PBB possui um Canvas | NÃO | Não há na documentação da equipe o acesso ao Canvas do PBB.
O Canvas PBB possui a identificação do Produto | SIM | --
Foram listados os problemas atuais do cliente |  SIM | --
Foram listado as expectativas do cliente com o produto | SIM | --
Foi realizada a criação de personas | SIM | --
Foram listadas as ações das personas (O que elas fazem hoje e o que elas desejam fazer com o sistema) | SIM | --
Foram criadas as funcionalidades a partir das ações das personas | SIM | -- 
Foram listadas os problemas em as funcionalidades que elas resolvem | SIM | -- 
Foram listadas os benefícios que as funcionalidades trazem às personas | SIM | --
Foram criados os PBIs das funcionalidades seguindo o modelo ARO. | NÃO | O PBI "Fazer atualizações e melhorias" possui a ausência do Objeto no modelo ARO. O restante está seguindo o padrão.
Os PBIs foram priorizados | SIM | -- 
Foram criadas as histórias de usuário usando o PBI, personas e benefícios | NÃO | A escrita dos PBIs nas US's em comparação às PBIs isoladamente foram alteradas.
As histórias de usuários possuem critérios de aceitação | SIM | -- 
Os PBIs estão organizados verticalmente pelo valor de prioridade | NÃO | As US's foram montadas e receberam o seus códicos sem considerar a ordem de prioridade estabelecido nos PBIs.

## 2. Validação
A validação do PBB envolveu uma análise detalhada da qualidade e coerência de cada item desenvolvido, comparando-os com o contexto do estudo de caso HealthNet. Os problemas e expectativas identificados foram considerados apropriados e relevantes, assim como as personas e suas atividades. As funcionalidades criadas foram bem associadas às personas e apresentaram um nível adequado de granularidade. No entanto, foi identificado que, em alguns casos, os benefícios descritos para as funcionalidades não eram suficientemente específicos, abrangendo vantagens que poderiam se aplicar a múltiplas funcionalidades, o que comprometeu a clareza.

Adicionalmente, observou-se que as User Stories não estavam alinhadas ao modelo padrão de escrita, que envolve a estrutura "Eu, como [persona], posso [ação], para [valor de negócio]". Além disso, os critérios de aceitação, embora relevantes, foram redigidos de maneira inadequada, apresentando a visão das personas como executoras dos critérios, o que dificulta a compreensão das condições necessárias para o funcionamento da User Story. A reformulação dos critérios para um formato mais imparcial e padronizado é necessária para melhorar a qualidade das validações.

Pergunta | Check | Comentários
-------- | ----- | ----------
O PBB está coerente com o estudo de caso HealthNet | SIM | --
Os problemas identificados são coerentes com o contexto | SIM | -- 
As expectativas são coerentes com o contexto | SIM | --
As personas identificadas são coerentes com o contexto | SIM | -- 
As atividades de cada persona são coerentes com a sua declaração e o contexto | SIM | --
As funcionalidades são coerentes com a persona com a qual estão associadas | SIM | --
As funcionalidades possuem grau de granularidade alto | SIM | --
Os problemas de cada funcionalidade são coerentes com a funcionalidade com o qual estão associados | SIM | -- 
Os benefícios de cada funcionalidade são coerentes com a funcionalidade com o qual estão associados | NÃO | Em alguns benefícios, o texto não é focado na funcionalidade em sí, mas relata um benefício amplo e que outras funcionalidades poderiam trazer também.
Os PBIs são coerentes com as funcionalidades com a qual estão associados | SIM | --
Os PBIs foram escritos com o mesmo modelo (Estão padronizados) | SIM | --
As USs estão estruturadas no formato: "Eu, como [persona], posso [ação], para [valor de negócio]" | NÃO | Nenhuma das User Story seguem o modelo de escrita.
Os critérios de aceitação estão coerentes com a US a qual estão associados | SIM | -- 
Os critérios de aceitação informam apenas as condições para a US funcionar | NÃO | Os critérios de aceitação foram escritos como se as personas realizassem os critérios. Deverá ser feito pensado em qualquer usuário.


## Histórico de Versão:
Data | Versão | Descrição | Autor | Revisores 
---- | ------ | --------- | ----- | ---------
04/09/24 | 1.0 | Criação do documento | Daniel Rodrigues | Jésus Gabriel