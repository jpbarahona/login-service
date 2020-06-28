# login-service

Login service, es un microservicio de login con GMail y Normal mediante tokens JWT. 

## FeathersJS

Feathers es un framework que facilita la creación de API Rest y Socket. Primero para hacer uso de FeathersJS (en caso de no tener instalado el CLI), seguir los siguientes pasos. Documentación en [docs.feathersjs.com](http://docs.feathersjs.com).

```
$ npm install -g @feathersjs/cli          # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers help                           # Show all commands
```

## Modelo Base de Datos POSTGRES

Al ejecutar el servicio, crea las siguientes tablas

* users
* roles
* users-roles

## Guía Instalación Servicio

1. Instalar paquetes y dependencia del servicio

```
$ npm install
```

2. **Configurar variables de entorno.** 
El servicio para ejecutar en ambiente desarrollo, utiliza el componente ```npm dotenv```, por lo que existe el archivo env, el cual debe anteporse un ., quedando finalmente .env.

3. Levantar DB Postgres. URL string configurarlo en archivo .env en ```POSTGRES```. Utilizar docker para levantar el servicio postgres

```
$ npm docker run --name postgres-login-service-dev-i1 -e POSTGRES_USER=psw -e POSTGRES_PASSWORD=psw -e POSTGRES_DB=login-service-dev-i1 -d -p 5432:5432 postgres
```

4. Ejecutar modo desarrollo

```
$ npm run dev
```

## Como usarlo en Cliente

El paso a paso está en la siguiente documentación [docs.feathersjs.com/api/client.html#react-native](https://docs.feathersjs.com/api/client.html#react-native)

## Configuración GMail

Con la siguiente documentación [docs.feathersjs.com/cookbook/authentication/google.html](https://docs.feathersjs.com/cookbook/authentication/google.html#application-client-and-secret), permite establecer la conexión con gmail, significando establecer el login con cuanta GMail. Es requisito tener cuenta en Google Cloud Platform.

### Link de acceso OAuth de GMail

Para utilizar el sevicio de gmail, con el siguiente link

```
/oauth/google
```

## Login Normal

El servicio de autenticación normal, es en el siguiente endpoint. 

```
/authentication
```

**Body autenticación**

```
{
	"strategy": "local",
	"loginuser": "usernameK",
	"password": "hola"
}
```