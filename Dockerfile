FROM node:16.13-alpine as development
ENV NODE_ENV development
WORKDIR /app
COPY package*.json .
COPY tsconfig.json .
RUN npm i
COPY . .
EXPOSE 3000
CMD npm start