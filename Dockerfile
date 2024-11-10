FROM node:22.11.0 AS build
COPY package*.json ./
RUN npm install --no--cache-dir
WORKDIR /app
COPY . .
RUN npm run build --prod
FROM nginx:alpine
COPY --from=build /app/dist/task-manager /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

#docker build -t vitorsrocha96/taskmanagerfront:1.0.0 .
#docker run -it -p 81:80 vitorsrocha96/taskmanagerfront:1.0.0
#docker system prune --volumes
