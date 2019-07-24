const api_user = ''
const api_key = ''
const functions = require('firebase-functions')
const sendgrid = require('sendgrid')(api_user, api_key)

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.sendEmail = functions.https.onRequest((request, response) => {
  const {to, from, subject, text} = request
  if ((to === '') || (from === '') || (subject === '') || (text === '')) {
    response.send('There was an error sending Email please check your fields')
  }
  sendgrid.send({
    to: to,
    from: from,
    subject: subject,
    text: text
  });

  response.send('Message Successfully sent');
});

exports.sendBulkEmail = functions.https.onRequest((request, response) => {
  const {to, from, subject, text} = request

  sendgrid.send({
    to: to,
    from: from,
    subject: subject,
    text: text
  });
  response.send('Messages sent successfully');
});

exports.sendSMS = functions.https.onRequest((request, response) => {
  response.send('SMS sent successfully');
});

exports.sendBulkSMS = functions.https.onRequest((request, response) => {
  response.send('SMS sent successfully');
});
