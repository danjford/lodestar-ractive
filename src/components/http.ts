import { Promise } from './globals';
import { AjaxOptions, RestOptions, RequestType, ContentType } from '../models/http-options';

export class Http {

  private httpRequest(options: AjaxOptions) {

    return new Promise(function ( resolve, reject ) {

      let xhr = null;

      // code for IE7+, Firefox, Chrome, Opera, Safari, SeaMonkey
      if (window['XMLHttpRequest']) {
        xhr = new XMLHttpRequest();
      } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
      }

      xhr.onreadystatechange = function() {

        const errorCodes = [404, 400, 500];

        // If the request is successful
        if (xhr.readyState === 4 && xhr.status === 200) {

          resolve({
            ok: true,
            status: this.status,
            statusText: xhr.statusText,
            data: xhr.responseText,
            json: () => JSON.parse(xhr.responseText)
          });

        // TODO: Double check if this check is necessary
        } else if (errorCodes.indexOf(xhr.status) > -1) {

          reject({
            ok: false,
            status: this.status,
            statusText: xhr.statusText,
            json: () => JSON.parse(xhr.responseText)
          });

        }

      };

      xhr.onerror = function (error) {

        reject({
          ok: false,
          status: this.status,
          statusText: xhr.statusText,
          json: () => JSON.parse(xhr.responseText)
        });

      };

      xhr.open(options.type, options.url);

      if (options.contentType) {
        xhr.setRequestHeader("Content-Type", options.contentType);
      }

      if (options.data) {
        xhr.send(options.data);
      } else {
        xhr.send();
      }

    });

  }

  private AjaxOptionBuilder(url: string, type: RequestType, params: RestOptions = {}) {
    const ajaxOptions: AjaxOptions = { url, type };

    if (params.data) {
      ajaxOptions.data = params.data;
    }

    if (params.contentType) {
      ajaxOptions.contentType = params.contentType;
    }

    return ajaxOptions;
  }


  public ajax(params: AjaxOptions) {
    return this.httpRequest(params);
  }

  public get(url: string, params: RestOptions = {}) {
    return this.httpRequest(this.AjaxOptionBuilder(
      url,
      RequestType.GET,
      params
    ));
  }

  public post(url: string, params: RestOptions = {}) {
    return this.httpRequest(this.AjaxOptionBuilder(
      url,
      RequestType.POST,
      params
    ));
  }

  public put(url: string, params: RestOptions = {}) {
    return this.httpRequest(this.AjaxOptionBuilder(
      url,
      RequestType.PUT,
      params
    ));
  }

  public delete(url: string, params: RestOptions = {}) {
    return this.httpRequest(this.AjaxOptionBuilder(
      url,
      RequestType.DELETE,
      params
    ));
  }


}