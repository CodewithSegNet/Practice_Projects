# Base Image
FROM node:latest

# Working directory
WORKDIR /app

# Move file into Docker container
COPY . /app

# Initialize Npm in docker container
RUN npm install

# Expose Port
EXPOSE 3000

# Start Command
CMD ["node", "server.js"]

