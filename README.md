# 🔑 CyberGame Platform
Plataforma de Entrenamiento en Ciberseguridad con Gamificación.

## 📝 Descripción del proyecto
La plataforma CyberGame es un sitio que le permitira a las personas en general a entender y aprender de mejor manera el mundo de la ciberseguridad.
Que mejor manera de aprender sobre Ciberseguridad que jugando. Este proyecto consiste en eso, en hacer un sitio mas intuitivo, con un gran diseño y accesible para todo el mundo y sobre todo que este fuera de lo común, en donde no nada mas tendras que leer información sobre el tema si no que aparte tendras que demostrar lo aprendido sobre Ciberseguridad y tus habilidades en el mundo de los videojuegos.

## 🔔 Objetivos
+ Crear una plataforma interactiva que permita a los usuarios aprender conceptos de ciberseguridad de manera efectiva y divertida.
+ Proporcionar una variedad de juegos y desafíos que aborden diferentes aspectos de la ciberseguridad, como la conciencia de phishing, la seguridad de contraseñas, la protección de datos, entre otros.
+ Fomentar el aprendizaje colaborativo y retroalimentar con información proporcionando la logica del tema abordado y combinarlo con el desarrollo de algun juego.
+ Establecer una interfaz de usuario intuitiva y atractiva que mejore la experiencia del usuario y fomente la participación continua.
+ Evaluar el progreso y el rendimiento de los usuarios a través de métricas y análisis para adaptar la experiencia de aprendizaje según las necesidades individuales.

