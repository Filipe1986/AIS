module.exports = function(uri){


  const mongoose =  require("mongoose");
  
  const logger = require("log4js").getLogger();
  logger.level = "debug";
  
  console.log(uri)
  mongoose.connect(uri , {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.on('connected', () => {
    logger.log("Mongoose conectado!");
  });
  
  mongoose.connection.on('error', function (error){
    logger.log("error" , error)
  });
  /*
  mongoose.connection.on('disconnected', function (){
    logger.log("Mongoose desconectado!")
  });
  
  process.on('SIGINT', function(){
    mongoose.connection.close(function(){
      logger.log('Mongoose desconectado com a aplicação!');
      process.exit(0);
    })
  });*/
}
