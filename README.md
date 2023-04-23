# Installation and usage
create a folder named 'socialpost' and under that folder
1. Clone this repository (also frontend --> https://github.com/3vdi/socialpost-frontend.git )
```
git clone https://github.com/3vdi/socialpost-backend.git
```
2. Install dependencies
```
npm install
```
3. Create .env in root directory
```
cd ..
touch .env
```
4. Configure environment variables in your new .env file
```
MONGO_URI=<YOUR_MONGO_URI> 
TOKEN_KEY=<YOUR_TOKEN_KEY>
```
5. Start a new terminal and run server
```
nodemon index.js
```
