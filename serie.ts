export class Serie {
    constructor(
      public id: number,
      public title: string,
      public network: string,
      public seasons: number,
      public description: string = '',
      public url: string = '',
      public imageUrl: string = ''
    ) {}
  }