# Use the official Node.js image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the frontend for production
RUN npm run build

# Use a lightweight web server to serve the built files
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=0 /app/dist /usr/share/nginx/html

# Expose the port the app runs on
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]