#!/bin/bash

# Função para esperar até que o MySQL esteja disponível
wait_for_mysql() {
  echo "Aguardando o MySQL estar disponível..."
  while ! nc -z mysql 3306; do
    sleep 1
  done
  echo "O MySQL está disponível!"
}

# Chama a função para esperar o MySQL
wait_for_mysql

# Inicia o aplicativo Node.js
exec "$@"