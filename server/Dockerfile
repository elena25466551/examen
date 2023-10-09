# Usa una imagen de Node.js
FROM node:18

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia los archivos de la aplicación al contenedor
COPY package*.json ./
COPY App.js ./
COPY . .

# Instala las dependencias
RUN npm install

# Expone el puerto 3000
EXPOSE 3000

# Comando para ejecutar la aplicación cuando el contenedor se inicie
CMD ["node", "app.js"]

