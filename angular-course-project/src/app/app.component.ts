import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-course-project';
  serverElements = [{type: "server", name: "testServer", content: "just a test"}]
  parentString = 'I`ve changed child string'
  onServerAdded(server: {name: string, content: string}){
    this.serverElements.push({
      type: "server",
      name: server.name,
      content: server.content
    })
  }
  reactToChild(){
    console.log('I`ve reacted to child button');
    
  }
}
