import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Goal } from '../goal';
import { GoalService } from '../goal-service/goal.service';
import { AlertService } from '../alert-service/alert.service';
import { Quote } from '../quote-class/quote';
import { QuoteRequestService } from '../quote-http/quote-request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  
  goals:Goal[];
  alertService:AlertService;
  quote:Quote;
  
    addNewGoal(goal){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }
  toggleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }  completeGoal(isComplete, index){
    if (isComplete) {
      this.goals.splice(index,1);
    }
  }
  goToUrl(id){
    this.router.navigate(['/goals',id])
  }

  deleteGoal(index){
    let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}`)

    if (toDelete){
      this.goals.splice(index,1)
      this.alertService.alertMe("Goal has been deleted")
    }
  }
  constructor(goalService:GoalService, alertService:AlertService, private http:HttpClient , private quoteService:QuoteRequestService, private router:Router) {
    this.goals = goalService.getGoals()
    this.alertService = alertService;
  }

  ngOnInit() {
    
    this.quoteService.quoteRequest()
    this.quote = this.quoteService.quote
    
   // interface ApiResponse{
     // author:string;
     // quote:string;
  //  }

    //this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data=>{
     
     // this.quote = new Quote(data.author, data.quote)
   // },err=>{
     // this.quote = new Quote("Winston Churchill","Never never give up!")
     // console.log("An error occurred")
   // })
 // }

  }
}
//We have then made a request to the API with the get function passing in the API URL accompanied by the interface for the data we expect to receive.
// We have then called the subscribe function which has a data function that is executed when the request is successful. 
//We then create a new quote instance with the properties we get from the response.