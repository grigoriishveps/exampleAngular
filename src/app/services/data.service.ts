import {Injectable} from '@angular/core';
import {LogService} from './log.service';


@Injectable()
export class DataService{

  private data: string[] = [ "volodya", "sasha",  "dima"];

  // constructor(@Optional() private logService: LogService){}
  constructor( private logService: LogService){}
  getData(): string[] {
    // if (this.logService) this.logService.write("операция получения данных");
    this.logService.write("операция получения данных");
    return this.data;
  }
  addData(name: string){

    this.data.push(name);
    this.logService.write("операция добавления данных");
  }
}
