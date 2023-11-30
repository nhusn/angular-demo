import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  empName:string="Max Miller"
  empImageUrl:string="https://m.media-amazon.com/images/M/MV5BZTg4YTBiYzQtYmZhZi00NmNhLWE4ZTQtMTBjZjVhMzc4ZWI4XkEyXkFqcGdeQXVyNzg5MzIyOA@@._V1_FMjpg_UX1000_.jpg"

  userAdd = ()=>{
    alert("Add Button Clicked")
  }

  getEname(event:any){
    this.empName = event.target.value
  }

  userSubmit(userDetails:any){
    if(userDetails.value){
      alert(`${userDetails.value} added`)
    }else{
      alert('Please fill the form')
    }
  }
}
