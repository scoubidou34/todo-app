import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeviewerComponent } from './treeviewer/treeviewer.component';
import { Viewer3dComponent } from './viewer3d/viewer3d.component';

@NgModule({
  declarations: [TreeviewerComponent, Viewer3dComponent],
  imports: [
    CommonModule
  ],
  exports:[Viewer3dComponent]
})
export class View3DModule { }
