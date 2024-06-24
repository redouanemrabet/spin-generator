import { Project, projects } from './../../../data/projets';
import { Component } from '@angular/core'
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-task-list-page',
  templateUrl: './task-list-page.component.html',
  styleUrl: './task-list-page.component.scss',
})
export class TaskListPageComponent {
  openTab = 1;
  isUpdateMode = false;
  showDeleteModal = false;
  showToast=false;
  projectsList=projects;
  updatedProject?:Project;
  projectForm?: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.projectForm = this.fb.group({
      name: ['', Validators.required],
      date: ['', Validators.required],
      devise: ['', Validators.required],
      pivotModele: [null, Validators.required],
      pivotSociete: [null, Validators.required]
    });
  }

  toggleTabs(open: number) {
    if (open === 1) {
      this.isUpdateMode = false;
    }
    this.openTab = open;
  }

  updateProject(project:any,open: number) {
    this.openTab = open;
    this.isUpdateMode = true;
    this.updateProject=project;

  }
  deleteProject(project:any) {
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
    const newProject: Project = {
      name: this.projectForm?.value.name,
      date: this.projectForm?.value.date,
      devise: this.projectForm?.value.devise,
      pivotModele: this.projectForm?.value.pivotModele,
      pivotSociete: this.projectForm?.value.pivotSociete
    };

    this.projectsList.push(newProject);
    console.log('New project added:', this.projectForm);

    this.projectForm.reset();
    this.openTab=1;

  }
}
