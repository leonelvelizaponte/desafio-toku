# Desafío Toku
##### ✔️  La premisa se plantea de la siguiente manera

Usando la API https://superheroapi.com/ simula un conjunto de peleas entre superhéroes y villanos. Puedes definir las condiciones de las peleas como desees, sólo recuerda especificarlo para que después pueda entender la lógica.

Toda la información detallada del challenge la puedes conseguir en la carpeta "challenge info"

##### A considerar sobre las peleas
- Se generan aleatoriamente los equipos
- Puedes decidir si usar el equipo generado o volver a generar otro
- Para hacer las peleas es necesario que especifiques el enemigo a quien quieres atacar antes de atacar
- Cuando atacas a un enemigo, este te atacará usando el mismo tipo de ataque (mental, strong, fast)
- El orden de ataque se define aleatoriamente
- Robin es muy fuerte! 

## 🎨 Front-End
El Front está desarrollado en Angular con Angular Material, para levantarlo es necesario tener instalado el CLI de Angular y correr los comandos:
```sh
npm install
ng serve
```
Si todo marcha bien, tendrás un mensaje en la consola.
######  localhost:4200

pd: Recomiendo usar el navegador maximizado
## 🤖 Back-End
El back está desarrollado en NodeJS con Express, para ser utilizado como API, para levantarla es necesario tener instalado Node 16.13.2 y correr los comandos:
```sh
npm install
node .
```
Si todo marcha bien, deberías tener levantada la API en localhost:3000 (aparece en la ventana de comandos).

## 💬 Postman
En la carpeta de postman encontraremos el archivo de importación para usarlo con la llamada GET del BACK

 Llamada para obtener el los equipos con sus STATS procesados
```sh
http://localhost:3000/characters/1/2/3/4/5/6/7/8/9/10
```
`Info: los números representan los 10 Ids de los personajes que nuestra API envía a superheroapi para procesar y preparar los equipos`

### 🍪 Diseño

El diseño se realizó según las indicaciones conjuntas de Monica ( https://www.linkedin.com/in/monica-d-ignazi-de-sousa-2599a413b/ ) y mias ( https://www.linkedin.com/in/leonelveliz/ ).

### 🧑‍🚀 Servicios
Utilizaremos la API gratuita de https://superheroapi.com/ donde luego del registro nos proporciona una API KEY para hacer consultas más específicas.

> API KEY = 2183127771827858

## 💪POR MEJORAR
Hay acercamientos de mejoras con comentarios TODO en el código.
### FRONT
- Hay mejoras visuales en el Figma del proyecto para mejorar el UI en alguna de las vistas
- Podrían hacerse interacciones entre los cards para que parezca visualmente más violentos
- No define si el idioma oficial era español o ingles, asi que hay cierto spanglish
- Se pueden mejorar los botones de ataque y la interacción con el jugador
- Se podría presentar al equipo enemigo antes de la pelea
- Se podría agregar la inclinación del equipo good/bad
- Se podría mejorar la lógica de ataque de los enemigos para hacer ciertas combinaciones de enemigo + tipo de ataque 

### BACK
- Hacer manejo de errores en la llamada
- Mejorar la validación para evitar ids duplicados en el mismo u otro equipo
- Definir los mensajes de consola que se utilizan para hacer algún tipo de tracking
- Si se hicieran conexiones a BD se podría mejorar la velocidad de respuesta
- Se puede incluir un servicio POST que haya conexiones a un servicio de envío de correos para enviar la historia de la pelea
- Se puede segregar mas el codigo para encapsular mejor la lógica

#### 🌟GENERAL Y CONSIDERACIONES
- Los primeros commits están entre el 17 de Marzo 2022 y el 18 de Marzo 2022, y demore 3 dias en hacer todo lo subido hasta el momento


######  🌐 Página web http://leonelveliz.com/

