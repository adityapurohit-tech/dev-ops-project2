# Step 1: Build the React app
FROM node:18 AS build
WORKDIR /app
COPY ./frontend/package*.json ./
RUN npm install
COPY ./frontend ./
RUN npm run build

# Step 2: Serve the React app with Nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 8082

# Step 3: Start Nginx
CMD ["nginx", "-g", "daemon off;"]