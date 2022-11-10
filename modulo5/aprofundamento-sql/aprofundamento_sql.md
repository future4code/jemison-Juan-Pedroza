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