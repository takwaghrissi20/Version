# Build stage
FROM node:18 AS build-stage
WORKDIR /app

# Copy only package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies with npm ci
RUN npm ci --legacy-peer-deps

# Copy the rest of the code
COPY . .

# Increase memory limit for Node.js during build
ENV NODE_OPTIONS="--max-old-space-size=8192"

# Build the application
RUN npm run build

# Production stage
FROM node:18 AS production-stage
WORKDIR /app

# Copy built files from the build stage
COPY --from=build-stage /app/dist ./dist

# Install Serve to serve the application
RUN npm install -g serve

# Expose the port
EXPOSE 3000

# Start the server
CMD ["serve", "-s", "dist"]
