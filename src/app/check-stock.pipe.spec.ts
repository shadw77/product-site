import { CheckStockPipe } from './check-stock.pipe';

describe('CheckStockPipe', () => {
  it('create an instance', () => {
    const pipe = new CheckStockPipe();
    expect(pipe).toBeTruthy();
  });
});
