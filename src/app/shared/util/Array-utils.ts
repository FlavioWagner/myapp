import { StringUtils } from './string-utils';

export class ArrayUtils {
  static sortByProp(array: any[] | null | undefined, prop: string, asc = true): any[] {
    if (array == null) {
      return [];
    }

    const fn = this.sortByPropFn(prop, asc);
    return array.sort(fn);
  }

  static sortByPropFn(prop: string, asc = true): (x: any, y: any) => number {
    return (x: any, y: any) => {
      let valX = this.pathToVal(x, prop);
      let valY = this.pathToVal(y, prop);

      valX = this.transformVal(valX);
      valY = this.transformVal(valY);

      if (valX < valY) {
        return asc ? -1 : 1;
      }
      if (valX > valY) {
        return asc ? 1 : -1;
      }
      return 0;
    };
  }

  private static transformVal(val: any): any {
    if (val != null) {
      if (isNaN(val)) {
        val = StringUtils.translate(val.toString().toUpperCase());
      } else {
        val = Number(val);
      }
    }
    return val;
  }

  static pathToVal(obj: any, path: string, divisor = '.'): any {
    const divisoes = path.split(divisor);
    let valorAtual = obj;
    for (const d of divisoes) {
      valorAtual = valorAtual[d];
      if (valorAtual == null) {
        break;
      }
    }
    return valorAtual;
  }

  static sortByProps(array: any[], propList: string[], asc = true): void {
    array.sort((x, y) => {
      for (const prop of propList) {
        const valX = x[prop] != null ? StringUtils.translate(x[prop].toString().toUpperCase()) : '';
        const valY = y[prop] != null ? StringUtils.translate(y[prop].toString().toUpperCase()) : '';

        if (valX < valY) {
          return asc ? -1 : 1;
        }
        if (valX > valY) {
          return asc ? 1 : -1;
        }
      }

      return 0;
    });
  }
}
