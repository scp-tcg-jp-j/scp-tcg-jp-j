export class SummaryFormatValueConverter {
  toView(array: string[]) {
    return array.slice(0, 10).reduce((acc, cur) => acc + ',' + cur)
  }
}
