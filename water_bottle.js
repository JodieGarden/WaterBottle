var waterBottle = {
  volume: 0,
  filled: function(){
    return this.volume = 100;
  },
  drank: function(){
    if(this.volume >= 10){
    return this.volume -= 10;
  }
  },
  emptied: function(){
    return this.volume = 0;
  },
  below: function(){

  }
}


module.exports = waterBottle;