## 🎮 Visualización y uso de la plataforma CyberGame
### Pagina Principal
Aqui encontraras informacion importante sobre ciberseguridad, aqui podras navegar sobre la pagina y encontrar contenido actualizado.
![1](https://github.com/xMeiker/CyberGame/assets/89752513/e29bdb3e-53d9-44f1-9594-7ba5d6c70bde)
![2](https://github.com/xMeiker/CyberGame/assets/89752513/dd3b5722-d72a-4360-9c40-0039af722885)

### Juegos
En este apartado veras una lista de juegos disponibles en donde podras poner a prueba tus habilidades y conocimiento adquirido sobre el tema de la ciberseguridad y poder retroalimentarte un poco con estos mini juegos.
![3](https://github.com/xMeiker/CyberGame/assets/89752513/4a9a7c5f-51d9-4b0b-8c9a-75a171ee1e17)

### Juego de Prueba
**Escape Room**<br>
Esta es una prueba de un juego en el que consta de encontrar la contraseña o clave que deberas encontrar en la imagen que se te proporciona.
![4](https://github.com/xMeiker/CyberGame/assets/89752513/e8c51ba3-316a-4a50-85a9-58d52edba6f3)

### Acerca de
En el apartado de Acerca de encontraras informacion sobre este proyecto, como fue que se creo, con que objetivos se hizo, quien lo creo y todo lo que necesitas para su funcionamiento en caso de querer utilizar el repositorio proporcionado.
![5](https://github.com/xMeiker/CyberGame/assets/89752513/ee635ea5-f818-40f9-b516-99f86206a9ff)


## 💡 Patrones de diseño utilizados
### Patrones Creacionales:
**Factory Method (Método de Fábrica):**
+ Este patrón podría ser útil para la creación de objetos en la plataforma. Por ejemplo, podría utilizarse para crear instancias de diferentes tipos de desafíos de ciberseguridad, como juegos de phishing, desafíos de contraseñas, etc. El método de fábrica permite la creación de objetos sin especificar la clase exacta de objeto que se creará, lo que proporciona flexibilidad y extensibilidad.

**Singleton:**
+ El patrón Singleton podría utilizarse para garantizar que ciertas clases de la plataforma, como el gestor de usuarios o el gestor de sesiones, tengan una única instancia en toda la aplicación. Esto puede ser útil para asegurar la coherencia de los datos y evitar problemas de concurrencia.

### Patrones Estructurales:
**Decorator (Decorador):**
+ El patrón Decorator podría ser útil para agregar funcionalidades adicionales a los elementos de la interfaz de usuario de la plataforma. Por ejemplo, podrías usarlo para decorar elementos con efectos visuales o animaciones para hacer que la experiencia de usuario sea más atractiva y dinámica.

**Facade (Fachada):**
+ La fachada podría utilizarse para proporcionar una interfaz unificada y simplificada a través de la cual los usuarios interactúan con los diferentes componentes y subsistemas de la plataforma. Esto puede ocultar la complejidad interna y hacer que la plataforma sea más fácil de entender y utilizar para los usuarios.

### Patrones de Comportamiento:
**Observer (Observador):**
+ El patrón Observer podría ser útil para implementar funcionalidades de notificación y seguimiento en la plataforma. Por ejemplo, podría utilizarse para permitir que los usuarios se suscriban a ciertos eventos, como actualizaciones de contenido o cambios en los desafíos, y recibir notificaciones cuando ocurran estos eventos.

**Strategy (Estrategia):**
+ La estrategia podría utilizarse para proporcionar diferentes algoritmos o enfoques para resolver desafíos de ciberseguridad en la plataforma. Por ejemplo, podrías tener varias estrategias para mitigar un ataque de phishing o para mejorar la seguridad de una contraseña, y permitir que los usuarios elijan la estrategia que mejor se adapte a sus necesidades.

## Codificación
### Juego de Pishing

![6](https://github.com/xMeiker/CyberGame/assets/89752513/53485de2-3f84-4131-aef7-e19ad250a308)

### Explicación del patrón

**State Pattern:**

Este patrón se utiliza para permitir que un objeto cambie su comportamiento cuando su estado interno cambia. En este caso, el juego de phishing puede tener dos estados: "Phishing" y "Legítimo". Dependiendo del estado actual, el juego reacciona de manera diferente cuando el jugador selecciona si el correo electrónico es phishing o legítimo.
Clase de Estado Base y Estados Concretos: Creamos una clase base PhishingState que define la interfaz para los diferentes estados. Luego creamos dos estados concretos: PhishingStatePhishing y PhishingStateLegitimate, que implementan comportamientos específicos dependiendo de si el correo electrónico es phishing o legítimo.
Contexto: La clase PhishingGame actúa como el contexto que mantiene el estado actual y delega el comportamiento a ese estado. Tiene métodos para cambiar el estado y mostrar el juego. También tiene métodos para manejar respuestas correctas e incorrectas.
Esta implementación hace que el código sea más flexible y escalable, ya que es fácil agregar más estados o cambiar el comportamiento existente simplemente agregando nuevas clases de estado o modificando las existentes.

### Juego de Password

![7](https://github.com/xMeiker/CyberGame/assets/89752513/c0960326-0410-4ca5-b2fa-d6a2eb4b30f4)

### Explicación del patrón

**State Pattern:** 

Al igual que en el caso anterior, utilizamos el patrón State para permitir que el comportamiento del Desafío de Contraseñas cambie según el estado interno (si la contraseña es segura o no).
Clase de Estado Base y Estados Concretos: Creamos una clase base PasswordState que define la interfaz para los diferentes estados. Luego creamos dos estados concretos: PasswordStateSecure y PasswordStateInsecure, que implementan comportamientos específicos dependiendo de si la contraseña es segura o no.
Contexto: La clase PasswordChallenge actúa como el contexto que mantiene el estado actual y delega el comportamiento a ese estado. Tiene métodos para cambiar el estado y mostrar el desafío de contraseña. También tiene métodos para manejar respuestas correctas e incorrectas.
Al igual que con el Juego de Phishing, esta implementación hace que el código sea más flexible y escalable, permitiendo agregar más estados o cambiar el comportamiento existente fácilmente simplemente agregando nuevas clases de estado o modificando las existentes.

## 💻 Software
+ Visual Studio Code (Software)
+ Github Desktop (Opcional)
+ Git

## ⚙ Lenguajes y Herramientas
+ Html
+ Css
+ JavaScript

## 🔔 Instalación y uso de repositorio
Con los siguientes comandos podra clonar y usar este repositorio desde su localhost, puede clonarlo usando Git Bash, desde el mismo repositorio con el software de Github Desktop o en la Terminal:
+ > git clone **https://github.com/xMeiker/CyberGame.git**
+ > cd **CyberGame**
+ > start **index.html** and press **f5** for run platform

## 💳 Licencia de uso y permisos

El proyecto es creado por: ***xMeiker***

***CyberGame Platform*** esta bajo la licencia MIT, es de uso libre sin fines de lucrar con ello. Si se usa para fines de colaboración, compartir, mejorar o utilizar parte del proyecto dar los creditos al autor original.

![licen cc-mit](https://github.com/SergioMSR09/Modelo-Predictivo-De-Enfermedades-Proyecto-Final-/assets/158234022/49da30b6-0bbb-42c4-8639-e54cdb48d2b7)
