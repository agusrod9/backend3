FROM node

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# docker run -p 8080:8085 appbackend3 hace que acceda con localhost:8080 -> O sea, expone en 8080 lo que el server de app.js levanta en el puerto 8085 
EXPOSE 8080 

CMD ["npm", "start"]