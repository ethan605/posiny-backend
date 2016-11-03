/**
 * FooController
 *
 * @description :: Server-side logic for managing foos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 * @providesModule PosinyBackend.Controllers.Foo
 * @flow
 */

module.exports = {
  hi: (req, res) => {
    return res.send('Hi there! 123' + req);
  }
};