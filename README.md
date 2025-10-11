# Open Books - Proyecto Final Angular

## Integrantes del Grupo
- David Alexander Acosta Ojeda

## Proyecto Desplegado

https://glittering-marigold-d58d91.netlify.app/

## Descripción General del Proyecto
Open Books es una aplicación web desarrollada en Angular 18 que consume la API pública de Open Library para explorar información sobre libros y autores. La aplicación implementa tres servicios principales de la API de Open Library para demostrar el consumo de servicios REST y la gestión de estado en Angular.

## Estructura del Proyecto
```
src/
├── app/
│   ├── books/                    # Módulo principal de libros
│   │   ├── components/           # Componentes reutilizables
│   │   │   ├── book-list/       # Lista de libros con items
│   │   │   │   ├── book-list.component.ts/.html
│   │   │   │   └── book-list-item/
│   │   │   ├── author-list/     # Lista de autores
│   │   │   │   └── author-list.component.ts/.html
│   │   │   ├── book-details-display/ # Visualización de detalles
│   │   │   │   └── book-details-display.component.ts/.html
│   │   │   └── side-menu/       # Menú lateral de navegación
│   │   ├── interfaces/          # Interfaces TypeScript
│   │   │   ├── book.interfaces.ts    # Book, BookDetails
│   │   │   ├── author.interfaces.ts  # Author, AuthorSearchResult
│   │   │   └── openlibrary.interfaces.ts # APIs externas
│   │   ├── pages/               # Componentes de página
│   │   │   ├── book-search-page/     # Búsqueda de libros
│   │   │   ├── book-details-page/    # Detalles de libro
│   │   │   ├── authors-page/         # Búsqueda de autores
│   │   │   └── dashboard-page/       # Layout principal
│   │   └── services/            # Servicios Angular
│   │       └── books.service.ts
│   ├── environments/            # Configuración de entornos
│   └── app.routes.ts           # Configuración de rutas
```

## Funcionalidades Principales

### 1. Búsqueda de Libros 📚
- **Servicio:** Open Library Search API (`/search.json`)
- **Funcionalidad:** Permite buscar libros por título, autor o palabras clave
- **Características:**
  - Campo de búsqueda responsivo
  - Visualización en componente reutilizable `book-list`
  - Mostrar portadas cuando están disponibles
  - Información básica: título, autor, año de publicación
  - IDs visibles para referencia y búsquedas posteriores

### 2. Detalles de Libro 📖
- **Servicio:** Open Library Works API (`/works/{id}.json`)
- **Funcionalidad:** Obtiene información detallada de un libro específico
- **Características:**
  - Búsqueda por ID de obra de Open Library
  - Componente especializado `book-details-display`
  - Portada en alta resolución
  - Manejo inteligente de descripciones (string/object)
  - Metadatos completos

### 3. Búsqueda de Autores ✍️
- **Servicio:** Open Library Authors API (`/search/authors.json`)
- **Funcionalidad:** Busca autores y muestra información profesional
- **Características:**
  - Búsqueda por nombre de autor
  - Componente reutilizable `author-list`
  - Información de obras principales
  - Conteo de trabajos publicados
  - IDs de autores para referencia

## Dependencias y Tecnologías

### Principales
- **Angular 18**: Framework principal
- **TypeScript**: Lenguaje de programación
- **RxJS**: Programación reactiva
- **Tailwind CSS**: Framework de estilos
- **Font Awesome**: Iconografía

### APIs Consumidas
- **Open Library API**: API pública gratuita para datos de libros
  - Base URL: `https://openlibrary.org`
  - No requiere autenticación
  - Endpoints utilizados:
    - `/search.json` - Búsqueda de libros
    - `/works/{id}.json` - Detalles de obra específica
    - `/search/authors.json` - Búsqueda de autores

## Pasos para la Ejecución

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm (incluido con Node.js)
- Angular CLI (opcional pero recomendado)

