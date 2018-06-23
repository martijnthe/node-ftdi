import bindings = require('bindings');
const native = bindings('ftdi.node');

describe('ftdi.node', async () => {
  it('works', async () => {
    await expect(native.hello()).toBe('world');
  });
});
