/* global describe, it */

define(['animation', 'appUtil'], function (animation, appUtil) {
  
 
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

    describe('AppUtil', function() {
      
      it('It should parse url parameters', function() {
        var paramObj = appUtil.getQueryParams('http://localhost:9000/?query=reactjs&interval=5000')
  
        paramObj['http://localhost:9000/?query'].should.equal('reactjs');
        paramObj['interval'].should.equal('5000');

      });
    });
  });
 
});
