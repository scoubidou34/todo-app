import { Component, OnInit,Output,Input,Injectable} from '@angular/core';
import { TreeviewModule,TreeviewItem, TreeviewConfig,TreeviewI18n } from 'ngx-treeview';
import {TodoDataService} from '../todo-data.service';
import {Todo} from '../todo';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit 
{
    items: TreeviewItem[]=[];
    child : TreeviewItem[]=[];
    config = TreeviewConfig.create({
    hasAllCheckBox: true,
    hasFilter: false,
    hasCollapseExpand: true,
    decoupleChildFromParent: false,
    maxHeight: 400
    });
   

    m_todoDataService : TodoDataService;
  constructor(private todoDataService: TodoDataService) {this.m_todoDataService=todoDataService; }

  ngOnInit() 
  {
    const obs= this.m_todoDataService.getAllTodos();
    const root=new TreeviewItem({text:'root',value:0});
    

   
    var i=1;
    
   
    obs.subscribe(
      {
      next : value => {for(let it of value){this.child.push(new TreeviewItem({text:it.title,value:i}));i++;};},
      //next : value => {for(let it of value){this.child.push({text:it.title,value:i});i++;};},

      complete : ()=> 
      {
        const root=new TreeviewItem({text:'root',value:0,children:this.child});
        root.children=this.child;
        this.items = [root];
      }
      }
    );
    
  }

}
