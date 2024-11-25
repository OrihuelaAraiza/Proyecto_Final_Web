# Use Node.js 18 as the base image
FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Install bcrypt dependencies for building native modules (if bcrypt is still required)
RUN apt-get update && apt-get install -y python3 build-essential

# Copy the rest of the application code
COPY . .

# Generate Prisma Client
RUN npx prisma generate

# Expose the application port
EXPOSE 5000

# Start the application
CMD ["npm", "start"]
