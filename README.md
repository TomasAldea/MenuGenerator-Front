# Menu Generator

## Descripcion 

### Esta aplicación trata de cubrir las necesidades organizativas en la planificación de menús semanales para pequeños negocios gastronómicos o para uso particular.

## Historias de usuarios

* Registrarse: como usuario puedo registrarme para empezar a crear mi contenido
* Inicio de sesión: Como usuario, puedo iniciar sesión en la aplicación para poder administrar mi perfil.
* Cerrar sesión: como usuario, puedo cerrar la sesión de la aplicación para que nadie más pueda usarla.
* Ver recetas: Como usuario, quiero ver todas las recetas disponibles.
* Agregar recetas: Como usuario puedo agregar recetas.
* Editar recetas: Como usuario puedo Editar recetas.
* Eliminar recetas: Como usuario puedo Eliminiar recetas.
* Ver perfil de usuario: Como usuario puedo ver mi perfil
* Editar perfil de usuario: Como usuario puedo editar mi perfil


## Extras

* 

### Cliente / Frontend

| Ruta          | Componente            | Permisos  | Comportamiento                                         | 
| ------------- |:---------------------:| --------- |:------------------------------------------------------:|
| /             | Página principal      | público   |Página de inicio                                        | 
|/signup        | SignupPage            |           |Formulario de registro                                  |
|/login         | Inicio de sesión      |           |Formulario de inicio de sesión                          |
|/recipe/add    | Agregar receta        | Privado   |Formulario para añadir receta                           |
|/recipe/:id    | Filtrar por receta    | Privado   |filtrado por receta con detalles                        |
|/profile       | Página de perfil      | Privado   |Perfil de usuario con menus semanales y recetas creadas |


## Servicios

* Servicio de autenticación

   - authApi.login (usuario)
   - authApi.signup (usuario)
   - authApi.logout ()

* Servicio de recetas 

   - recipesApi.list ()
   - recipesApi.addRecipe (recipe)
   - recipesApi.getRecipeDetails (recipeId)
   - recipesApi.editRecipe (recipeId, recipeBody)
   - recipesApi.deleteRecipe (recipeId)

* Servicio de menus

   - menuApi.randomMenu(menuBody)
   - menuApi.getMenu()
   - menuApi.editMenu(recipeId, menuBody)


### Servidor / Backend

## Modelos

# Modelo usuario

{
  username: {type: String, required: true },
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  recipes: [ { type: mongoose.Schema.Types.ObjectId, ref: "recipe" } ]
}

# Modelo Receta

{
  name: String,
  description: String,
  ingredients: [],
  owner: [ { type: mongoose.Schema.Types.ObjectId, ref: "user" } ],
},

# Modelo menu

{
monday: [{ type: mongoose.Schema.Types.ObjectId, ref: "recipe" }],
tuesday: [{ type: mongoose.Schema.Types.ObjectId, ref: "recipe" }],
wednesday: [{ type: mongoose.Schema.Types.ObjectId, ref: "recipe" }], 
thursday: [{ type: mongoose.Schema.Types.ObjectId, ref: "recipe" }],
friday: [{ type: mongoose.Schema.Types.ObjectId, ref: "recipe" }],
saturday: [{ type: mongoose.Schema.Types.ObjectId, ref: "recipe" }],
sundau: [{ type: mongoose.Schema.Types.ObjectId, ref: "recipe" }],

owner: [ { type: mongoose.Schema.Types.ObjectId, ref: "user" } ],
},

### API Endpoints (rutas backend)

| HTTP Method         | URL            | Request Body  | Success status                                        |  Error Status  | Description  |
| ------------- |:---------------------:| --------- |:------------------------------------------------------:|   público    | público   |
| post         | /auth/signup      | {username, email, password}  |201                                      | 404    | 	Verifica si los campos no están vacíos (422) y el usuario no existe (409), luego crea un usuario con contraseña cifrada y almacena el usuario en la sesión   |
|/signup        | SignupPage            |           |Formulario de registro                                  |público    | público   |
|/login         | Inicio de sesión      |           |Formulario de inicio de sesión                          |público    | público   |
|/recipe/add    | Agregar receta        | Privado   |Formulario para añadir receta                           |público    | público   |
|/recipe/:id    | Filtrar por receta    | Privado   |filtrado por receta con detalles                        |público    | público   |
|/profile       | Página de perfil      | Privado   |Perfil de usuario con menus semanales y recetas creadas |público    | público   |