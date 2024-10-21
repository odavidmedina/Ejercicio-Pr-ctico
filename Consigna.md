# Ejercicio - Entrevista Dev Frontend 2024 - Silicon Access

## Ejercicio Práctico - Octubre 2024

### Propuesta

Desarrollar una pequeña aplicación que permita poner en práctica tus conocimientos de distintas tecnologías vinculadas a la posición de Desarrollador Front-End. Se trata de un proyecto demo, con consigna abierta y requerimientos mínimos de base. El grado de complejidad o funcionalidades adicionales que quieras sumarle queda a tu criterio.

La idea es que lo puedas armar utilizando las herramientas que ya conoces, completarlo dentro del plazo acordado y que lo puedas presentar para comentarnos cómo lo construiste y las decisiones que fuiste tomando en el camino. Una vez que lo tengas listo, podes responder el correo que recibiste, haciendo mención al link del repositorio donde esté el proyecto.

### Entregable

Diseñar y desarrollar una aplicación web que presente una página con un formulario de login donde se permita autenticar por API REST nombre de usuario y contraseña. Solo en caso de una respuesta exitosa, el usuario accederá a una sección privada (solo accesible por usuarios logueados) donde podrá ver su nombre de usuario y contraseña tal cual lo devolvió el servidor de Backend.

El usuario debe poder entender cuáles son los requerimientos de los campos que está completando (nombre de usuario y password), así como las respuestas exitosas o fallidas por parte del servidor ante su intento de acceso.

Te sugerimos que armes la web pensando en que pertenece a una empresa vinculada a la industria automotor (concesionaria de autos, casa de repuestos, estacionamiento privado, fábrica o casa matriz, etc.) donde se pueda identificar algún logo de la marca y algunas imágenes representativas (como por ejemplo imágenes de los productos o institucionales) de manera que sea atractiva para los usuarios.

Una vez que se concreta el login, en la visualización del contenido protegido, el requerimiento mínimo es que se muestre el nombre y apellido del usuario (datos obtenidos como respuesta del Backend).

### Característica opcional

Como característica opcional, nos gustaría que utilizando los datos del response del login, se presente una sección donde el usuario pueda acceder a todos los modelos de autos que corresponden a cada marca. Queremos que propongas la forma en la que se va a presentar la información en la UI. El objetivo es que sea fácil para el usuario poder seleccionar un modelo de vehículo, sabiendo que pertenece a una marca en particular. Se puede pensar como un componente que sea parte de un flujo de registración de datos de un vehículo, donde el usuario ya conoce el dato de la marca y el modelo de antemano y necesita ingresar los datos al sistema.

### Especificaciones

- Utilizar React JS con código en JavaScript.
- Utilizar GIT y compartir el link del repositorio terminado.
- Aplicar estilos, puede ser mediante tu propio CSS o utilizando algún framework de UI (Material UI, Ant-Design, Tailwind CSS, etc.).
- Cuidar la experiencia de usuario, que sea intuitiva y explicativa cuando haga falta.
- Redactar un mínimo archivo Readme con las instrucciones para inicializar el proyecto en forma local (en ambiente de desarrollo, no hace falta deployment productivo).
- Utilizar el endpoint API REST que se indica debajo, con las credenciales provistas como único caso de éxito, cualquier otro valor se deberá manejar como un intento fallido.
- Poder explicar en forma verbal el código realizado y fundamentar las elecciones tomadas (librerías, diseño, imágenes, etc.).

### Detalle de requerimientos de login

**Formulario:**

- **Campo usuario**: Se deberá validar que los datos ingresados correspondan con la forma clásica de un email, es decir, usuario@dominio (ejemplo: usuariol@gmail.com). No es necesario manejar combinaciones complejas.
- **Campo contraseña**: Los valores no deben ser visibles a simple vista, se deberá validar que solo se ingresen caracteres alfanuméricos.
- **Botón de acceso**.
- **Mensajería**: Implementar algún mecanismo para informarle al usuario los requerimientos de los campos (puede ser estático o dinámico) y el resultado de su intento de acceso a la plataforma.

**Request para el login:**

HTTP/1.1 scheme: https Method: POST Endpoint: /fapi/auth/login/ Host: test.silicon-access.com Content-Type: application/json Body: { "username": "noreply+challenge@silicon-access.com", "password": "bienvenido123" }

**Respuesta:**

La respuesta es un objeto en formato JSON, con múltiples claves. Para este ejercicio nos interesan las keys “user” (sus campos “first_name” y “last_name”), “carbrand” y “carmodel” (relacionadas mediante “brand_code”).

Ejemplo:

```json
{
"user": {
"username": "noreply+challenge@silicon-access.com",
"first_name": "USER",
"last_name": "CHALLENGE",
"email": "noreply+challenge@silicon-access.com",
"groups": [{name": "RESIDENT"}]
},
"carbrand": [
{
"code": "AR",
"name": "ALFA ROMEO"
},
{
"code": "AU",
"name": "AUDI"
}
],
"carmodel": [
{
"id": 7,
"name": "A5",
"brand_code": "AU"
},
{
"id": 8,
"name": "A6",
"brand_code": "AU"
}]
}
```
**Respuesta:**
Cuando veamos el resultado del ejercicio realizado estas son algunas de las preguntas que nos vamos a hacer, por favor interpretarlas como una guía y no como los requerimientos mínimos a cumplir:

¿Se maneja estado dentro de la aplicación? ¿De qué forma?

¿Qué tipos de componentes se utilizan? ¿Se usaron Hooks, cuáles?

¿Cómo se resuelve dinámicamente el contenido restringido? ¿Se manejan rutas entre los distintos componentes?

¿De qué forma se ejecutan los requests? ¿Cómo se maneja el asincronismo? ¿Se manejan excepciones?

¿La UI es responsive? ¿El diseño es atractivo y claro para el usuario? ¿Cómo se presentan los mensajes de información al usuario?

¿Cómo se aplicaron los estilos? ¿Se utilizó un framework? ¿Se utilizó custom CSS, se aplicó inline o en archivos distintos? ¿Se utilizó Sass?

¿Se cumplió con el requerimiento opcional? ¿De qué manera?

¿Se utilizó GIT como control de versionado? ¿Los commits tienen mensajes significativos? ¿Se utilizaron distintas ramas?

¿El código está formateado? ¿Se utilizó algún linter, existen advertencias visibles?

