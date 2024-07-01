# Challenge-Mercado-Libre-API

# Proyecto: Página de Compras con API de Mercado Libre

## Descripción

Este proyecto es una aplicación web desarrollada con React y TypeScript que consume la API de Mercado Libre para crear una página de compras. La aplicación permite buscar productos, ver detalles, añadir productos al carrito, gestionar el carrito y finalizar la compra.

## Funcionalidades

### Home Page:

- **Buscador**: Incluye un campo de búsqueda y un botón para realizar la búsqueda.
- **Lista de Resultados**: Muestra los resultados de búsqueda con la imagen del producto, título y precio.
- **Productos Aleatorios**: Muestra productos destacados si no se realiza una búsqueda.

### Detalles del Producto:

- **Información del Producto**: Muestra detalles adicionales como descripción, precio e imágenes adicionales.
- **Añadir al Carrito**: Permite añadir el producto al carrito de compras.

### Carrito de Compras:

- **Añadir Productos**: Permite añadir productos al carrito y los guarda en localStorage.
- **Visualización del Carrito**: Muestra los productos añadidos al carrito, la cantidad de cada producto y el precio total.
- **Gestión del Carrito**: Permite aumentar/disminuir la cantidad de productos y eliminar productos del carrito.

### Finalizar Compra:

- **Botón de Finalización**: Permite finalizar la compra mostrando un mensaje de éxito y limpiando el carrito.

## Endpoints Utilizados

### Buscar Productos:

`https://api.mercadolibre.com/sites/MLA/search?q=valorBuscado`

### Detalles del Producto:

`https://api.mercadolibre.com/items/ID_DEL_PRODUCTO`

## Instalación

### Prerrequisitos

- Node.js
- npm

### Pasos para la Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu_usuario/challenge-mercado-libre-react.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd challenge-mercado-libre-react
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Ejecuta:
   ```bash
   npm run dev
   ```

## Estructura del Proyecto

```plaintext
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── Cart.tsx
│   │   ├── CartItem.tsx
│   │   ├── Checkout.tsx
│   │   ├── Footer.tsx
│   │   ├── HomePage.tsx
│   │   ├── NavBar.tsx
│   │   ├── ProductDetail.tsx
│   │   ├── ProductList.tsx
│   │   └── Carousel.tsx
│   ├── context
│   │   └── CartContext.tsx
│   ├── services
│   │   └── api.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tsconfig.json
└── vite.config.ts

```
