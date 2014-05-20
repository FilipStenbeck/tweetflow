/* global describe, it */

define(['animation'], function (animation) {
  
 
  describe('Tweetflow', function() {

    describe('Animation', function() {
      
      it('should produce a css class name"', function() {
        var sample =animation.getCssName();
        
        sample.should.be.a('string');
        sample.should.not.equal('');
      });

      it('should not produce the same css class twice in a row"', function() {
        var sample1 =animation.getCssName();
        var sample2 =animation.getCssName();

        sample1.should.not.equal(sample2);
      });
    });
  });
 
});
