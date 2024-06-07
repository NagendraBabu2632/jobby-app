import { Component, OnInit } from '@angular/core';
import { JobdataService } from '../jobdata.service';
import { from } from 'rxjs';
import e from 'express';


@Component({
  selector: 'app-alljobs',
  templateUrl: './alljobs.component.html',
  styleUrl: './alljobs.component.css'
})
export class AlljobsComponent implements OnInit{

  userprofiledata: any;
  checkboxInputs: string[] = [];
  radioInput = '';
  searchInput = '';

  public employmentTypesList = [
    {
      label: 'Full Time',
      employmentTypeId: 'FULLTIME',
    },
    {
      label: 'Part Time',
      employmentTypeId: 'PARTTIME',
    },
    {
      label: 'Freelance',
      employmentTypeId: 'FREELANCE',
    },
    {
      label: 'Internship',
      employmentTypeId: 'INTERNSHIP',
    },
  ];

  public salaryRangesList = [
    {
      salaryRangeId: '1000000',
      label: '10 LPA and above',
    },
    {
      salaryRangeId: '2000000',
      label: '20 LPA and above',
    },
    {
      salaryRangeId: '3000000',
      label: '30 LPA and above',
    },
    {
      salaryRangeId: '4000000',
      label: '40 LPA and above',
    },
  ];

  public apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
  };

  public apiJobsStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
  };

  public failureViewImg =
    'https://assets.ccbp.in/frontend/react-js/failure-img.png';
  jobsList: any;
 eachItem: any;


    getuserprofiledata(){
      from(this.jobservce.getProfileDat()).subscribe(
        (response: any) => {
          this.userprofiledata = response;
        },
        (error: any) => {
          console.log(error);
        })
    }
  
  
    getJobListDetails(){
      this.jobservce.getJobsList(this.checkboxInputs, this.radioInput, this.searchInput).subscribe(
        (response: any) => {
          this.jobsList = response.jobs;
        },
        (error: any) => {
          console.log(error);
        })
    }
   

  constructor(private jobservce:JobdataService) { }
  ngOnInit(): void {
    this.getuserprofiledata()
    this.getJobListDetails()
  }
  
  setsearchInput(inputElement: HTMLInputElement): void {
    this.searchInput = inputElement.value;
    this.getJobListDetails();
  }

  selectRadio(event: any): void {
    this.radioInput = event.salaryRangeId;
    this.getJobListDetails();
  }

  selectItems(event: any): void {
     
   const index = this.checkboxInputs.indexOf(event.employmentTypeId);
    if (index !== -1) {
        // Value is already in the array, remove it
        this.checkboxInputs = this.checkboxInputs.filter(id => id !== event.employmentTypeId);
    } else {
        // Value is not in the array, add it
        this.checkboxInputs.push(event.employmentTypeId);
    }

    this.getJobListDetails();
  }



}

  
  

