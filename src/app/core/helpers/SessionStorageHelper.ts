export default class SessionStorageHelper {

  private static readonly TOKEN_KEY: string = 'got_TK';

  public static getToken(): string {
    //TODO: get token from local storage
    return ''
  }

  public static saveToken(token: string): void {
    //TODO: save token in local storage
  }


  public static killSession(): void {
    //TODO: remove token from local storage
  }
}
