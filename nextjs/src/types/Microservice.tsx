export class Microservice {
    language: string;
    description: string;
    href: string;
    photoUrl: string;

    constructor(_lang: string, _desc: string, _href: string, _photoUrl: string) {
        this.language = _lang;
        this.description = _desc;
        this.href = _href;
        this.photoUrl = _photoUrl
    }
}