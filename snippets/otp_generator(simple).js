function generateOTP(otp_len){
  let otp = '';
  for(let idx=0; idx < otp_len; idx++){
    otp += Math.floor(Math.random()*10);
  }
  return otp;
}

// pass the length of otp while calling the function;
