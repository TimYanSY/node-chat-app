var expect = require('expect');

var {generateMessage} = require('./message.js');
var {generateLocationMessage} = require('./message.js');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = "Admin";
    var text = "Hello from Admin";
    const message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');

    expect(message).toInclude({
      from,
      text
    });
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location message', () => {
    var from = "Admin";
    var latitude = 1;
    var longitude = 1;
    var url = 'https://www.google.com/maps?q=1,1';

    const locationMessage = generateLocationMessage(from, latitude, longitude);
    expect(locationMessage.createdAt).toBeA('number');

    expect(locationMessage).toInclude({
      from,
      url
    });

  });
});
