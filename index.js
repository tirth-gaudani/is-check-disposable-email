const allDomains = require('disposable-email-domains');
var domains = {};
allDomains?.forEach(function (domain) { domains[domain] = true; });

function isCheckDisposableEmail(email) {
    try {
        if (!email || email === '' || email === undefined || email === null) {
            throw new Error(`Please add a valid email address to check.`);
        } else {
            const domain = email?.split('@')?.[1];
            if (domains?.[domain]) {
                return true;
            } else {
                return false;
            }
        }
    } catch (e) {
        console.error('error in isCheckDisposableEmail =----->>    ', e);
        return false;
    }
}

module.exports = isCheckDisposableEmail;