# Use official Node.js image
FROM node:14-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Expose port and start the app
EXPOSE 3000
CMD ["npm", "start"]
