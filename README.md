# Vue-gestor-tareas

# Gestor de Tareas Colaborativo

## Descripción

El **Gestor de Tareas Colaborativo** es una aplicación web inspirada en el método Kanban (similar a Trello o Asana) que permite a equipos organizar, compartir y dar seguimiento a tareas de manera eficiente y en tiempo real.  
La aplicación es rápida, intuitiva, altamente colaborativa y ahora incorpora **inteligencia artificial (IA)** para automatizar recordatorios, tareas recurrentes y generación de reportes inteligentes.

---

## Objetivos

- Facilitar la **organización visual** de tareas mediante tableros Kanban.
- Permitir la **colaboración en tiempo real** entre múltiples usuarios.
- Ofrecer una experiencia de usuario rápida, fluida y segura.
- Implementar funcionalidades avanzadas como asignación de tareas, comentarios, notificaciones y permisos.
- **Automatizar recordatorios y tareas recurrentes** usando IA.
- **Generar reportes y resúmenes automáticos** del avance del proyecto con IA.

---

## Tecnologías Utilizadas

- **Frontend:**
  - [Vue 3](https://vuejs.org/) (Composition API)
  - [Pinia](https://pinia.vuejs.org/) (gestión de estado global)
  - [Vue Router](https://router.vuejs.org/) (navegación)
  - [Vite](https://vitejs.dev/) (bundler)
  - [TailwindCSS](https://tailwindcss.com/) (estilos rápidos y responsivos)
  - [VueDraggable Next](https://github.com/SortableJS/vue.draggable.next) (drag & drop)

- **Backend y servicios:**
  - [Firebase Authentication](https://firebase.google.com/products/auth) (autenticación de usuarios)
  - [Cloud Firestore](https://firebase.google.com/products/firestore) (base de datos en tiempo real)
  - [Firebase Storage](https://firebase.google.com/products/storage) (archivos adjuntos, opcional)
  - [OpenAI API (ChatGPT)](https://platform.openai.com/) (automatización y generación de texto inteligente)
  - Variables de entorno `.env` para proteger las credenciales

- **Herramientas de desarrollo:**
  - ESLint y Prettier (calidad y estilo de código)
  - Git y GitHub (control de versiones)

---

## Funcionalidades Principales

- **Tableros Kanban:**  
  Crea y organiza tableros con listas y tarjetas de tareas.

- **Colaboración en tiempo real:**  
  Cambios visibles al instante para todos los usuarios conectados al mismo tablero.

- **Compartir tableros:**  
  Invita a otros usuarios por email o enlace, con diferentes niveles de permisos (lectura, edición, administración).

- **Gestión de tareas:**  
  - Crear, editar, mover y eliminar tareas.
  - Asignar responsables y fechas límite.
  - Añadir etiquetas, prioridades y descripciones.

- **Comentarios y comunicación:**  
  - Comenta en tareas y menciona a otros usuarios.
  - Notificaciones dentro de la app para cambios y menciones.

- **Vistas adicionales:**  
  - Vista de tablero (Kanban)
  - Vista de lista
  - Vista de calendario (opcional)

- **Historial y auditoría:**  
  - Seguimiento de cambios y acciones de los usuarios.

- **Optimización y rendimiento:**  
  - Carga perezosa de datos y componentes.
  - Uso de caché local para mejorar la velocidad.

---

## Funcionalidades Potenciadas por IA

### Automatización de recordatorios y tareas recurrentes
- La IA interpreta comandos en lenguaje natural, por ejemplo:  
  > “Recuérdame revisar el informe todos los viernes.”
- Crea tareas recurrentes automáticamente y programa recordatorios/notificaciones según el avance del proyecto.
- Notifica a los usuarios cuando se acerca la fecha límite o si una tarea está atrasada.

### Comunicación y resumen de actividad
- ChatGPT analiza el historial de tareas y genera **resúmenes automáticos** del avance del proyecto.
- Permite crear reportes semanales o personalizados, redactados en lenguaje natural, para compartir con el equipo o guardar como referencia.
- Opción de mostrar, copiar, descargar o enviar por email estos reportes desde la app.

---
