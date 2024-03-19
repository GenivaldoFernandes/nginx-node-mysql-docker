FROM node:latest

# Instalação do pacote netcat-openbsd
RUN apt-get update && apt-get install -y netcat-openbsd

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# Download do script wait-for-it.sh
ADD https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh /usr/src/app/wait-for-it.sh

# Concede permissões de execução para o script
RUN chmod +x /usr/src/app/wait-for-it.sh

# Copie o arquivo docker-entrypoint.sh para o contêiner
COPY ./docker-entrypoint.sh /usr/src/app/docker-entrypoint.sh

# Conceda permissões de execução para o script
RUN chmod +x /usr/src/app/docker-entrypoint.sh

COPY . .

EXPOSE 3000

# Execute o script de entrada
ENTRYPOINT ["/usr/src/app/docker-entrypoint.sh"]

CMD ["node", "app.js"]