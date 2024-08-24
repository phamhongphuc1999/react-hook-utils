import { useCallback } from 'react';

interface Params {
  [param: string]: string;
}

interface Item {
  [item: string]: string | Item;
}

export interface LocaleType {
  [local: string]: {
    [key: string]: string | Item;
  };
}

function replace(text: string, params?: Params) {
  if (params) {
    const paramArray = Object.entries(params);
    let result = text;
    for (const _param of paramArray) {
      result = result.replace(`%{${_param[0]}}`, _param[1]);
    }
    return result;
  }
  return text;
}

function translate(locale: LocaleType, language: string, key: string, params?: Params) {
  let keys = key.split('.');
  let result = locale[language][keys[0]];
  keys = keys.slice(1);
  for (const _key of keys) {
    const _check = result instanceof String || typeof result === 'string';
    if (!_check) result = (result as Item)[_key];
    else return key;
  }
  if (result instanceof String || typeof result === 'string')
    return replace(result.toString(), params);
  else return key;
}

/**
 * Switch text into a special language
 * @param {LocaleType} locale The language dictionary
 * @param {string} language The language is used
 */
export function useTranslate(locale: LocaleType, language: string) {
  /**
   * Return language
   * @param {string} key
   * @param {Params | undefined} param
   */
  const _translate = useCallback(
    (key: string, params?: Params) => {
      return translate(locale, language, key, params);
    },
    [locale, language],
  );
  return { t: _translate };
}
