var bottle = require('../water_bottle')
var assert = require('assert');

describe('Water Bottle', function(){
  beforeEach(function(){
    bottle.volume = 0;
  })
  it('should be empty at start', function(){
    assert.equal(0, bottle.volume);
  })
  it('should be 100 when filled', function(){
    bottle.filled();
    bottle.drank();
    assert.equal(100, bottle.filled());
  })
  it('should go down by 10 when drank', function(){
    bottle.filled();
    assert.equal(90, bottle.drank());
  })
  it('should go to 0 when empty', function(){
    assert.equal(0, bottle.emptied());
  })
  it('should not go below 0', function(){
    bottle.emptied();
    bottle.drank();
    assert.equal(0, bottle.volume);
  })
})