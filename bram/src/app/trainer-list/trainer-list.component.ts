import {Component} from "@angular/core";
import {EmitterServiceService} from "../emitter-service.service";
import {OnChanges} from "angular2/core";
import {Trainer} from "../model/Trainer";

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  // styleUrls: ['./trainer-list.component.css']
})
export class TrainerListComponent implements OnChanges {

  constructor(
    private EmitterServiceService: EmitterServiceService
  ){}

  trainer: Trainer[];

    // loadTrainers(){
    //     // Get all pokemon from the service
    //     this.EmitterServiceService.getTrainers()
    //         .subscribe(
    //             trainer => this.trainer = trainer, // Bind to view/html component
    //             err => {
    //                 console.log(err); // Log errors als er zijn
    //             });
    // }

    ngOnInit(){
        // Vuur de load pokemon functie uit
        // this.loadTrainers()
    }


    ngOnChanges(changes:any) {
    // this.EmitterServiceService.getTrainers().subscribe(
    //     trainers => this.trainer = trainers, // Bind to view/html component
    //     err => {
    //       console.log(err); // Log errors als er zijn
    //     });
    }
}
