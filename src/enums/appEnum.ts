import { env } from "../config/env";

export enum AppEnum {
  environment = env('APP_ENV'),
  name = env('APP_NAME'),
  url = env(`APP_URL_${env('APP_ENV')}`)
};