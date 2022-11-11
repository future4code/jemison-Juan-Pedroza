1-
a)
Esse comando deleta a coluna salary da tabela.

b)
Altera a coluna gender para sex.

c)
Não faz nada porque já foi alterado de gender para sex, então não é possivel trocar algo que não existe mais.

d)
ALTER TABLE Actors CHANGE sex gender VARCHAR(100);


2-
a)
UPDATE Actors SET nome = "Teste", birth_date = "2000-01-02" WHERE id = "3";

b)
UPDATE Actors SET UPPER('Juliana Paes') WHERE id = "3";

c)
UPDATE Actor SET nome = "Juliana Paes", birth_date = "1979-03-26", gender = "female" WHERE id = "5";

d)
Não dá erro, mas nada acontece pois a tabela não existe.


3- 
a)
DELETE from Actors WHERE nome = "Fernanda Montenegro";

b)
DELETE from Actors WHERE genre = "male" AND salary > 1000000;


4-
a)
SELECT MAX(salary) FROM Actor;

b)
SELECT MIN(salary) FROM Actor WHERE gender = "female";

c)
SELECT COUNT(*) FROM Actor WHERE gender = "female";

d)
SELECT SUM(salary) FROM Actor;


5-
a)
Conta quantos atores e atrizes estão na tabela e os agrupa por genero.

b)
SELECT id, nome FROM Actor WHERE gender = 'female' ORDER BY nome DESC LIMIT 4;

c)
SELECT * FROM Actor ORDER BY salary ASC LIMIT 4;

d)
SELECT * FROM Actor ORDER BY salary ASC LIMIT 3;

e)
SELECT AVG(salary), gender FROM Actor GROUP BY gender;


6-
a)
ALTER TABLE Movies ADD playing_limit_date date;

b)
ALTER TABLE Filmes CHANGE avaliacao rating float;

c)
UPDATE Filmes SET playing_limit_date = "2020-12-31" WHERE clausula_do_filme_atualizado = "001"

d)
DELETE FROM Filmes WHERE clausula_do_filme_deletado = "001"