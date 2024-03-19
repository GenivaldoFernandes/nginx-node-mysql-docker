FROM mysql:5.7

# Define a senha do root
ENV MYSQL_ROOT_PASSWORD=123456

# Copiando o script SQL para o diretório de inicialização do MySQL
COPY init.sql /docker-entrypoint-initdb.d/

# Expondo a porta padrão do MySQL
EXPOSE 3306
