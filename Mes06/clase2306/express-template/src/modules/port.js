module.exports = {
  port: process.env.PORT || 2020,
  callback: () => {
    console.log("localhost: " + this.port + " funcionando");
  },
};