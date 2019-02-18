## FIRST
docker run -v $(pwd)/app:/home/node -i -t --workdir /home/node -p 8888:8888 node:latest bash

## SECOND