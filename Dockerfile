FROM node:12.7-alpine AS build
WORKDIR /usr/src/calendar-of-tasks
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.17.9-alpine
COPY --from=build /usr/src/calendar-of-tasks/dist/calendar-of-events /usr/share/nginx/html
EXPOSE 80
