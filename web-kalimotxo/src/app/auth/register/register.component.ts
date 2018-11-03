import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { UserService } from '../../services/user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
  user: any = {};
  registerForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    userType: new FormControl('', Validators.required),

  });
  userTypes: string[] = ['Customer', 'Bartender', 'Business'];
  defaultUserType = 'Customer';
  loading = false;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService
    ) {

  }
  get f() { return this.registerForm.controls; }

  ngOnInit() {
  }
  onSubmit() {
    this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;
        this.userService.register(this.registerForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate(['/kalimotxo/hall-of-fame']);
                },
                error => {
                    // this.alertService.error(error);
                    this.loading = false;
                });
  }
}
