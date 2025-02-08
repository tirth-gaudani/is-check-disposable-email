# is-check-disposable-email

`is-check-disposable-email` is a lightweight and easy-to-use Node.js package that verifies whether an email address belongs to a disposable email provider. Disposable email addresses are temporary or throwaway accounts often used for single-use purposes or to avoid spam.

This package helps you prevent the use of such emails in your applications, ensuring that only valid and reliable email addresses are used for registration or communication.

✅ We block over `1,21,916` temporary email domains, providing a robust solution to filter out unwanted addresses.

[![npm version](https://badge.fury.io/js/is-check-disposable-email.svg)](https://badge.fury.io/js/is-check-disposable-email)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## ✨ Features
- Detects disposable email addresses from a wide range of providers.
- Simple and intuitive API.
- Lightweight and efficient, with no external dependencies.
- Suitable for use in any JavaScript or TypeScript project.


## 📥 Installation
Install `is-check-disposable-email` with npm

```bash
  npm install is-check-disposable-email
```

## 🚀 Usage/Examples
```javascript
const isCheckDisposableEmail = require('is-check-disposable-email');

const email = 'example@tempmail.com';

if (isCheckDisposableEmail(email)) {
  console.log('This is a disposable email address.');
} else {
  console.log('This is a valid email address.');
}
```

## 🛠️ Benefits
- Protect your platform from spam and bots.
- Ensure users provide authentic and active email addresses.
- Improve the overall quality of your email database.

## 🤝 Contributing
Feel free to submit issues or pull requests for new features, bug fixes, or general improvements.

## 🔗 Author Details
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://tirth-gaudani.github.io/portfolio/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://in.linkedin.com/in/tirthgaudani)

## 🔑 License

```
     WWWWW||WWWWW           
       W W||W W         
          ||            
        ( OO )__________            
         /  |           \           
        /o o|    MIT     \          
        \___/||_||__||_|| *         
             || ||  || ||           
            _||_|| _||_||           
           (__|__|(__|__|           
##############################
||           MIT            ||
##############################

```