
# Gerenciador de Tarefas - Spring Boot & React

## Descrição do Projeto

Este é um site de gerenciamento de tarefas que permite aos usuários criar tarefas com nome e data. As tarefas são exibidas em uma lista, ordenadas e agrupadas por datas. O backend foi implementado com **Java Spring Boot**, seguindo o padrão de projeto **MVC**, enquanto o frontend utiliza **React** e interage com o backend por meio de uma **API REST**.

## Funcionalidades

- Criação de novas tarefas, com nome e data.
- Exibição de uma lista de tarefas, agrupadas e ordenadas por data.
- Validação de dados no frontend e backend.
- Persistência de dados no banco de dados.
- Interface simples e amigável.

## Tecnologias Utilizadas

### Backend (Java Spring Boot)
- **Java 17+**
- **Spring Boot 3.0+**
  - Spring MVC (Model-View-Controller)
  - Spring Data JPA (para persistência)
  - Spring Security (opcional, para autenticação)
- **Banco de dados H2** 
- **Maven** (para gerenciamento de dependências)

### Frontend (React)
- **React 18+**
- **JavaScript (ES6+)**
- **React Router** (para navegação entre páginas)
- **Styled Components**

## Arquitetura

A arquitetura do projeto é dividida em duas camadas principais:

### Backend - Padrão MVC

- **Model**: Representa as entidades, neste caso, as tarefas.
- **Controller**: Manipula requisições REST, gerenciando tarefas (criação e listagem).
- **Service**: Camada intermediária entre o Controller e o Repository, contendo a lógica de negócios.
- **Repository**: Interface para interagir com o banco de dados usando Spring Data JPA.

### Frontend - Padrão REST

- O frontend consome a API REST fornecida pelo backend para gerenciar e exibir as tarefas.
- A lista de tarefas é exibida em uma interface ordenada e agrupada por data, permitindo uma navegação amigável para os usuários.

## Configuração e Execução

### Backend

1. **Pré-requisitos**: Instalar Java 17+ e Maven.
2. Clone o repositório:
   ```bash
   git clone https://github.com/ThiagoR0810/ToDoList.git
   ```
3. Entre no diretório do projeto e execute:
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```
4. O servidor estará disponível em: `http://localhost:8080`.

### Frontend

1. **Pré-requisitos**: Instalar Node.js e npm.
2. Clone o repositório:
   ```bash
   git clone https://github.com/ThiagoR0810/ToDoList.git
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o servidor:
   ```bash
   npm start
   ```
5. O frontend estará disponível em: `http://localhost:3000`.

## API Endpoints

| Método | Endpoint        | Descrição                               |
|--------|-----------------|-----------------------------------------|
| GET    | /api/tasks       | Lista todas as tarefas                  |
| POST   | /api/tasks       | Cria uma nova tarefa                    |
| DELETE | /api/tasks/{id}  | Remove uma tarefa pelo ID               |

