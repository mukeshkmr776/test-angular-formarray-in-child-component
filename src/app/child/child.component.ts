import { Component, Input } from '@angular/core';
import { FormArray, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  studentForm!: FormGroup;
  @Input() formGroupName!: string;
  @Input() index!: number;

  constructor(
    private rootFormGroup: FormGroupDirective,
  ) {}

  get getRawValue() {
    return this.studentForm.getRawValue();
  }

  ngOnInit() {
    this.studentForm = (this.rootFormGroup.control.get(this.formGroupName) as FormArray).at(this.index) as FormGroup;
  }

  show() {
    console.log(`studentForm[${this.index}] - `, this.studentForm);
  }
}
