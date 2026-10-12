export interface ISendMail {
    to: string;
    subject: string;
    text: string;
    html: string;
    from?: string;
}

export interface IMailProvider {
    sendMail(data: ISendMail): Promise <{previewUrl: string | false}>;
}