import { Component, OnInit, AfterContentInit } from '@angular/core';
import { NgProgressService } from 'ng2-progressbar';

@Component({
  selector: 'app-agenda-de-eventos',
  templateUrl: './agenda-de-eventos.component.html',
  styleUrls: ['./agenda-de-eventos.component.sass']
})
export class AgendaDeEventosComponent implements OnInit, AfterContentInit {

  constructor(private progresso: NgProgressService) {
    this.progresso.start();
   }

  ngOnInit() {
    
  }

  ngAfterContentInit(){
    this.progresso.done();
  }
}
