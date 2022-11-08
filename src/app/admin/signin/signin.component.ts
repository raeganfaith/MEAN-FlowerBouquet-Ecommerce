import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, UrlSerializer } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public signinForm!: FormGroup;
  constructor(private formBuilder : FormBuilder, private http: HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.signinForm = this.formBuilder.group({
      email:[''],
      password:['']
    })
  }
  signin(){
    this.http.get<any>("http://localhost:3000/signinUsers")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.signinForm.value.email && a.password === this.signinForm.value.password
      });
      if(user){
        alert("Sign In Successful!");
        this.signinForm.reset();
        this.router.navigate(['admin/dashboard'])
      }else{
        alert("User not found");
      }
    },err=>{
      alert("Something went wrong")
    })
  }
}