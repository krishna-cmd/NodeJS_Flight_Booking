This is a base node js project template, which anyone can use as it has been prepared by keeping some of the most important code principles and project managnement recommendations. feel free to change anything.

'src' -> Inside the src folder all the actual source code regarding the project reside, this will not include any kind of tests. ( you might want to make separate tests folder)

Lets take a look inside the 'src' folder

- `config` -> In this folder anything and everything regarding any configuration setup of a library or module will be done. For example: setting up `dotenv` so that we can use the environemtn variables anywhere in a cleaner fashion, this is done in the `server-config.js`. One more example can be to setup you logging library that can help you to prepare meaningful logs, so configuration for this library should also be done here. 

- `routes` -> In the routes folder, we register a route and the corresponding middleware and controllers to it.

- `middleware` -> ther are just going to intercept the incoming requests where we can write our validators, authenticators etc.

- `controllers` -> ther are kind of the last middlewares as post them you call your business layer to execute the business logic. In controllers we just receive the incoming requests and data the pass ot to the business layes, and once business layre retursn and output, we sturcture the API response and send it back to the client.

- `repositories` -> 
this folder contains all the logic using which we interact with the database. all the raw queries or ORM queries will go here.

- `services` -> 
contains the business logic and intereacts with repositories to get the data from the database.

- `utils` -> 
contains the utility functions that can be used anywhere in the project.

### setup the project
-Download this template from github and open it in your favorite code editor.
- Go inside the folder path and execute the following command.:
```
npm init

```
-In the root directory create a `.env` file and add the following variables:

PORT=3000

- set the directory to `src` folder and run the below comand:
```
npx sequelize init

```
- By executing the above comand you will get migrations and seeders folder along with a config.json folder.
