export class CommaFormatValueConverter {
  toView(array: string[]) {
    if ((array || []).length == 0) {
      return '（なし）';
    }
    return array.reduce((acc, cur) => acc + ',' + cur);
  }
}
