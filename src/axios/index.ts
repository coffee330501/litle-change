import axios from "axios";

export class LightReq {
  public static baseURL = process.env.VUE_APP_BASE_URL;
  public static async get(url: string, params?: any) {
    return this.convertToPromise(
      axios({ url, baseURL: this.baseURL, params, method: "GET" })
    );
  }

  public static async post(url: string, data?: any) {
    return this.convertToPromise(
      axios({ url, baseURL: this.baseURL, data, method: "POST" })
    );
  }

  public static async put(url: string, data?: any) {
    return this.convertToPromise(
      axios({ url, baseURL: this.baseURL, data, method: "PUT" })
    );
  }

  public static async delete(url: string, data?: any) {
    return this.convertToPromise(
      axios({ url, baseURL: this.baseURL, data, method: "DELETE" })
    );
  }

  public static async convertToPromise<T>(
    func: Promise<T>,
    errorHandler?: (e: any) => void
  ) {
    return new Promise((resolve, reject) =>
      func
        .then((res) => resolve(res))
        .catch((e) => {
          if (!errorHandler) return e;
          errorHandler(e);
        })
    );
  }
}
