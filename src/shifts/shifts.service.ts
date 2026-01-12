import { Injectable } from '@nestjs/common';

@Injectable()
export class ShiftsService {
    sayHi():string{
        return 'Hi Netanel from moched Shifts'
    }
}
