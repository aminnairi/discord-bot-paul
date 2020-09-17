FROM node:14.0.0-alpine

ARG DISCORD_BOT_TOKEN

COPY ./package.json .

RUN yarn install --production

COPY . .

CMD [ "yarn", "start" ]
