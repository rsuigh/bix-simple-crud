# Bix-simple-crud Backend

Repositório do backend da ferramenta desenvolvida para o Easy Seating


# Guia para desenvolvimento

Utilizaremos: Python 3, Django 3.2, Docker e docker compose

### Uso

- Docker
	- construir os _containers_: `docker compose build`
	- iniciar o django: `docker compose up` (caso queira deixar o terminal livre, adicione `-d`)
- Django
	- _shell_: `docker-compose exec web ./manage.py shell`
	- migração do bando de dados: `docker compose exec web ./manage.py makemigrations` e depois `docker compose exec web ./manage.py migrate`
	- testes unitários: `docker-compose exec web ./manage.py test`


Os comandos `docker compose`devem ser executados na raiz do projeto.


### Instruções para rodar o ambiente local

1. Clonar o repositório
2. Construir os containers
3. Migrar o banco de dados

Para acessar use o link localhost:85
