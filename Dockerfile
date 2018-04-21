FROM node:alpine

# Create work directory
WORKDIR /usr/src/app

# only copy package.json initially so that `RUN yarn` layer is recreated only
# if there are changes in package.json
ADD package.json package-lock.json ./

# Install app dependencies
RUN npm install

# Copy app source to work directory
COPY . .

# expose port 3000
EXPOSE 3000

# Build
RUN npm start build

# start the app
CMD npm start

