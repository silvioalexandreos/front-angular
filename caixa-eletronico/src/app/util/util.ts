export class Util {
  static descricaoConcat(item: any[]): string {
    return item.map(x => x.descricao).join(',');
  }
}
