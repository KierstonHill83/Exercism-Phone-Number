function PhoneNumber(phone) {
  this.phone = phone;
}

PhoneNumber.prototype.number = function() {
  var result = this.phone.replace(/[^\d]/g, '');
  if (result.length === 10) {
    return result;
  } else if (result.length === 11 && result.charAt(0) === '1') {
    var output = result.substring(1);
    return output;
  } else {
    return '0000000000';
  }
};

PhoneNumber.prototype.areaCode = function() {
  var result = this.phone.substring(0, 3);
  return result;
};

PhoneNumber.prototype.toString = function() {
  var areaCode = this.phone.substring(0, 3);
  var first = this.phone.substring(3, 3);
  var second = this.phone.substring(6, 4);
  var output  = '(' + areaCode + ')' + ' ' + first + '-' + second;
  return output;
};

module.exports = PhoneNumber;

