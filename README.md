# Projeto Dev Estudos

## Time
- [Flávia Ramos](https://github.com/FlaviaRamosdaSilva)
- [Leonardo Campos](https://github.com/CamposLeo95)
- [Paulo Gilvan](https://github.com/paulogilvan)
- [Vanessa Lebrão](https://github.com/Vanlebrao)

## Tecnologias Utilizadas
1. React
2. Styled Components
3. Node.js
4. PostgreSQL
5. Express
6. Yup
7. Sequelize
8. Banco de dados PostgreSQL

## Ideia Geral
Proporcionar ao aluno um espaço para organizar o cronograma de estudos em formato de backlog, disponibilizar um cronômetro do método pomodoro, lista de tarefas e tracking de hábitos mensal. Em cada página, deverá haver um informativo com dicas de organização.

## Passo do Projeto

### 1. Tela de Login do Aluno do DevClub
- Nessa tela haverá dois inputs, um para login e outro para senha, interligado com o banco de dados do curso, facilitando a entrada do aluno.

### 2. Tela de Bem-vindos
- Breve descrição da aplicação com dicas de metas e organização.
- Deverá conter o menu ao lado esquerdo da tela com as páginas.
- Canto superior direito haverá um ícone com as iniciais ou foto do aluno, conforme banco de dados.
- Em cada aba, haverá uma breve descrição de cada espaço na aplicação.

### 3. Tela de Cronograma
- Tabela com os dias da semana, denominados de domingo à sábado.
- Canto superior direito um ícone de “mais” para cadastrar as aulas e as tarefas semanais.
- Esse deve estar cadastrado com o banco de dados da escola, para busca das aulas descritas em qual módulo pertencente e tempo de duração de cada aula.

### 4. Tela de Estudos
- Realizar um cronômetro, contendo:
  - Status estudando / pausa
  - Tempo de foco
  - Tempo de descanso
  - Quantidade de ciclos
  - Botão de reiniciar tempo
- Adicionar um ícone de “mais” para configuração do cronômetro:
  - Tempo de foco
  - Tempo de descanso
  - Quantidade de ciclos
  - Botão para salvar as alterações
- Ao lado, deve conter um espaço com uma lista de tarefas:
  - Lista conectada ao backlog, todas as tarefas adicionadas no cronograma devem aparecer
  - Deve haver uma flag para marcar se realizou a tarefa ou não

### 5. Tela de Tracking de Hábitos
- Em cada tabela deverá:
  - Realizar tabela contendo numeração de 1 a 31:
  - Cada tabela deverá conter um espaço para adicionar:
    - O hábito
    - Horário da tarefa
  - Flag para conclusão da tarefa, sendo:
    - Se tarefa cumprida, o dia deverá ficar verde
    - Se tarefa não cumprida, o dia ficará em vermelho

### 6. Gamificação e Avatar
- Desenvolver uma tela com as opções de avatar, para escolha do aluno:
  - Iniciante: Baby
  - Iniciante 2: Criança
  - Intermediário: Adolescente
  - Pleno: Jovem Dev
  - Avançado: Dev Sênior
- Desenvolver um sistema de pontuação, conforme evolução do aluno.
- Em cada tela, deixar o avatar visível.

## Próximos passos
    Aprimorar o projeto para o uso dos aluno do DevClub.
    Escalonar a aplicação
    Desenvolver um designer arrojado e compatível com marca da escola.


Por favor, certifique-se de atualizar os testes conforme apropriado.

## Orientação 
   [Rodolfo Mori](https://github.com/rodolfomori)