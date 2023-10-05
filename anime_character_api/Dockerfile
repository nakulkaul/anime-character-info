FROM node:18-bookworm-slim

LABEL maintainer="Amogh Madan <amoghmadaan@gmail.com>"

WORKDIR /anime-character/

COPY ./package*.json .
RUN npm ci --location=project
