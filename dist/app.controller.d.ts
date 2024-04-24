import { ClientProxy } from '@nestjs/microservices';
export declare class AppController {
    private client;
    constructor(client: ClientProxy);
    getHelloByName(name?: string): import("rxjs").Observable<any>;
}
