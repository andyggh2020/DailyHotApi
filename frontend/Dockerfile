FROM node:20-alpine AS builder

RUN npm install -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install

COPY . .

ARG VITE_GLOBAL_API=http://localhost:6688
ENV VITE_GLOBAL_API=$VITE_GLOBAL_API

RUN echo "VITE_GLOBAL_API=$VITE_GLOBAL_API" > .env && pnpm build

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
