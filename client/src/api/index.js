import axios from 'axios';
import CryptoJS from 'crypto-js';

const URL = 'http://localhost:5000';

const signHmacSha512 = (privatekey,str) => {
  const key = CryptoJS.enc.Utf8.parse(privatekey);
  const timestamp = CryptoJS.enc.Utf8.parse(str);
  const hmac = CryptoJS.enc.Hex.stringify(CryptoJS.HmacSHA256(timestamp,key));
  return hmac;
}

export const getToken = async () => {
  var host = "http://partner.shopeemobile.com";
  var path = "/api/v2/shop/auth_partner";
  var redirect_urt = "http://localhost:3000/";
  const date = new Date();
  let time = date.getTime()/1000;
  var timestampss = Math.floor(time);
  const partner_id = "2003951";
  const partner_key = "37ca0827e1cde26308acc86d97109ecaf99f36d1cca9cd14140cd0edb6a22252";
  const basestring = partner_id+path+timestampss; 
  var sign = signHmacSha512(partner_key,basestring);
  var link = host + path + `?partner_id=${partner_id}&timestamp=${timestampss}&sign=${sign}&redirect=${redirect_urt}`;
      console.log(link);
  window.location.href = link;
  };

  export const getAuth = async () => {
    try {
     
      let response = await fetch(`${URL}/test`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        
        }
      })    
      return await response.json();
    } catch(err) {
      console.log(err)
    }
  };
  