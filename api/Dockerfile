# Use official Node.js image
FROM node:14-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Expose port and start the app
EXPOSE 5000
CMD ["npm", "start"]
