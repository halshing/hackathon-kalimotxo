import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  /**
   * Set a json in localStorage Variable
   *
   * @param {string} name
   * @param {*} env
   * @memberof LocalStorageService
   */
  setJson(name: string, env: any) {
    window.localStorage.setItem(name, JSON.stringify(env));
  }

  /**
   * Get a json from localStorage Variable
   *
   * @param {string} name
   * @returns {*}
   * @memberof LocalStorageService
   */
  getJson(name: string): any {
    return JSON.parse(window.localStorage.getItem(name));
  }

  /**
   * Set a string in localStorage Variable
   *
   * @param {string} name
   * @param {*} env
   * @memberof LocalStorageService
   */
  setString(name: string, env: string) {
    window.localStorage.setItem(name, env);
  }

  /**
   * Get a string from localStorage Variable
   *
   * @param {string} name
   * @returns {*}
   * @memberof LocalStorageService
   */
  getString(name: string): string {
    return window.localStorage.getItem(name);
  }
}
