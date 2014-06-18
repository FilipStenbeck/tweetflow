/* global describe, it */
/** @jsx React.DOM **/

define(['utils/animation', 'utils/appUtil', 'tweet'], function (animation, appUtil, Tweet) {
  
 
  describe('Tweetflow', function() {

    describe('Animation', function() {
      
      it('should produce a css class name', function() {
        var sample =animation.getCssName();
        
        sample.should.be.a('string');
        sample.should.not.equal('');
      });

      it('should not produce the same css class twice in a row', function() {
        var sample1 =animation.getCssName();
        var sample2 =animation.getCssName();

        sample1.should.not.equal(sample2);
      });
    });

    describe('AppUtil', function() {
      
      it('It should parse url parameter with a query value', function() {
        var paramObj = appUtil.getQueryParams('http://localhost:9000/?query=reactjs&interval=5000')
        paramObj['interval'].should.equal('5000');
      });

      it('It should parse url parameter with interval value', function() {
        var paramObj = appUtil.getQueryParams('http://localhost:9000/?query=reactjs&interval=5000')
        paramObj['interval'].should.equal('5000');
      });

       it('It should make events of type "the-query-changed"', function() {
        var event = appUtil.createQueryChangedEvent('reactjs')
        event.type.should.equal('the-query-changed')
      });

      it('It should make events that bubbles', function() {
        var event = appUtil.createQueryChangedEvent('reactjs')
        event.bubbles.should.equal(true)
      });

      it('It should make events with the query param passed in', function() {
        var event = appUtil.createQueryChangedEvent('reactjs')
        event.detail.query.should.equal('reactjs')
      });

      it('It should create <a> elements for text containing http', function() {
        var formated = appUtil.formatText("foobar http://foobar.com is awsesome")
        formated.should.equal('foobar <a href="http://foobar.com" target="top">http://foobar.com</a> is awsesome');
      });

       it('It should create <a> elements for text containing https', function() {
        var formated = appUtil.formatText("foobar https://foobar.com is awsesome")
        formated.should.equal('foobar <a href="https://foobar.com" target="top">https://foobar.com</a> is awsesome');
      });
    });
    
    describe('Tweet', function() {
      
      beforeEach(function() {
        ReactTestUtils = React.addons.TestUtils;

      });

      it('initial state have a updateTweet function ', function() {
        var tweet =  Tweet( {query:"foo", updateInterval:"15000"});
        ReactTestUtils.renderIntoDocument(tweet);
        tweet.updateTweet.should.not.equal(undefined);
      });
    }); 

  });
 
});
