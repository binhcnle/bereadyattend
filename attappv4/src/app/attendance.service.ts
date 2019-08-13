import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Attendance } from './types';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor(private _httpClient: HttpClient) { 
    
  }

  // getAttendance(attendanceId: string): Observable<Attendance> {
   
  // }

  getAllAttendances(): Observable<Attendance[]> {
    return this._httpClient.get<Attendance[]>(API);
  }


}

const API = "http://webservice.bereadyattend.local/getStudents.php";
