# Open Books - Proyecto Final Angular

## Integrantes del Grupo
- [Tu Nombre Aquí]

## Descripción General del Proyecto
Open Books es una aplicación web desarrollada en Angular 18 que consume la API pública de Open Library para explorar información sobre libros y autores. La aplicación implementa tres servicios principales de la API de Open Library para demostrar el consumo de servicios REST y la gestión de estado en Angular.

## Estructura del Proyecto
```
src/
├── app/
│   ├── books/                    # Módulo principal de libros
│   │   ├── components/           # Componentes reutilizables
│   │   │   └── side-menu/       # Menú lateral de navegación
│   │   ├── interfaces/          # Interfaces TypeScript
│   │   │   ├── book.interfaces.ts
│   │   │   ├── author.interfaces.ts
│   │   │   └── openlibrary.interfaces.ts
│   │   ├── mapper/              # Mappers para transformar datos
│   │   │   └── book.mapper.ts
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
  - Campo de búsqueda con autocompletar
  - Visualización de resultados en tarjetas
  - Mostrar portadas cuando están disponibles
  - Información básica: título, autor, año de publicación

### 2. Detalles de Libro 📖
- **Servicio:** Open Library Works API (`/works/{id}.json`)
- **Funcionalidad:** Obtiene información detallada de un libro específico
- **Características:**
  - Búsqueda por ID de obra de Open Library
  - Información extendida del libro
  - Portada en alta resolución
  - Metadatos completos

### 3. Búsqueda de Autores ✍️
- **Servicio:** Open Library Authors API (`/search/authors.json` + `/authors/{id}.json`)
- **Funcionalidad:** Busca autores y muestra información biográfica
- **Características:**
  - Búsqueda por nombre de autor
  - Información biográfica
  - Fechas de nacimiento y muerte
  - Fotografías cuando están disponibles

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
    - `/works/{id}.json` - Detalles de obra
    - `/search/authors.json` - Búsqueda de autores
    - `/authors/{id}.json` - Detalles de autor

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

## Arquitectura y Patrones Implementados

### Signals (Angular 18)
- Gestión reactiva del estado sin RxJS adicional
- Signals en el servicio para datos reactivos
- Actualizaciones automáticas de la UI

### Standalone Components
- Todos los componentes son standalone
- Imports explícitos y específicos
- Mejor tree-shaking y performance

### Lazy Loading
- Carga lazy de todas las páginas
- Optimización del bundle inicial
- Separación de chunks por funcionalidad

### Mapper Pattern
- Transformación consistente de datos de API
- Separación entre interfaces de API e interfaces de dominio
- Centralización de lógica de mapeo

### Service Injection
- Inyección de dependencias con `inject()`
- Servicios singleton para gestión de estado
- Separación de responsabilidades

## Uso de Inteligencia Artificial
Durante el desarrollo se utilizó IA asistiva (GitHub Copilot) para:
- Generación de interfaces TypeScript basadas en respuestas de API
- Optimización de consultas HTTP
- Generación de estilos CSS/Tailwind
- Documentación y comentarios de código

Todo el código generado fue revisado, comprendido y adaptado según las necesidades específicas del proyecto.

## Navegación de la Aplicación

1. **Inicio**: `/dashboard/search-books` - Página principal con búsqueda de libros
2. **Búsqueda de Libros**: Permite buscar y explorar libros
3. **Detalles de Libro**: Información específica de un libro por ID
4. **Autores**: Búsqueda y exploración de autores

## Características Técnicas Destacadas

- **Responsive Design**: Adaptable a dispositivos móviles y desktop
- **Error Handling**: Manejo graceful de errores de API
- **Loading States**: Indicadores de carga durante peticiones
- **Type Safety**: Tipado fuerte con TypeScript en toda la aplicación
- **Clean Code**: Código limpio siguiendo mejores prácticas de Angular

## Licencia
Este proyecto es para fines educativos como parte del curso de Desarrollo de Software 2.
