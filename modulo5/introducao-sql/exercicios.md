1- 
a) 
Representa um número não inteiro.

b) 
Show é usado para mostrar elementos criados, como tabelas ou schemas.

c) 
Describe é usado para descrever o formato de uma tabela e quais valores são esperados.


2- 
a) 
insert into Actor (id, nome, salary, birth_date, gender)
values(002, "Glória Pires", 1200000, "1963-08-23", "female");

b) 
Error Code: 1062. Duplicate entry '2' for key 'PRIMARY'	0.156 sec
Entrada duplicada. Não é possível colocar dois valores usando o mesmo id.


3-
a)
SELECT * from Actor WHERE gender = "female"

b)
SELECT salary from Actor WHERE name = "Tony Ramos"

c)

d)
SELECT id,nome,salary from Actor WHERE salary > 500000

e)
Não deu erro nenhum, apenas não retornou nenhuma informação


4- 
a) 
Seleciona todas as informaçoes da tabela Actor que o nome comece com a letra A ou J e que o salário seja maior que 300000.

b)
SELECT * FROM Actor
WHERE (nome NOT LIKE "A%") AND salary > 350000

c)
SELECT * FROM Actor
WHERE (nome LIKE "%G%" OR nome LIKE "%g%")

d)
SELECT * FROM Actor
WHERE (nome LIKE "%a%" OR nome LIKE "%A%" OR nome LIKE "%g%" OR nome LIKE "%G%") AND salary BETWEEN 350000 AND 900000;


5-
a)
CREATE TABLE Filmes (
	id VARCHAR(255) primary KEY,
    titulo VARCHAR(255) NOT NULL,
    sinopse TEXT NOT NULL,
    data_lancamento DATE NOT NULL,
    avaliacao VARCHAR(10) NOT NULL
);

b)
insert into Filmes (id, titulo, sinopse, data_lancamento, avaliacao)
values(001, "Se Eu Fosse Você", "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos", "2006-01-06", "7");

c)
insert into Filmes (id, titulo, sinopse, data_lancamento, avaliacao)
values(002, "Doce de mãe", "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela", "2012-12-27", "10");

d)
insert into Filmes (id, titulo, sinopse, data_lancamento, avaliacao)
values(003, "Dona Flor e Seus Dois Maridos", "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.", "2017-11-02", "8");

e)
insert into Filmes (id, titulo, sinopse, data_lancamento, avaliacao)
values(004, "O Auto da Compadecida", "As aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região.", "2000-09-10", "9");


6-
a)
SELECT id, titulo FROM Filmes WHERE (id = 002)

b)
SELECT titulo FROM Filmes WHERE (titulo = "Nome")

c)
id, titulo, sinopse from Filmes WHERE avaliacao >= 7


7-
a)
SELECT * from Filmes WHERE titulo LIKE "%vida%";

b)
SELECT * from Filmes WHERE titulo LIKE "%Fosse%";

c)
SELECT * from Filmes WHERE data_lancamento < CURRENT_DATE;

d)
SELECT * from Filmes WHERE titulo LIKE "%Fosse%" AND data_lancamento < CURRENT_DATE AND avaliacao >= 7;
