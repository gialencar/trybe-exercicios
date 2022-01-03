const service = require('./service');

test('testa a função getRandomNumber', () => {
  service.getRandomNumber = jest.fn().mockReturnValue(10);

  service.getRandomNumber();

  expect(service.getRandomNumber).toHaveBeenCalled();
  expect(service.getRandomNumber).toHaveBeenCalledTimes(1);
  expect(service.getRandomNumber()).toBe(10);
});
