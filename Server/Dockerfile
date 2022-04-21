FROM node:16
WORKDIR /api
COPY package*.json ./
COPY package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 5001
CMD ["node", "dist/app.js"]