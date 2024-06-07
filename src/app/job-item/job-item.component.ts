import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobdataService } from '../jobdata.service';

@Component({
  selector: 'app-job-item',
  templateUrl: './job-item.component.html',
  styleUrl: './job-item.component.css'
})
export class JobItemComponent implements OnInit{
  jobId: string | undefined;
  jobDetails: any | undefined;
  jobTitle:any | undefined;
  lifeAtCompany: any;
  companyLogoUrl: string | undefined;
  companyWebsiteUrl: string | undefined;
  employmentType: string | undefined;
  jobDescription: string | undefined;
  skills: any[] | undefined;
  location: string | undefined;
  packagePerAnnum: string | undefined;
  rating: number | undefined;
  similarJobs: any[] | undefined;

  constructor(private route: ActivatedRoute, private job: JobdataService) {}

  ngOnInit(): void {
    this.jobId = this.route.snapshot.paramMap.get('id')!;
    console.log('ID:', this.jobId);
    this.getsingleJob();
  }

  getsingleJob() {
    this.job.getJobData(this.jobId).subscribe((data) => {
      console.log(data)
      this.jobDetails = data;

      // Ensure jobDetails is populated before accessing its properties
      if (this.jobDetails && this.jobDetails.job_details) {
        this.jobTitle = this.jobDetails.job_details.title;
        this.companyLogoUrl = this.jobDetails.job_details.company_logo_url;
        this.companyWebsiteUrl = this.jobDetails.job_details.company_website_url;
        this.employmentType = this.jobDetails.job_details.employment_type;
        this.jobDescription = this.jobDetails.job_details.job_description;
        this.skills = this.jobDetails.job_details.skills;
        this.lifeAtCompany = this.jobDetails.job_details.life_at_company;
        this.location = this.jobDetails.job_details.location;
        this.packagePerAnnum = this.jobDetails.job_details.package_per_annum;
        this.rating = this.jobDetails.job_details.rating;
        this.similarJobs = this.jobDetails.similar_jobs;
      } else {
        console.error('jobDetails or jobDetails.job_details is undefined');
      }
    });
  }

  sendid(e:any){
    this.jobId = e
    this.getsingleJob()
  }
}
