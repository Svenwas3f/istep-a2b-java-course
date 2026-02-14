# iSTEP A2B Java Course - Tutorial & Documentation

A comprehensive Java programming tutorial website with support for hierarchical subpages, featuring modern web technologies and the iSTEP design guidelines.

## Features

- **Hierarchical Navigation**: Multi-level menu structure with expandable/collapsible submenus
- **Dynamic Page Loading**: Single-page application (SPA) architecture for smooth navigation
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Tutorial Content**: Structured learning path from Java basics to advanced topics
- **Java Syntax Highlighting**: Beautiful code highlighting powered by Highlight.js
- **Professional Design**: Based on iSTEP branding guidelines

## Structure

The website uses a single-page application architecture where content is dynamically loaded:

```
index.html              # Main entry point
├── css/
│   └── style.css      # Styles including submenu support
├── js/
│   └── script.js      # Navigation and page loading logic
└── pages/             # Content pages
    ├── home.html      # Landing page
    ├── about.html     # About page
    ├── contact.html   # Contact page
    ├── java/          # Java tutorial subpages
    │   ├── introduction.html
    │   ├── basics.html
    │   ├── oop.html
    │   ├── collections.html
    │   └── advanced.html
    ├── spring/        # Spring Framework subpages
    │   ├── introduction.html
    │   ├── boot.html
    │   ├── mvc.html
    │   └── data.html
    └── practices/     # Best Practices subpages
        ├── clean-code.html
        ├── testing.html
        └── design-patterns.html
```

## Tutorial Topics

### Java Tutorial
1. **Einführung** - Introduction to Java and setup
2. **Grundlagen** - Basic syntax, variables, operators, control structures
3. **Objektorientierung** - OOP concepts, classes, inheritance, interfaces
4. **Collections** - Java Collections Framework, Lists, Sets, Maps, Streams
5. **Fortgeschrittene Themen** - Exceptions, Generics, Lambdas, File I/O, Multithreading

### Spring Framework
1. **Einführung** - Spring Framework basics and Dependency Injection
2. **Spring Boot** - Rapid application development with Spring Boot
3. **Spring MVC** - Web applications (coming soon)
4. **Spring Data** - Database access (coming soon)

### Best Practices
1. **Clean Code** - Code quality principles and best practices
2. **Testing** - Unit testing and TDD (coming soon)
3. **Design Patterns** - Common design patterns (coming soon)

## How to Use

### Development
Simply open `index.html` in a web browser. For best results, use a local development server:

```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve

# PHP
php -S localhost:8000
```

Then visit: `http://localhost:8000`

### Navigation

- **Desktop**: Use the sidebar menu on the left
- **Mobile**: Click the hamburger menu (☰) to open the sidebar
- **Submenus**: Click on category names to expand/collapse
- **URL Navigation**: Pages support direct linking via URL parameters (e.g., `?page=java/basics`)

## Adding New Pages

1. Create an HTML file in the appropriate subdirectory under `pages/`
2. Add a menu entry in `index.html`:
   ```html
   <li><a href="#" data-page="folder/pagename">Page Title</a></li>
   ```
3. For a new submenu category, use the `has-submenu` structure:
   ```html
   <li class="has-submenu">
       <a href="#" class="submenu-toggle">Category Name</a>
       <ul class="submenu">
           <li><a href="#" data-page="folder/page1">Page 1</a></li>
       </ul>
   </li>
   ```

## License

This project is created for educational purposes as part of the iSTEP A2B Java Course.
