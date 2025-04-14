export class Serie {
    constructor(id, title, network, seasons, description = '', url = '', image = '') {
        this.id = id;
        this.title = title;
        this.network = network;
        this.seasons = seasons;
        this.description = description;
        this.url = url;
        this.image = image;
    }
}