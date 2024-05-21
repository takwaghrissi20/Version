# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install next
ARG BUILD_PROFILE
COPY . .
RUN npm run build
RUN npm install -g serve


EXPOSE 3000
CMD ["serve", "-s", "dist"]
