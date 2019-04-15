import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private todoForm: FormGroup;
  private inputControl: FormControl = new FormControl('');
  private panelOpenState = false;
  private todoArray: string[] = [];
  private todoArrayFinish: string[] = [];
  private searchText: string = '';

  ngOnInit() {
    this.todoForm = new FormGroup({ inputControl: this.inputControl });
  }

  addTodo(todoForm: FormGroup) {
    this.todoArray.push(todoForm.value.inputControl);
    todoForm.reset();
  }

  onChange(e, todoChecked) {
    if (e.checked) {
      this.todoArray.forEach(todoA => todoA == todoChecked ? this.todoArrayFinish.push(todoA) : null);
    } else {
      this.todoArray.forEach(todoA => {
        const index: number = this.todoArrayFinish.indexOf(todoChecked);
        index !== -1 ? this.todoArrayFinish.splice(index, 1) : null;
      });
    }
    console.log('todoArrayFinish', this.todoArrayFinish)
  }

  deleteTodo(todoDelet) {
    console.log('todoDelet', todoDelet)
    this.todoArray.forEach(todoA => {
      const index: number = this.todoArray.indexOf(todoDelet);
      index !== -1 ? this.todoArray.splice(index, 1) : null;
    });
    this.todoArray.forEach(todoA => {
      const index: number = this.todoArrayFinish.indexOf(todoDelet);
      index !== -1 ? this.todoArrayFinish.splice(index, 1) : null;
    });
  }

}
