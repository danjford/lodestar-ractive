export class ContentType {

  private contentType: Object = {
    formData: 'multipart/form-data',
    json: 'application/json;charset=UTF-8',
    urlEncoded: 'application/x-www-form-urlencoded'
  };

  constructor (type: string) {
    return this.contentType[type];
  }

}

export enum RequestType {
  PUT,
  GET,
  POST,
  DELETE
}

export interface AjaxOptions {
  url: string,
  data?: Object,
  type: RequestType,
  contentType?: ContentType
}

export interface RestOptions {
  data?: Object,
  contentType?: ContentType
}