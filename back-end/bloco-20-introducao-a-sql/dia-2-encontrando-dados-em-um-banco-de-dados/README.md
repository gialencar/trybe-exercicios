``` sql
-- Escreva uma query para exibir a string "This is SQL Exercise, Practice and Solution".
SELECT "This is SQL Exercise, Practice and Solution" AS exercise_01;

-- Escreva uma query para exibir três números em três colunas.
SELECT 1, 2, 3;

-- Escreva uma query para exibir a soma dos números 10 e 15.
SELECT 10 + 15;

-- Escreva uma query para exibir o resultado de uma expressão aritmética qualquer.
SELECT 2 * 3.14 * 42;

-- Escreva uma query para exibir todas as informações de todos os cientistas.
SELECT * FROM Scientists.Scientists;

-- Escreva uma query para exibir o nome como "Nome do Projeto" e as horas como "Tempo de Trabalho" de cada projeto.
SELECT `Name` AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho' FROM Scientists.Projects;

-- Escreva uma query para exibir o nome dos cientistas em ordem alfabética.
SELECT `Name` AS 'Cientista' FROM Scientists.Scientists ORDER BY `Name`;

-- Escreva uma query para exibir o nome dos Projetos em ordem alfabética descendente.
SELECT `Name` AS 'Nome do projeto' FROM Scientists.Projects ORDER BY `Name` DESC;

-- Escreva uma query que exiba a string "O projeto Name precisou de Hours horas para ser concluído." para cada projeto.
SELECT
	CONCAT('O projeto ', `Name`, ' precisou de ', Hours, ' horas para ser concluído.') AS 'Tempo de conclusão de projeto'
FROM Scientists.Projects;

-- Escreva uma query para exibir o nome e as horas dos três projetos com a maior quantidade de horas.
SELECT `Name`, Hours FROM Scientists.Projects ORDER BY Hours DESC LIMIT 3;

-- Escreva uma query para exibir o código de todos os projetos da tabela AssignedTo sem que haja repetições.
SELECT DISTINCT Project FROM Scientists.AssignedTo;

-- Escreva uma query para exibir o nome do projeto com maior quantidade de horas.
SELECT `Name` FROM Scientists.Projects ORDER BY Hours DESC LIMIT 1;

-- Escreva uma query para exibir o nome do segundo projeto com menor quantidade de horas.
SELECT `Name` FROM Scientists.Projects ORDER BY Hours LIMIT 1 OFFSET 1;

```