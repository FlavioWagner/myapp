import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class StringUtils {
  static onlyDigit(s?: string): string | undefined {
    if (!s) {
      return undefined;
    }

    return s.replace(/\D/g, '');
  }

  static preencheuDigito(doc: string): boolean {
    if (!doc || !doc.toString().trim().length) {
      return false;
    }

    const limpo = StringUtils.onlyDigit(doc);
    if (!limpo) {
      return false;
    }
    return limpo.trim().length > 0;
  }

  static dateToStr(date: Date): string {
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth() + 1;
    const dia = date.getUTCDate();

    let result = year + '-';
    if (month < 10) {
      result = result.concat('0');
    }
    return result.concat(String(month)).concat('-').concat(String(dia));
  }

  static strToDate(val?: string): Date | null {
    if (!val) {
      return null;
    }

    const d = val
      .toString()
      .split('-')
      .map(x => Number(x));
    return new Date(d[0], d[1] - 1, d[2]);
  }

  static translate(toTranslate: string): string {
    const x = 'áàâäÁÀÂÄéèêëÉÈÊËíìïîÍÌÏÎóòöőôÓÒÖŐÔúùûüűÚÙÛÜŰ';
    const y = 'aaaaAAAAeeeeEEEEiiiiIIIIoooooOOOOOuuuuuUUUUU';

    let newString = '';

    for (let i = 0; i < toTranslate.length; i++) {
      const letra = toTranslate.charAt(i);
      const indexX = x.indexOf(letra);
      if (indexX !== -1) {
        newString += y.charAt(indexX);
      } else {
        newString += letra;
      }
    }

    return newString;
  }

  transformarParaMaiusculo(valor: string): string {
    let result = '';
    if (valor) {
      result = valor.toUpperCase();
    }
    return result;
  }
/*
  strToMoment(val: any): Moment | null {
    if (val == null || val === '') {
      return null;
    }

    if (typeof val === 'string') {
      return moment(val, 'YYYY-MM-DD');
    }

    return val as Moment;
  }

  momentToStr(val?: Moment): string | null {
    if (val == null) {
      return null;
    }

    if (typeof val === 'string') {
      return val as string;
    }

    return val.format('YYYY-MM-DD');
  }*/

  emailValido(e?: string): boolean {
    if (!e) {
      return false;
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(e);
  }
}
