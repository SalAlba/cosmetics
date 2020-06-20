import { BankaccountPipe } from './bankaccount.pipe';

describe('BankaccountPipe', () => {
  it('create an instance', () => {
    const pipe = new BankaccountPipe();
    expect(pipe).toBeTruthy();
  });
});
