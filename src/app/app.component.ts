import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

interface Student {
  name: string;
  country: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form!: FormGroup;


  list: Student[] = [
    { name: 'A', country: 'A' },
    { name: 'B', country: 'B' },
    { name: 'C', country: 'C' }
  ];

  constructor(private formBuilder: FormBuilder) {}

  get students() {
    return this.form.get('details') as FormArray;
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      details: this.formBuilder.array(
        this.list.map((item: Student) => this.createStudent(item))
      )
    })
  }

  createStudent(item: Student) {
    return this.formBuilder.group({
      name: new FormControl(item.name, [Validators.required]),
      country: new FormControl(item.country, []),
    })
  }

  show() {
    console.log(this.form);
  }

  addStudent(){
    const student: Student = { name: '', country: Date.now().toString() };
    this.students.push(
      this.createStudent(student)
    );
  }

  get details(): FormArray {
    return this.form.get('details') as FormArray;
  }

  get formRawValue() {
    return this.form.getRawValue();
  }

}
