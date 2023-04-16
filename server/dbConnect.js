const mongoose = require("mongoose");

module.exports = async () => {
  const mongoUri =
    "url";
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
