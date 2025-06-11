# 🎬 App de Filmes

Um aplicativo React Native com Expo que permite explorar filmes populares, buscar filmes e gerenciar uma lista de favoritos.

## ✨ Funcionalidades

- 📱 Interface moderna e intuitiva
- 🎯 Lista de filmes populares
- 🔍 Busca de filmes por título
- ❤️ Sistema de favoritos com armazenamento local
- 🌐 Integração com a API do TMDB
- 🖼️ Exibição de posters e sinopses
- 🔄 Pull-to-refresh para atualizar a lista

## 🚀 Tecnologias Utilizadas

- React Native
- Expo
- TypeScript
- Axios para requisições HTTP
- AsyncStorage para armazenamento local
- Expo Router para navegação
- TMDB API para dados de filmes

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn
- Expo CLI
- Um dispositivo móvel com Expo Go instalado ou um emulador

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/abeatrizz/MeuPrimeiroAppReact
cd MeuPrimeiroAppReact
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Configure a API Key do TMDB:
   - Crie uma conta em [TMDB](https://www.themoviedb.org/signup)
   - Obtenha sua API Key em [TMDB Settings](https://www.themoviedb.org/settings/api)
   - Substitua `SUA_API_KEY_AQUI` no arquivo `constants/Api.ts` pela sua API Key

4. Inicie o projeto:
```bash
npx expo start
```

## 📱 Como Usar

1. **Tela Principal**
   - Visualize os filmes populares
   - Use a barra de busca para encontrar filmes específicos
   - Toque no botão de coração para adicionar/remover dos favoritos
   - Arraste para baixo para atualizar a lista

2. **Tela de Favoritos**
   - Acesse através do botão "Favoritos" na tela principal
   - Visualize todos os filmes favoritados
   - Remova filmes da lista de favoritos

## 🎨 Estrutura do Projeto

```
├── app/
│   ├── index.tsx          # Tela principal
│   ├── favorites.tsx      # Tela de favoritos
│   └── _layout.tsx        # Configuração de navegação
├── constants/
│   └── Api.ts            # Configurações da API
├── services/
│   ├── api.ts            # Serviços de API
│   └── storage.ts        # Serviços de armazenamento local
└── assets/               # Recursos estáticos
```

## 🤝 Contribuindo

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/AmazingFeature`)
3. Faça o Commit das suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Faça o Push para a Branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. 

## 🙏 Agradecimentos

- [TMDB](https://www.themoviedb.org/) pela API de filmes
- [Expo](https://expo.dev/) pelo framework
- [React Native](https://reactnative.dev/) pela plataforma

## 📧 Contato

Link do Projeto: [https://github.com/abeatrizz
