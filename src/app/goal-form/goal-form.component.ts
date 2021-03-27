import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
export class GoalFormComponent implements OnInit {

  newGoal = new Goal(0,"","",new Date());
  @Output() addGoal = new EventEmitter<Goal>();

 submitGoal(){
  this.addGoal.emit(this.newGoal);
  }
  constructor() { }

 ngOnInit(): void {
  }

}
/**
 At the top, we have imported the Output and EventEmitter functions from @angular/core. We have then created the addGoal event emitter object which is of type Goal that will emit an event to the parent component. We have then created the submitGoal() function in which we use the emit method and pass in the new goal object we want to create. 
 Since the addGoal event is being emitted to a parent component, we need to make sure the parent component is informed of this event being emitted. We want the goal component to be the parent component in this case, so let's write the code that will handle this event(goal.component.html).
 */
