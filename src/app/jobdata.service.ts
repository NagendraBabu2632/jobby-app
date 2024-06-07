import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobdataService {
  apiStatus: any;

  constructor(private http:HttpClient) { }
 
 async getProfileDat(){
    const jwtToken =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MTk2Mjg2MTN9. nZDlFsnSWArLKKeF0QbmdVfLgzUbx1BGJsqa2kc_21Y"
    const profileApiUrl = 'https://apis.ccbp.in/profile';
    const optionsProfile = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${jwtToken}`
      })
    };
    
    const fetchedDataProfile: any = await this.http.get(profileApiUrl).pipe(
    catchError(error => {
      this.apiStatus = 'failure';
      return error;
    })
  );
  return fetchedDataProfile

  }


  getJobsList(checkboxInputs?: any , radioInput?: any, searchInput?: any) {
    // const jwtToken =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MTk2Mjg2MTN9.nZDlFsnSWArLKKeF0QbmdVfLgzUbx1BGJsqa2kc_21Y";
    return this.http.get(`https://apis.ccbp.in/jobs?employment_type=${checkboxInputs}&minimum_package=${radioInput}&search=${searchInput}`,
    );
  }


  getJobData(id?:string){
  //   const jwtToken =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MTk2Mjg2MTN9.nZDlFsnSWArLKKeF0QbmdVfLgzUbx1BGJsqa2kc_21Y";
  //  return this.http.get(`https://apis.ccbp.in/jobs/${id}`,{ headers: {
  //   Authorization: `Bearer ${jwtToken}`
  // }})
  return this.http.get(`https://apis.ccbp.in/jobs/${id}`)

  }
}
