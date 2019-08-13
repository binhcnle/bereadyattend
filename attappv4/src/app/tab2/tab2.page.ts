import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Attendance } from '../types';
import { AttendanceService } from '../attendance.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  attendanceList: Observable<Attendance[]>

  constructor(attendanceService: AttendanceService) {
     this.attendanceList = attendanceService.getAllAttendances();
     console.log (this.attendanceList);
    
  }

}
