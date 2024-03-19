# Use a imagem oficial do Nginx como base
FROM nginx:latest

# Remova os arquivos de configuração padrão do Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copie o seu arquivo nginx.conf personalizado para o diretório de configuração do Nginx no contêiner
COPY nginx.conf /etc/nginx/nginx.conf

# Exponha a porta 80 para o tráfego HTTP
EXPOSE 80

# Inicie o servidor Nginx no contêiner quando ele for iniciado
CMD ["nginx", "-g", "daemon off;"]
