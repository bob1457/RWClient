import { AppStatusPipe } from './app-status.pipe';

describe('AppStatusPipe', () => {
  it('create an instance', () => {
    const pipe = new AppStatusPipe();
    expect(pipe).toBeTruthy();
  });
});
