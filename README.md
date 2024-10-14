
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
- **Banco de dados H2** (ou MySQL, Postgres)
- **Maven** (para gerenciamento de dependências)

### Frontend (React)
- **React 18+**
- **JavaScript (ES6+)**
- **Axios** (para requisições HTTP)
- **React Router** (para navegação entre páginas)
- **Bootstrap** (ou outro framework CSS para estilização)

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

## Estrutura do Projeto

### Backend (Java Spring Boot)
```
/src/main/java/com/example/project
│
├── controller
│   └── TaskController.java        # Controlador REST para tarefas
│
├── model
│   └── Task.java                  # Entidade de Tarefa
│
├── repository
│   └── TaskRepository.java        # Interface de persistência (Spring Data JPA)
│
├── service
│   └── TaskService.java           # Regras de negócio para tarefas
│
└── Application.java               # Classe principal da aplicação
```

### Frontend (React)
```
/src
│
├── components
│   ├── TaskForm.js                # Formulário para criação de nova tarefa
│   ├── TaskList.js                # Lista de tarefas, agrupadas e ordenadas por data
│   └── TaskItem.js                # Componente individual para exibir uma tarefa
│
├── services
│   └── TaskService.js             # Serviço para consumo da API REST (usando Axios)
│
├── App.js                         # Componente principal da aplicação
└── index.js                       # Ponto de entrada da aplicação
```

## Configuração e Execução

### Backend

1. **Pré-requisitos**: Instalar Java 17+ e Maven.
2. Clone o repositório:
   ```bash
   git clone https://github.com/usuario/repositorio-backend.git
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
   git clone https://github.com/usuario/repositorio-frontend.git
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

### Exemplo de requisição usando Axios

```javascript
import axios from 'axios';

axios.get('/api/tasks')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Erro ao buscar tarefas:', error);
  });
```

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.
