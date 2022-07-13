import axios from 'axios';
import crypto from "crypto-js";

const URL = 'http://localhost:5000';

function signHmacSha512(key, str) {
  let hmac = crypto.createHmac("sha256", key);
  let signed = hmac.update(str).digest("hex");
  return signed
}

export const getAuth = async () => {
    try {
      console.log("ok");
    var host = "https://partner.shopeemobile.com";
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
      let response = await fetch(link, {
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