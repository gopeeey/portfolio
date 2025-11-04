import axios, { Axios, AxiosError, AxiosResponse } from "axios";
import { HttpError } from "./errors";

interface ClientConfigInterface {
  baseUrl?: string;
  replaceBaseUrl?: boolean;
}

type PostBody = object;

type PostRequestArgsInterface<T extends PostBody = PostBody> = {
  url: string;
  body: T;
};

export class HttpClient {
  private readonly _baseUrl: Exclude<
    ClientConfigInterface["baseUrl"],
    undefined
  > = process.env.API_BASE_URL as string;

  private readonly _axios: Axios;

  constructor(args?: ClientConfigInterface) {
    if (args) {
      if (args.baseUrl) {
        if (args.replaceBaseUrl) this._baseUrl = args.baseUrl;
        else this._baseUrl += args.baseUrl;
      }
    }

    this._axios = axios.create({ baseURL: this._baseUrl });
  }

  private errorHandler(err: unknown): never {
    let message = "Sorry an error occurred";
    let code = 500;

    if (err instanceof AxiosError) {
      message = err.response?.data?.message || err.message;
      code = err.response?.status || 500;
      if (err.response?.data?.data) console.log(err.response.data.data);
    } else if (err instanceof Error) {
      message = err.message;
    }

    throw new HttpError({ message, statusCode: code });
  }

  handleResponse<ResDataType>(res: AxiosResponse) {
    return res.data as ResDataType;
  }

  async post<ResDataType, ReqDataType extends PostBody = PostBody>(
    args: PostRequestArgsInterface<ReqDataType>
  ) {
    try {
      const res = await this._axios.post(args.url, args.body);
      return this.handleResponse<ResDataType>(res);
    } catch (err) {
      this.errorHandler(err);
    }
  }

  async get<ResDataType>(url: string) {
    try {
      const res = await this._axios.get(url);
      return this.handleResponse<ResDataType>(res);
    } catch (err) {
      this.errorHandler(err);
    }
  }

  async put<ResDataType, ReqDataType extends PostBody = PostBody>(
    args: PostRequestArgsInterface<ReqDataType>
  ) {
    try {
      const res = await this._axios.put(args.url, args.body);
      return this.handleResponse<ResDataType>(res);
    } catch (err) {
      this.errorHandler(err);
    }
  }

  async delete<ResDataType>(url: string) {
    try {
      const res = await this._axios.delete(url);
      return this.handleResponse<ResDataType>(res);
    } catch (err) {
      this.errorHandler(err);
    }
  }
}
