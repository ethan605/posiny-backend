/**
 * @providesModule PosinyBackend.Controllers.TestCtrl
 * @flow
 */

export default class TestCtrl extends Object {
  opts: Object;
  
  constructor(opts: Object = {}) {
    super(opts);

    this.opts = opts;
  }
}