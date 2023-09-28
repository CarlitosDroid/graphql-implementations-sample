# Demo GraphQL Server with Express

## Run the project
1. Move into the app folder:

`cd app`

2. Install dependencies:

`npm start`

3. Run the project by using nodejs in a docker container (OPTIONAL IF YOU USE DOCKER):

`docker run -v $(pwd)/app:/home/node -i -t --workdir /home/node -p 8888:8888 node:18.17.0 bash (OPTIONAL)`

4. Run the project if you already have node installed on your machine:

`node index.js`

## Files Chain
index -> schema -> queries -> types, books