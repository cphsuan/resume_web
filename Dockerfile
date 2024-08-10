FROM node:20.8 as resume

WORKDIR /usr/client
COPY ./client .

RUN ["npm", "i"]
RUN ["npm", "run", "build"]

FROM nginx:alpine

WORKDIR /usr/share/nginx/

RUN rm -rf html
RUN mkdir html

WORKDIR /

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=resume ./usr/client/dist /usr/share/nginx/html

ENTRYPOINT ["nginx", "-g", "daemon off;"]