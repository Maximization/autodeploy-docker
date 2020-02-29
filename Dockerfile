FROM node:12.15.0-stretch as build

WORKDIR /home/node/app
COPY package-lock.json package.json ./
RUN npm ci
COPY . .


FROM node:12.15.0-alpine

USER node
RUN mkdir /home/node/app
WORKDIR /home/node/app
COPY --from=build --chown=node:node /home/node/app .

CMD ["node", "index.js"]