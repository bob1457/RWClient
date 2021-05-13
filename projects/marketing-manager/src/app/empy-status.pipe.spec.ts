import { EmpyStatusPipe } from './empy-status.pipe';

describe('EmpyStatusPipe', () => {
  it('create an instance', () => {
    const pipe = new EmpyStatusPipe();
    expect(pipe).toBeTruthy();
  });
});
