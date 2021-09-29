# Social Network Testing

Este repositorio es un ejemplo de testing para proyecto [Social Network](https://github.com/Laboratoria/bootcamp/tree/main/projects/03-social-network) del bootcamp de Laboratoria.

Se ha tomado prestado el diseño visual del proyecto de [@tolozayurany](https://github.com/tolozayurany/SocialNetwork-Visibles), [@ToroAlejandra](https://github.com/ToroAlejandra/BOG003-social-network) y [@TefyRabih](https://github.com/TefyRabih/BOG003-social-network).

Aquí se implementa la funcionalidad de login con correo electrónico y contraseña con el siguiente comportamiento:
* Si el correo electrónico y contraseña son válidos se direccion la aplicación a la ruta #/home.
* Si al intentar un login ocurre un error por contraseña inválida, se bloquea el botón de login por 5 segundos. 
* Si el error es por correo inválido entonces se bloqueará por 7 segundos. 
* Si ocurre cualquier otro error se bloqueará por 2 segundos.

Se implementa entonces 3 pruebas unitarias para la anterior lógica. Es necesario construir manualmente un [mock](https://jestjs.io/docs/mock-functions) de firebase y seguir las recomendaciones para [pruebas asíncronas](https://jestjs.io/docs/asynchronous) de jest. Con esto se cubren los objetivos de aprendizaje relacionados con testing del proyecto.

La sesión con las estudiantes donde se presentó este repositorio esta disponible [aquí](https://youtu.be/onfqLSTntTo).