### Instalación
1. Clonar el repositorio:
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd unillanos-desarrollosoftware2
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

### Desarrollo
Para ejecutar la aplicación en modo desarrollo:
```bash
npm start
# o
ng serve
```
La aplicación estará disponible en `http://localhost:4200`

### Producción
Para construir la aplicación para producción:
```bash
npm run build
# o
ng build
```

## Componentes Reutilizables

### 📚 `book-list`
- **Propósito**: Visualización de listas de libros
- **Input**: `books: Book[]`
- **Características**: Grid responsivo, delegación a `book-list-item`

### 📖 `book-list-item`
- **Propósito**: Tarjeta individual de libro
- **Input**: `book: Book`
- **Características**: Portada, título, autor, año, ID visible

### 👥 `author-list`
- **Propósito**: Visualización de listas de autores
- **Input**: `authors: AuthorSearchResult[]`
- **Características**: Grid de autores con obra principal y conteo

### 📋 `book-details-display`
- **Propósito**: Detalles completos de un libro
- **Input**: `bookDetails: BookDetails`
- **Características**: Portada grande, descripción inteligente, metadatos

### 🧭 `side-menu`
- **Propósito**: Navegación lateral modular
- **Subcomponentes**: `side-menu-header`, `side-menu-options`
- **Características**: Responsive, rutas activas, diseño profesional

## Arquitectura y Patrones Implementados

### Signals (Angular 18)
- Gestión reactiva del estado sin RxJS adicional
- Signals en el servicio para datos reactivos
- Actualizaciones automáticas de la UI

### Standalone Components
- Todos los componentes son standalone
- Imports explícitos y específicos
- Mejor tree-shaking y performance

### Component-Based Architecture
- **Componentes Reutilizables:**
  - `book-list` & `book-list-item`: Visualización modular de libros
  - `author-list`: Listado especializado de autores
  - `book-details-display`: Detalles completos de libros
  - `side-menu` con subcomponentes: Navegación modular

### Lazy Loading
- Carga lazy de todas las páginas
- Optimización del bundle inicial
- Separación de chunks por funcionalidad

### Direct Interface Mapping
- Mapeo directo de APIs a interfaces TypeScript
- Sin dependencias de mappers externos
- Transformación inline en servicios
- Tipado fuerte sin complejidad adicional

### Service Injection
- Inyección de dependencias con `inject()`
- Servicios singleton para gestión de estado
- Separación de responsabilidades

## Uso de Inteligencia Artificial
Durante el desarrollo se utilizó IA asistiva (GitHub Copilot) para:
- Generación de interfaces TypeScript basadas en respuestas de API
- Creación de componentes reutilizables especializados
- Optimización de consultas HTTP y mapeo de datos
- Generación de estilos CSS/Tailwind responsivos
- Refactorización de arquitectura de componentes
- Documentación y comentarios de código
- Resolución de errores de tipado TypeScript

Todo el código generado fue revisado, comprendido, refactorizado y adaptado según las necesidades específicas del proyecto, priorizando la simplicidad y mantenibilidad.

## Navegación de la Aplicación

1. **Inicio**: `/dashboard/search-books` - Página principal con búsqueda de libros
2. **Búsqueda de Libros**: Permite buscar y explorar libros
3. **Detalles de Libro**: Información específica de un libro por ID
4. **Autores**: Búsqueda y exploración de autores

## Características Técnicas Destacadas

- **Responsive Design**: Adaptable a dispositivos móviles y desktop
- **Componentización Modular**: Componentes reutilizables especializados
- **Error Handling**: Manejo graceful de errores de API
- **Type Safety**: Tipado fuerte con interfaces TypeScript
- **Clean Architecture**: Separación clara de responsabilidades
- **Performance Optimized**: Lazy loading y standalone components
- **User Experience**: IDs visibles para facilitar navegación entre funciones

## Licencia
Este proyecto es para fines educativos como parte del curso de Desarrollo de Software 2.
