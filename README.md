# [![CoderHouse](https://www.coderhouse.com/imgs/ch.svg)](https://www.coderhouse.com/)

Programación Backend III: Testing y Escalabilidad Backend 70255<br>
Proyecto: Continuación del [proyecto de Backend 2](https://github.com/agusrod9/Backend2.git)

-PARA PROBAR: <br>
-Comando de test --> npm run test
-Endpoints de documentación: /docs y /docs-json
-VARIABLES DE ENTORNO Y PROYECTO POSTMAN : https://drive.google.com/drive/folders/1YvCORLJgicKoEHuY4cYXDqb-tlUlI6Ka?usp=sharing<br>
-Para probar las vistas, ingresar a localhost:8085 - El sistema redirigirá hacia login o register<br>
-Para poder logearse hay que registrarse con un MAIL REAL, ya que se recibe un link para verificar el usuario.<br>
-Para probar funciones de ADMIN utilizar --> agusrod9@gmail.com , pass1234<br>


Entrega Final: <br>
-Genero la [imágen Docker Final](https://hub.docker.com/r/agusrod9/appbackend3final)
-Implemento tests funcionales del manager de cart (lo que encuentro análogo a probar adoption como indica la rúbrica)
-Agrego documentación del router de sessions con Swagger <br>
-Agrego dockerfile, genero la imágen y subo a dockerhub (versión inicial - resubo al finalizar el proyecto)<br>
<br>
Comentarios: <br>

Pre-entrega 1:<br>
-Genero los endpoint: <br>
GET api/mocks/mockingProducts  --> Recibe parámetro "n" donde se debe indicar la cantidad de productos que desea generar<br> 
GET api/mocks/mockingUsers  --> Recibe parámetro "n" donde se debe indicar la cantidad de usuarios que desea generar<br>
POST api/mocks/generateData  --> Recibe parámetros "usersN" y "productsN" donde se debe indicar la cantidad de usuarios y productos que desea generar <br>
-El endpoint POST api/mocks/generateData impacta lo generado en la base de datos de Mongo.<br>

Comentarios: <br>
<br>