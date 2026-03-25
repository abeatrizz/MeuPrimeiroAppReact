
# 🎬 MovieApp: MVP de Exploração e Gestão de Filmes

### 📋 Visão Geral do Produto
O **MovieApp** é um aplicativo mobile desenvolvido para solucionar a fragmentação de informações sobre cinema. 
Como gestora de produto, o foco deste MVP foi criar uma interface intuitiva que permitisse ao usuário descobrir filmes populares, realizar buscas precisas e gerenciar uma lista personalizada de favoritos com persistência de dados local.

### ✨ Funcionalidades e Valor de Negócio
* **Curadoria de Conteúdo**: Lista dinâmica de filmes populares integrada via API externa.
* **Busca Estratégica**: Filtro por título para agilizar a jornada de descoberta do usuário.
* **Retenção e Engajamento**: Sistema de favoritos com **AsyncStorage**, permitindo que o usuário mantenha seus dados mesmo após fechar o app.
* **Experiência do Usuário (UX)**: Implementação de *Pull-to-refresh* e navegação fluida para garantir alta usabilidade.

### 🛠️ Tecnologias e Arquitetura
* **React Native & Expo**: Framework escolhido para garantir agilidade na entrega e performance multiplataforma[cite: 200, 209].
* **TypeScript**: Utilizado para garantir a integridade dos dados e facilitar a manutenção do código[cite: 205].
* **Axios**: Gerenciamento eficiente de requisições HTTP para a API do TMDB[cite: 58].
* **Expo Router**: Estrutura de navegação baseada em arquivos, focada em organização e escalabilidade[cite: 16, 140].

### 🚀 Guia de Execução (Fluxo do Desenvolvedor)

1. **Clonagem do Repositório**: Baixe o projeto do GitHub para o seu ambiente local.
   ```bash
   git clone https://github.com/abeatrizz/MeuPrimeiroAppReact
   cd MeuPrimeiroAppReact
   ```

2. **Instalação de Dependências**: Prepare o ambiente instalando todos os recursos necessários para o funcionamento do software.
   ```bash
   npm install
   ```

3. **Configuração de API (Segurança do Produto)**:
   - Obtenha sua chave em [TMDB Settings](https://www.themoviedb.org/settings/api).
   - No arquivo `constants/Api.ts`, substitua o campo correspondente pela sua API Key para garantir a comunicação segura com o provedor de dados.

4. **Inicialização**: Inicie o servidor de desenvolvimento para validar o produto.
   ```bash
   npx expo start
   ```
   *Dica: Utilize o app **Expo Go** no seu smartphone para testar o produto em tempo real.*

### 🎨 Estrutura do Projeto (Visão Sistêmica)
```
[cite_start]├── app/               # Telas e Configuração de Navegação
[cite_start]├── constants/         # Configurações de Integração (API) 
[cite_start]├── services/          # Camada de Lógica e Armazenamento (Storage)
[cite_start]└── assets/            # Recursos Visuais do Produto
