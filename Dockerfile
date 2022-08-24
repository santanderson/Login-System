FROM node:16-alpine
WORKDIR /app
COPY . .
EXPOSE 3000
RUN yarn
CMD ["yarn", "start"]