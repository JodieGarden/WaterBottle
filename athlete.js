var athlete = {
  hydration: 100,
  distance: 0,
  run: function(distance){
    for(var i = 0; i < distance; i ++){
    if(this.hydration !== 0){
    this.hydration -= 10;
    this.distance += 1;
  }
  }
},
  drink: function(bottle){
    this.hydration += bottle.drink;

  }
}

module.exports = athlete;