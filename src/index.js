export default function (items) {
  function Chainer() {
    this.options = {};
  }

  if(Array.isArray(items)) {
    items.forEach((item) => {
      Chainer.prototype[item] = function (value) {
        this.options[item] = value;
        return this;
      };
      Chainer[item] = function (value) {
        const inst = new Chainer();
        return inst[item](value);
      };
    });
  } else {
    items.entries((item, validator) => {
      Chainer.prototype[item] = function (value) {
        if(validator(value)) {
          this.options[item] = value;
          return this;
        }
        throw new Error(`Validation Error: ${value} cannot be inserted inside ${item}.`);
      };
      Chainer[item] = function (value) {
        const inst = new Chainer();
        return inst[item](value);
      };
    });
  }

  Chainer.prototype.get = function get() {
    return this.options;
  };

  return Chainer;
}
