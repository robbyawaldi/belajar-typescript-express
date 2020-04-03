FROM node as builder
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx sequelize-cli init
RUN npm run tsc

FROM node
WORKDIR /usr/app
COPY package*.json ./
RUN npm install --production

COPY --from=builder /usr/app/build ./build

COPY .env .

EXPOSE 4000
CMD node build/index.js