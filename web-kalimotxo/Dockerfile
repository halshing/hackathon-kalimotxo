FROM node:8.11.3

LABEL mainteiner="in-tech"

RUN npm install --quiet node-gyp yarn -g

ARG PORT=80
ENV PORT $PORT
EXPOSE $PORT 4200

WORKDIR /usr/app/
COPY package.json yarn.lock ./
RUN yarn install --silent
ENV PATH /usr/app/node_modules/.bin:$PATH

COPY ./ ./

RUN [ "npm", "run", "documentation" ]
RUN [ "npm", "run", "build" ]

CMD [ "npm", "run", "start:prod" ]
