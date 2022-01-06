const crypto = require('crypto');

exports.sha256 = (value) => {
    return crypto.createHash('sha256').update(value).digest('base64');
}