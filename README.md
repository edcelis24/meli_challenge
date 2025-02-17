# Reto de automatización para Meli

_Se debe automatizar la búsqueda de un producto utilizando Playwright, Cucumber y JavaScript o TypeScript.

* En google buscar la palabra "creatina mercado libre" y del listado que aparece, presionar en el texto que dice "Creatina | MercadoLibre" (sitio de mercado libre)
* Una vez en la página de Mercado Libre debes aceptar las cookies (en caso que aparezca el mensaje)
* Filtrar la marca "MuscleTech" usando la búsqueda avanzada 
* En el resultado de productos guardaremos el precio del primer registro y presionaremos sobre el ítem
* En el detalle del producto validar que el precio del listing sea el mismo que aparece en el detalle del producto_

### Pre-requisitos 📋

_Herramientas que necesitas para instalar el proyecto de pruebas de manera local_

```
NodeJS
Editor de texto preferiblemente (Visual Studio Code)
```
## Comenzando 🚀

### Estructuración

```
/
└── meli_challenge
    ├── src
    |   ├── hooks
    |   |   ├── hooks.ts
    |   |   └── pageFixture.ts
    |   ├── pages
    |   |   ├── GooglePage.ts
    |   |   ├── MercadoLibrePage.ts
    |   |   └── Locators.ts
    |   └── test
    |       ├── features
    |       |   └── product_search.feature
    |       └── steps
    |          └── productSearchStep.ts    
    ├── .gitignore
    ├── README.md
    ├── cucumber.json
    └── package.json
```


### Instalación 🔧

1. Clonar el repositorio.

```
https://github.com/edcelis24/meli_challenge.git
```

2. Abrir el repositorio en el explorador de archivos.

```
cd meli_challenge
```

3. Crear rama para trabajar dentro del proyecto de pruebas.

```
git checkout -b "feature/Descripción"
```

4. Instalar dependencias.

```
npm i
```

## Ejecutando las pruebas ⚙️

1. Abrir el proyecto de pruebas en la consola.
```
cd cd meli_challenge
```
2. Ejecutar el comando para iniciar las pruebas.
```
npm test
```
### Verificación de las pruebas
_Como resultado de la ejecución nos retornará un mensaje como el siguiente, en el caso en que las pruebas se hayan ejecutado correctamente_ 
```
> meli_challenge@1.0.0 test
> cucumber-js test

1 scenario (1 passed)
6 steps (6 passed)
0m13.118s (executing steps: 0m12.614s)
```
_Para el caso en que las pruebas no se hayan ejecutado correctamente por errores de codificación de las mismas o bugs encontrados._
️
```
> meli_challenge@1.0.0 test
> cucumber-js test

scenario (1 failed)
6 steps (1 failed, 5 passed)
0m17.817s (executing steps: 0m17.312s)                                             
```

## Rweporte de la ejecución 📋

1. Abrir el explorador de archivos y buscar la ruta `\meli_challenge\test-results`
2. Abrir el archivo `cucumber-report`.
