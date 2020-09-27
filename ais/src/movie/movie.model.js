var mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');

var schema = mongoose.Schema(
  {
    idAIS: {
      type: mongoose.Schema.Types.ObjectId,
    },
    adult : Boolean,
    budget : Number,
    id : {
      type : Number,
      unique : true
    },
    original_language : String,
    title: String,
    original_title : String,
    belongs_to_collection : {
      id : Number,
      name : String
    },
    popularity : Number,
    runtime : Number,
    status : String,
    vote_average : Number,
    vote_count : Number,
    translations : Object


  },
  { timestamps: true }
);
schema.plugin(uniqueValidator);

mongoose.model("Movie", schema);
