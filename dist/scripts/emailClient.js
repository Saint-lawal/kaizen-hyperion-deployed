import Email from './smtp.js';

export default {
  sendMessage: function (title, data) {
    console.log('Email Js', Email);
    return true;
    // return Email.send({
    //   Host: 'smtp.gmail.com',
    //   Username: 'abiso.lawal@gmail.com',
    //   Password: '0UT$IDER001',
    //   To: 'abiso_lawal@yahoo.com',
    //   From: title,
    //   Subject: data.message,
    //   Body: data.message
    // }).then(message => {
    //   console.log(message);
    //   return true;
    // }).catch(error => {
    //   console.log(error);
    //   return false;
    // });
  }
};
