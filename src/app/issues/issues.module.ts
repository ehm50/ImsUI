import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssueAddComponent } from './issue-add/issue-add.component';
import { IssueEditComponent } from './issue-edit/issue-edit.component';
import { IssueListingComponent } from './issue-listing/issue-listing.component';



@NgModule({
  declarations: [IssueAddComponent, IssueEditComponent, IssueListingComponent],
  imports: [
    CommonModule
  ]
})
export class IssuesModule { }
