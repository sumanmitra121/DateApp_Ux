import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidations } from 'src/ErrorHandling/Validation';
import { showMessage } from 'src/Model/showAlertmsg';
import { userDtls } from 'src/Model/userDtls';
import { UtilityService } from 'src/utilyT/-utility.service';

@Component({
  selector: 'app-forms',
  templateUrl: './commonforms.component.html',
  styleUrls: ['./commonforms.component.css']
})
export class CommonformsComponent implements OnInit {
  @Output() hideforms = new EventEmitter<boolean>();
  alert = new showMessage();
  loginForms:FormGroup;
  _show_loader:boolean = false;
  passwordIsValid = false;
  user = new userDtls();
  submitted = false;
  signupForms = new FormGroup({
    userName:new FormControl('',[Validators.required]),
    Email:new FormControl('',[Validators.required,Validators.email]),
    phone:new FormControl('',[Validators.required,Validators.pattern('^[0-9]*$'),Validators.minLength(10),Validators.maxLength(10)]),
    password:new FormControl('',[Validators.required,,Validators.minLength(6)]),
    confirm_password:new FormControl('',[Validators.required])
  },CustomValidations.mustMatch('password', 'confirm_password'))
  @Input() display_form_flag:string;
  constructor(private fb:FormBuilder,private utilyT:UtilityService,private route:Router) {
    this.loginForms = this.fb.group({
      Email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    })

  }
  ngOnInit(): void {}
  login(){
    console.log(this.loginForms.value);
    this.utilyT.clientCallApi('Account/login','P',this.loginForms.value).subscribe((res:userDtls) =>{
            if(res){
              this.checkresponse(res);
            }
            // else{
            //   this.showAlert(res,'D',true)
            // }
    }
    // ,error=>{
    //   this.showAlert(error.error,'D',true)
    // }
    )
  }
  get f() {return this.signupForms.controls;}
  cancel(){this.signupForms.reset(); this.hideforms.emit(false);}
  signup(){
    this._show_loader= true;
    this.submitted = true;
    if (this.signupForms.invalid) {
      this._show_loader= false;
      return;
    }
    this.utilyT.clientCallApi('Account/register','P',this.signupForms.value).subscribe((res:userDtls) => {
          if(res){
            this.showAlert("registration Successfull!!","S",true);
            this._show_loader= false;
          }
          else{
             this.showAlert(res,"D",true)
             this._show_loader= false;
          }
    },(error)=>{
    this.showAlert(error.error,"D",true)
    this._show_loader= false;
    })

  }
  preventCharacter(event){
     if(!CustomValidations.onlynumber(event)){event.preventDefault()}
  }
  passwordValid(event) {
    this.passwordIsValid = event;
  }
  checkresponse(res:userDtls){
    localStorage.setItem('user',JSON.stringify(res))
    this.utilyT._isLoggedIn.next(res);
    this.route.navigate(['main/member-lists'])
  }
  onClosed(_alert){
    this.alert.msg = '';
    this.alert.type = '';
  }
   public showAlert(_msg:any,_type:any,_isDismissble:boolean){
    this.alert.msg = _msg;
    this.alert.type = _type;
    this.alert.dismissible = _isDismissble;
    this.utilyT.showToastr(this.alert);
  }
  }
