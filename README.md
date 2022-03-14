Luego de crear el proyecto:
1- creamos el componente home 
2- lo añdimos a router
3- limpiamos app html solo dejamos router
4- agregamos bootstrap en linea en index.html debajo del meta en head
5- hacemos la estructura del html home
6- en el ts quitamos el oninit
7- agregamos la funcion filter
8- creamos la variable apiUrl en el entorno
9- importamos httpClient en el modulo y luego en el ts home 
10- agregamos al constructor de home la variable http en el argumento y ejecutamos la funcion de obtener los datos del servidor
11- creamos la funcion get debe ser async para q obtenga los datos de manera asyncrona( q no espera por los datos para ejecutar la app)
12- definimos la variable personaje y creamos la interfaz
13 -luego la igualamos a la respuesta del servidor mapeada para q solo nos de los datos q necesitamos
14 -creamos el componente card y le agregamos a su http el modelo de bootstrap para una card, utilizamos la etiqueta correspondiente
para llamarla y usarla
15- le pasamos los datos de personaje a el componente hijo en este caso card( se agrega un @input() en el hijo card)
16- hacemos la parte de binding en el html (la renderizacion dinamica)
17- hacemos la funcion filter

const person={
    name:"Juan",
    desc:"esto es algo"
}

const {desc} =person;
console.log(desc);