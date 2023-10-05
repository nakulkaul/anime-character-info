FROM node:18-bookworm-slim

LABEL maintainer="Amogh Madan <amoghmadaan@gmail.com>"

WORKDIR /anime-character/

WORKDIR /anime-character
COPY ./anime_character_api/package*.json .
RUN npm ci --location=project
