# Next 14

## [Deploy](https://next-blog-app-sooty-six.vercel.app/)

## Серверные и клиентские компоненты

![React components](https://raw.githubusercontent.com/michey85/next-blog-app/client-basic/example-1.webp)

### Правила вложения

- нельзя импортировать серверный компонент внутри клиентского
- можно пробрасывать серверные компоненты в клиентские как `children`

![Пример страницы](https://raw.githubusercontent.com/michey85/next-blog-app/client-basic/example-2.avif)

Используйте клиентские компоненты когда:

- необходимо использовать хуки
- когда необходимы обработчики событий на пользовательские действия
- при использовании браузерного API
- когда используется классовый компонент

Используйте серверные компоненты, когда:

- вы получаете данные через серверное API
- когда нужен прямой доступ к ресурсам бэкенда
- когда используется sensetive информация (ключи API, токены и пр.)
- когда используются тяжелые зависимости

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
