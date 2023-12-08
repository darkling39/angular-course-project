import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  placeholder = 'Search for status'
  appStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Stable')
    }, 2000)
  })
  serverStatus = ''
  servers = [
    {
      instanceType: 'medium',
      name: 'Production server',
      status: 'stable',
      started: new Date(15,1,2023)
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(15,1,2023)
    },
    {
      instanceType: 'small',
      name: 'Development server',
      status: 'offline',
      started: new Date(15,1,2023)
    },
    {
      instanceType: 'small',
      name: 'Testing environment server',
      status: 'stable',
      started: new Date(15,1,2023)
    }
  ]
  addServer(){
    this.servers.push({instanceType:'small', name:'Test server', status: Math.random() > 0.5? 'stable' : 'offline', started:new Date(7,12,2023)})
  }
}
