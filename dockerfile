# Starts with a lightweight Node.js 22 image.
FROM node:22-alpine

# Sets the working directory inside the container.
WORKDIR /app

# Copies package.json and package-lock.json.
COPY package*.json ./

# Installs dependencies during image building.
RUN npm ci

# Copies the remaining project files.
COPY . .

# Documents the port the application uses.
EXPOSE 8080

# Starts your Node.js server when the container runs.
CMD ["node", "app.js"]