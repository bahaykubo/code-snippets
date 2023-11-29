FROM node:16.14.0-alpine3.15

RUN mkdir src
COPY ./package.json src
COPY ./yarn.lock src
COPY ./dist src/dist
COPY ./data src/data
WORKDIR /src

RUN adduser --disabled-password appuser
RUN chown -R appuser:appuser /src

USER appuser
RUN yarn install --production
CMD ["yarn", "start"]
