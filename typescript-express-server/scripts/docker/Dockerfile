FROM node:22.12.0-alpine3.21

RUN mkdir src
COPY ./package.json src
COPY ./package-lock.json src
COPY ./dist src/dist
COPY ./data src/data
WORKDIR /src

RUN adduser --disabled-password appuser
RUN chown -R appuser:appuser /src

USER appuser
RUN npm ci --omit=dev
CMD ["npm", "start"]
