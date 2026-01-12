import { Controller, Get } from '@nestjs/common';
import { ShiftsService } from './shifts.service';

@Controller('shifts')
export class ShiftsController {
    constructor(private readonly shiftService: ShiftsService) { }
    @Get()
    sayHi() {
        return this.shiftService.sayHi()
    }
}
