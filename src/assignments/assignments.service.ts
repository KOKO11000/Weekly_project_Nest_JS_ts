import { Injectable } from '@nestjs/common';

@Injectable()
export class AssignmentsService {
    sayHi():string{
        return 'Hello Netanel from moched Assignments!!!'
    }
}
