# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:19-alpine3.16 as build_stage
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

#Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.23.3
COPY --from=build_stage /app/build/ /usr/share/nginx/html
## Copy the default nginx.conf to work with react routes
COPY  default_nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 15000