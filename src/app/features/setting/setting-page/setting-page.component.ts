import { Component } from '@angular/core'
import { Project, projects } from './../../../data/projets';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-setting-page',
  templateUrl: './setting-page.component.html',
  styleUrl: './setting-page.component.scss',
})
export class SettingPageComponent {
  openTab = 1;
  isUpdateMode = false;
  showDeleteModal = false;
  showToast=false;


  constructor(private fb: FormBuilder) {}


  toggleTabs(open: number) {
    if (open === 1) {
      this.isUpdateMode = false;
    }
    this.openTab = open;
  }

  updateProject(open: number) {
    this.openTab = open;
    this.isUpdateMode = true;
    

  }
  deleteProject() {
    this.showDeleteModal = true;
  }
  confirmDelete(){
    this.showToast=true;
    this.showDeleteModal=false;
  }

  cancelDelete() {
    this.showDeleteModal = false;
  }

  onSubmit(){
  }
}
