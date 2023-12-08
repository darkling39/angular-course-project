import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
 @Output() serverCreated = new EventEmitter<{name: string, content: string}>();
 @Input() element: {"type": string, "name": string, "content": string}
 @Input() childString: string
 newServerName = 'NewServer'
 newServerContent = 'newServer content'
@Output() emitedEvent = new EventEmitter<string>()
constructor(){}

newEvent(){
  this.emitedEvent.emit()
}
onAddServer(){
  this.serverCreated.emit({name: this.newServerName, content: this.newServerContent})
}
}
