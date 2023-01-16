const mongoose = require("mongoose");

module.exports = async () => {
  const mongoUri =
    "mongodb+srv://sarvesh:ge9D-vTwYf9ia6H@cluster0.hqs2vev.mongodb.net/?retryWrites=true&w=majority";
  try {
    const connect = await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB connected: ${connect.connection.host}`);
  } catch (e) {
    console.log(e);
  }
};
