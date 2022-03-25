export class BrFormatValueConverter {
  toView(value: string) {
    const newline = navigator.userAgent.includes('Windows') ? '\r\n' : '\n';
    return (value || '').replace(/<br>/g, newline);
  }
}
