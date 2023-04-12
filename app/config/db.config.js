require('dotenv').config();
module.exports = {
    url: `mongodb+srv://fsgroupc:${process.env.MONGO_PASSWORD}@cluster0.gpiqrbc.mongodb.net/test`
  };