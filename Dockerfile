FROM node:13-alpine as build
RUN apk --no-cache add g++ gcc libgcc libstdc++ linux-headers make python
#RUN npm install --quiet node-gyp -g
WORKDIR /usr/src/app 
#RUN npm install -g electron
RUN npm install -g @angular/cli 
#--scripts-prepend-node-path
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN ng build --output-path=dist
#EXPOSE 4200
#CMD ["ng", "serve", "--host 0.0.0.0"]

FROM nginx:1.13.3-alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]