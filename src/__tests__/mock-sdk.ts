import AWS from 'aws-sdk';
import Pubnub from 'pubnub';
import twilio, {Twilio} from 'twilio';
import {TwilioAuthConfig, TwilioMessage} from '../providers';
import Mail = require('nodemailer/lib/mailer');
import SMTPTransport = require('nodemailer/lib/smtp-transport');

export class MockSES {
  constructor(config: AWS.SES.Types.ClientConfiguration) {}

  async sendEmail(emailReq: AWS.SES.SendEmailRequest) {}
}

export class MockSNS {
  constructor(config: AWS.SNS.ClientConfiguration) {}

  async publish(message: AWS.SNS.PublishInput) {}
}

export class MockSocketIo {
  constructor(
    url: string,
    options?: {
      [key: string]: string;
    },
  ) {}

  async emit(path: string, message: string) {}
}

export class MockMail {
  constructor(config: SMTPTransport.Options) {}

  async sendMail(message: Mail.Options) {}
}

export class MockPubnub {
  constructor(config: Pubnub.PubnubConfig) {}

  grant(grantConfig: Pubnub.GrantParameters) {}
  async publish(publishConfig: Pubnub.PublishParameters) {}
}

export class MockTwilio {
  twilioService: Twilio;
  constructor(config: TwilioAuthConfig) {
    this.twilioService = twilio(config.accountSid, config.authToken);
  }
  // sonarignore:start
  // this is intensional
  async publish(message: TwilioMessage) {}
  // sonarignore:end
