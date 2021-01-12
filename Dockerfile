FROM node:6.9

COPY package.json /vaprpc/package.json
WORKDIR /vaprpc
RUN npm install

COPY . /vaprpc
RUN mkdir dist

ENTRYPOINT [ "/vaprpc/node_modules/.bin/mocha" ]
