package com.backend.mae_backend.Services;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class SmsService {

  @Value("${twilio.account.sid}")
  private String accountSid;

  @Value("${twilio.auth.token}")
  private String authToken;

  @Value("${twilio.phone.number}")
  private String fromPhoneNumber;

  public void sendSms(String toPhoneNumber, String message) {
    if (toPhoneNumber.equals(fromPhoneNumber)) {
      throw new IllegalArgumentException("'To' and 'From' number cannot be the same");
    }
    Twilio.init(accountSid, authToken);
    Message.creator(
      new com.twilio.type.PhoneNumber(toPhoneNumber),
      new com.twilio.type.PhoneNumber(fromPhoneNumber),
      message
    ).create();
  }
}
