La interfaz de usuario se construyo utilizando React.js apoyandonos en la biblioteca Material-UI y CSS, dandole diseño y estilo en base a las plataformas de cripto  coingecko y coinmarket.
Se puede vizualizar un modal login, tablas de datos, header, footer y dashboard

Para el Backend, se creo un  CRUD  en un entorno Node.js que se ejecuta en un servidor Express y usa una base de datos PostgreSQL.

Se conecto un servidor Express con PostgreSQL usando node-postgres. Esta API podrá manejar los métodos de solicitud HTTP que corresponden a la base de datos PostgreSQL donde la API obtiene sus datos.

Nuestro objetivo fue permitir operaciones CRUD, GET, POST, PUT y DELETE, en la API, ejecutando los comandos de base de datos correspondientes. Para ello, se configuro una ruta para cada extremo y una función para cada consulta, tenemos un apartado para la tabla COINS el API  lista toda el contenido de la tabla y lista por ID. Un segundo apartado para la tabla REGISTER_PORTFOLIO, Lista, Crea, Actualiza y Elimina datos de la misma. 

 En el proyecto se ubica una carpeta llamada database que contiene el DUMP de base de datos, Tambien el archivo .env donde se muestra las variables de entorno requeridas.

