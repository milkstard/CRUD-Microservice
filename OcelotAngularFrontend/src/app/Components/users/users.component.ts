import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from '../../Data/Models/User';
import { UsersService } from '../../Data/Services/users.service';

@Component({
  selector: 'ocelot-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  UserList?: Observable<User[]>;
  UserList1?: Observable<User[]>;
  userForm: any;
  userId = 0;

  constructor(private formBuilder: FormBuilder, private userService: UsersService, private router: Router, private toastr: ToastrService) {

  }

  public ngOnInit() {
    this.userForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      address: ['', [Validators.required]]
    })

    this.getUserList();
  }

  public getUserList() {
    this.UserList1 = this.userService.getUserList();
    this.UserList = this.UserList1;
  }

  public postUser(user: User) {
    const user_Master = this.userForm.value;
    this.userService.postUserData(user_Master).subscribe(() => {
      this.getUserList();
      this.userForm.reset();
      this.toastr.success('Data Saved Successfully');
    });
  }

  public userDetailsToEdit(id: string) {
    this.userService.getUserDetailsById(id).subscribe(userResult => {
      this.userId = userResult.userId;
      this.userForm.controls['userName'].setValue(userResult.userName);
      this.userForm.controls['address'].setValue(userResult.address);
    })
  }

  public updateUser(user: User) {
    user.userId = this.userId;
    const user_Master = this.userForm.value;
    this.userService.updateUser(user_Master).subscribe(() => {
      this.toastr.success('Data Updated Successfully');
      this.userForm.reset();
      this.getUserList();
    })
  }

  public deleteUser(id: number) {
    if (window.confirm('Do you want to delete this user?')) {
      this.userService.deleteUserById(id).subscribe(() => {
        this.toastr.success('Data Deleted Successfully');
        this.getUserList();
      });
    }
  }

  public clear(user: User) {
    this.userForm.reset();
  }
}
