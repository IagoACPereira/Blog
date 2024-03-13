# Blog

API Rest de Blog.

> Para os endpoints de manipulação de dados será necessário estar com o token gerado pela rota de login no Header.

# Índice
1. [Login](#Login)
2. [Usuários](#Usuários)
    - [Adicionar Usuário](#Adicionar-Usuário)
    - [Exibir Todos Usuários](#Exibir-Todos-Usuários)
    - [Exibir Um Usuário](#Exibir-Um-Usuário)
    - [Alterar Usuário](#Alterar-Usuário)
    - [Deletar Usuário](#Deletar-Usuário)
3. [Postagens](#Postagens)
    - [Adicionar Postagem](#Adicionar-Postagem)
    - [Exibir Todas Postagens](#Exibir-Todas-Postagens)
    - [Exibir Uma Postagem](#Exibir-Uma-Postagem)
    - [Atualizar Postagem](#Atualizar-Postagem)
    - [Curtir Postagem](#Curtir-Postagem)
    - [Descurtir Postagem](#Descurtir-Postagem)
    - [Deletar Postagem](#Deletar-Postagem)
4. [Comentários](#Comentários)
    - [Adicionar Comentário](#Adicionar-Comentário)
    - [Exibir Todos Comentários](#Exibir-Todos-Comentários)
    - [Exibir Um Comentário](#Exibir-Um-Comentário)
    - [Atualizar Comentário](#Atualizar-Comentário)
    - [Curtir Comentário](#Curtir-Comentário)
    - [Descurtir Comentário](#Descurtir-Comentário)
    - [Deletar Comentário](#Deletar-Comentário)
---
## Login
**Método**: POST
**Endpoint**: `/login`  
**Requisição**: 
| Dados | Tipo | Descrição |
|-|-|-|
| **email** | _String_ | Email do usuário |
| **senha** | _String_ | Senha do usuário |

**Resposta**: (200 OK)
```json
{
	"mensagem": "Usuário autenticado com sucesso.",
	"token": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy.zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
	"status": 200
}
```
---
## Usuários 
> Diferente dos demais a rota de usuários só é permitido cadastrar um novo usuário, os demais metodos HTTP será necessário o token de autorização no Header.

### _[Adicionar Usuário]_

**Método**: POST
**Endpoint**: `/usuarios`
**Requisição**: 
| Dados | Tipo | Descrição |
|-|-|-|
| **nome** | _String_ | Nome do usuário |
| **email** | _String_ | Email do usuário |
| **senha** | _String_ | Senha do usuário |
**Resposta**: (201 Created)
```json
{
	"mensagem": "Usuário Test adicionado com sucesso.",
	"usuario": {
		"id": 1,
		"nome": "Test",
		"email": "test.test@email.com",
		"senha": "$2a$10$wez/rSZKaXNDyqQfLl8gaO/o3Zq5Xe87A4mKYXzORHx2FWobJIg/2"
	},
	"status": 201
}
```
### _[Exibir Todos Usuários]_
**Método**: GET
**Endpoint**: `/usuarios`
**Header**:
| Dados | Values | Descrição |
|-|-|-|
| **Authorization** | _Token JWT_ | Token gerado no login |
**Resposta**: (200 OK)
``` json
{
	"count": 3,
	"rows": [
		{
			"id": 1,
			"nome": "Test",
			"email": "test.test@email.com",
			"senha": "$2a$10$wez/rSZKaXNDyqQfLl8gaO/o3Zq5Xe87A4mKYXzORHx2FWobJIg/2"
		},
		{
			"id": 2,
			"nome": "Test",
			"email": "test.test@email.com",
			"senha": "$2a$10$D1JI7EVc29jHJWsAr2X2yu3rlmw/vMhlbb66br5CMsTWps0QI6RHi"
		},
		{
			"id": 3,
			"nome": "Test",
			"email": "test.test@email.com",
			"senha": "$2a$10$lSng/gvjjw0b4cnLFMuOpe3ETH1OeeTw5X9uOz.yCPmb39iAnQDz2"
		}
	]
}
```
### _[Exibir Um Usuário]_
**Método**: GET
**Endpoint**: `/usuarios/1`
**Header**:
| Dados | Values | Descrição |
|-|-|-|
| **Authorization** | _Token JWT_ | Token gerado no login |
**Resposta**: (200 OK)
```json
{
	"id": 1,
	"nome": "Test",
	"email": "test.test@email.com",
	"senha": "$2a$10$wez/rSZKaXNDyqQfLl8gaO/o3Zq5Xe87A4mKYXzORHx2FWobJIg/2"
}
```
### _[Alterar Usuário]_
**Método**: PUT
**Endpoint**: `/usuarios/1`
**Header**:
| Dados | Values | Descrição |
|-|-|-|
| **Authorization** | _Token JWT_ | Token gerado no login |
**Requisição**: 
| Dados | Tipo | Descrição |
|-|-|-|
| **nome** | _String_ | Nome do usuário |
| **email** | _String_ | Email do usuário |
| **senha** | _String_ | Senha do usuário |
**Resposta**: (200 OK)
```json
{
	"mensagem": "Usuário atualizado com sucesso.",
	"status": 200
}
```

### _[Deletar Usuário]_
**Método**: DELETE
**Endpoint**: `/usuarios/1`
**Header**:
| Dados | Values | Descrição |
|-|-|-|
| **Authorization** | _Token JWT_ | Token gerado no login |
**Resposta**: (200 OK)
```json
{
	"mensagem": "Usuário deletado com sucesso.",
	"status": 200
}
```
---
## Postagens
### _[Adicionar Postagem]_
**Método**: POST
**Endpoint**: `/postagens`
**Header**:
| Dados | Values | Descrição |
|-|-|-|
| **Authorization** | _Token JWT_ | Token gerado no login |
**Requisição**: 
| Dados | Tipo | Descrição |
|-|-|-|
| **titulo** | _String_ | Título da postagem |
| **conteudo** | _Text_ | Conteúdo da postagem |
| **dataDeCriacao** | _String_ | Data de Criação da postagem |
| **usuarioId** | _Integer_ | ID do usuário que fez a postagem |
**Resposta**: (201 Created)
```json
{
	"mensagem": "Postagem adicionada com sucesso.",
	"postagem": {
		"curtidas": 0,
		"descurtidas": 0,
		"id": 1,
		"titulo": "titulo",
		"conteudo": "conteúdo",
		"dataDeCriacao": "01/01/01",
		"usuarioId": 2
	},
	"status": 201
}
```

### _[Exibir Todas Postagens]_
**Método**: GET
**Endpoint**: `/postagens`
**Resposta**: (200 OK)
```json
{
	"count": 3,
	"rows": [
		{
			"id": 1,
			"titulo": "titulo",
			"conteudo": "conteúdo",
			"dataDeCriacao": "01/01/01",
			"curtidas": 0,
			"descurtidas": 0,
			"usuario": {
				"id": 2,
				"nome": "Test"
			}
		},
		{
			"id": 2,
			"titulo": "titulo",
			"conteudo": "conteúdo",
			"dataDeCriacao": "01/01/01",
			"curtidas": 0,
			"descurtidas": 0,
			"usuario": {
				"id": 2,
				"nome": "Test"
			}
		},
		{
			"id": 3,
			"titulo": "titulo",
			"conteudo": "conteúdo",
			"dataDeCriacao": "01/01/01",
			"curtidas": 0,
			"descurtidas": 0,
			"usuario": {
				"id": 2,
				"nome": "Test"
			}
		}
	]
}
```

### _[Exibir Uma Postagem]_
> Os comentários das postagens aparecerão quando o usuário solicitar apenas uma postagem.

**Método**: GET
**Endpoint**: `/postagens/1`
**Resposta**: (200 OK)
```json
{
	"id": 1,
	"titulo": "titulo",
	"conteudo": "conteúdo",
	"dataDeCriacao": "01/01/01",
	"curtidas": 0,
	"descurtidas": 0,
	"usuario": {
		"id": 2,
		"nome": "Test",
		"email": "test.test@email.com"
	},
	"comentarios": []
}
```

### _[Atualizar Postagem]_
**Método**: PUT
**Endpoint**: `/postagens/1`
**Header**:
| Dados | Values | Descrição |
|-|-|-|
| **Authorization** | _Token JWT_ | Token gerado no login |
**Requisição**: 
| Dados | Tipo | Descrição |
|-|-|-|
| **titulo** | _String_ | Título da postagem |
| **conteudo** | _Text_ | Conteúdo da postagem |
| **dataDeCriacao** | _String_ | Data de Criação da postagem |
| **usuarioId** | _Integer_ | ID do usuário que fez a postagem |
**Resposta**: (200 OK)
```json
{
	"mensagem": "Postagem atualizada com sucesso.",
	"status": 200
}
```

### _[Curtir Postagem]_
**Método**: PUT
**Endpoint**: `/postagens/1/curtir`
**Header**:
| Dados | Values | Descrição |
|-|-|-|
| **Authorization** | _Token JWT_ | Token gerado no login |
**Resposta**: (200 OK)
```json
{
	"mensagem": "Você curtiu a postagem lorem ipsum",
	"status": 200
}
```
> _GET após curtir_
```json
{
	"id": 1,
	"titulo": "lorem ipsum",
	"conteudo": "conteúdo",
	"dataDeCriacao": "01/01/01",
	"curtidas": 1,
	"descurtidas": 0,
	"usuario": {
		"id": 2,
		"nome": "Test",
		"email": "test.test@email.com"
	},
	"comentarios": []
}
```

### _[Descurtir Postagem]_
**Método**: PUT
**Endpoint**: `/postagens/1/descurtir`
**Header**:
| Dados | Values | Descrição |
|-|-|-|
| **Authorization** | _Token JWT_ | Token gerado no login |
**Resposta**: (200 OK)
```json
{
	"mensagem": "Você descurtiu a postagem lorem ipsum",
	"status": 200
}
```
> _GET após descurtir_
```json
{
	"id": 1,
	"titulo": "lorem ipsum",
	"conteudo": "conteúdo",
	"dataDeCriacao": "01/01/01",
	"curtidas": 1,
	"descurtidas": 1,
	"usuario": {
		"id": 2,
		"nome": "Test",
		"email": "test.test@email.com"
	},
	"comentarios": []
}
```

### _[Deletar Postagem]_
**Método**: DELETE
**Endpoint**: `/postagens/1`
**Header**:
| Dados | Values | Descrição |
|-|-|-|
| **Authorization** | _Token JWT_ | Token gerado no login |
**Resposta**: (200 OK)
```json
{
	"mensagem": "Postagem deletada com sucesso.",
	"status": 200
}
```
---

## Comentários
### _[Adicionar Comentário]_
**Método**: POST
**Endpoint**: `/comentarios`
**Header**:
| Dados | Values | Descrição |
|-|-|-|
| **Authorization** | _Token JWT_ | Token gerado no login |
**Requisição**: 
| Dados | Tipo | Descrição |
|-|-|-|
| **titulo** | _String_ | Título do comentário |
| **conteudo** | _Text_ | Conteúdo do comentário |
| **dataDeCriacao** | _String_ | Data de Criação do comentário |
| **usuarioId** | _Integer_ | ID do usuário que fez o comentário |
| **postagemId** | _Integer_ | ID da postagem onde foi feito o comentário |
**Resposta**: (201 Created)
```json
{
	"mensagem": "Comentário adicionado com sucesso.",
	"comentario": {
		"curtidas": 0,
		"descurtidas": 0,
		"id": 1,
		"conteudo": "conteúdo",
		"dataDeCriacao": "01/01/01",
		"postagenId": 2,
		"usuarioId": 2
	},
	"status": 201
}
```

### _[Exibir Todos Comentários]_
**Método**: GET
**Endpoint**: `/comentarios`
**Resposta**: (200 OK)
```json
{
	"count": 2,
	"rows": [
		{
			"id": 1,
			"conteudo": "conteúdo",
			"dataDeCriacao": "01/01/01",
			"curtidas": 0,
			"descurtidas": 0,
			"postagenId": 2,
			"usuarioId": 2
		},
		{
			"id": 2,
			"conteudo": "conteúdo",
			"dataDeCriacao": "01/01/01",
			"curtidas": 0,
			"descurtidas": 0,
			"postagenId": 2,
			"usuarioId": 2
		}
	]
}
```

### _[Exibir Um Comentário]_
**Método**: GET
**Endpoint**: `/comentarios/1`
**Resposta**: (200 OK)
```json
{
	"id": 1,
	"conteudo": "conteúdo",
	"dataDeCriacao": "01/01/01",
	"curtidas": 0,
	"descurtidas": 0,
	"postagenId": 2,
	"usuarioId": 2
}
```

### _[Atualizar Comentário]_
**Método**: PUT
**Endpoint**: `/comentarios/1`
**Header**:
| Dados | Values | Descrição |
|-|-|-|
| **Authorization** | _Token JWT_ | Token gerado no login |
**Requisição**: 
| Dados | Tipo | Descrição |
|-|-|-|
| **titulo** | _String_ | Título do comentário |
| **conteudo** | _Text_ | Conteúdo do comentário |
| **dataDeCriacao** | _String_ | Data de Criação do comentário |
| **usuarioId** | _Integer_ | ID do usuário que fez o comentário |
| **postagemId** | _Integer_ | ID da postagem onde foi feito o comentário |
**Resposta**: (200 OK)
```json
{
	"mensagem": "Comentário atualizado com sucesso.",
	"status": 200
}
```

### _[Curtir Comentário]_
**Método**: PUT
**Endpoint**: `/comentarios/1/curtir`
**Header**:
| Dados | Values | Descrição |
|-|-|-|
| **Authorization** | _Token JWT_ | Token gerado no login |
**Resposta**: (200 OK)
```json
{
	"mensagem": "Você curtiu o comentário",
	"status": 200
}
```
> _GET após curtir_
```json
{
	"id": 1,
	"conteudo": "conteúdo",
	"dataDeCriacao": "01/01/01",
	"curtidas": 1,
	"descurtidas": 0,
	"postagenId": 2,
	"usuarioId": 2
}
```

### _[Descurtir Comentário]_
**Método**: PUT
**Endpoint**: `/comentarios/1/descurtir`
**Header**:
| Dados | Values | Descrição |
|-|-|-|
| **Authorization** | _Token JWT_ | Token gerado no login |
**Resposta**: (200 OK)
```json
{
	"mensagem": "Você descurtiu o comentário.",
	"status": 200
}
```
> _GET após descurtir_
```json
{
	"id": 1,
	"conteudo": "conteúdo",
	"dataDeCriacao": "01/01/01",
	"curtidas": 1,
	"descurtidas": 1,
	"postagenId": 2,
	"usuarioId": 2
}
```

### _[Deletar Comentário]_
**Método**: DELETE
**Endpoint**: `/comentarios/1`
**Header**:
| Dados | Values | Descrição |
|-|-|-|
| **Authorization** | _Token JWT_ | Token gerado no login |
**Resposta**: (200 OK)
```json
{
	"mensagem": "Comentário deletado com sucesso.",
	"status": 200
}
```
