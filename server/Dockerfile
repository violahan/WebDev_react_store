FROM node:18

# Create app directory
WORKDIR /server/app
COPY . .

RUN npm install

EXPOSE 3000
CMD [ "node", "app.js" ]


#docker build . -t api-server
#docker run -p 3000:3000 api-server