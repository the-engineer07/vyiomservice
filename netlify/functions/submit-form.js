// netlify/functions/submit-form.js
const http = require('https');

exports.handler = async (event, context) => {
  // Always handle preflight CORS or incorrect methods gracefully
  if (event.httpMethod !== "POST") {
    return { 
      statusCode: 405, 
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ success: false, message: "Method Not Allowed" }) 
    };
  }

  try {
    const payload = JSON.parse(event.body);
    
    // Inject the secret key you saved in the Netlify UI
    payload.access_key = process.env.WEB3FORMS_ACCESS_KEY;

    // Send data to Web3Forms using native HTTPS to prevent fetch environmental errors
    return new Promise((resolve, reject) => {
      const postData = JSON.stringify(payload);
      
      const options = {
        hostname: 'api.web3forms.com',
        port: 443,
        path: '/submit',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(postData),
          'Accept': 'application/json'
        }
      };

      const req = http.request(options, (res) => {
        let data = '';
        res.on('data', (chunk) => { data += chunk; });
        res.on('end', () => {
          resolve({
            statusCode: res.statusCode,
            headers: { "Content-Type": "application/json" },
            body: data
          });
        });
      });

      req.on('error', (e) => {
        reject(e);
      });

      req.write(postData);
      req.end();
    });

  } catch (error) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ success: false, message: error.message })
    };
  }
};