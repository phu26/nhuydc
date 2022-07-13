import { TestModel } from "../models/TestModel.js";
import crypto from "crypto"
function signHmacSha512(key, str) {
    let hmac = crypto.createHmac("sha256", key);
    let signed = hmac.update(str).digest("hex");
    return signed
  }

export const getAuth = async(req,res) =>{

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
      
    
} catch (error) {
    console.log("ok2");
    res.status(404).json({ error : error});;
}

};
