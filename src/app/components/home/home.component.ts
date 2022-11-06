import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dataControl: FormGroup = new FormGroup({});

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

    this.dataControl = new FormGroup({
      entrada: new FormControl(''),
      saida: new FormControl('')
    });

    this.dataControl.get('saida')?.disable()
  }

  get dataControlGroup() {
    return this.dataControl;
  }

  handleCode() {
    const code = this.dataControl.get('entrada')?.value;

    console.log(code)

    this.transformCode(code)
  }

  transformCode(code: string) {

    this.apiService.compileCode(code).subscribe((res) => {
      // console.log(res)
      this.dataControl.get('saida')?.setValue(res.error ? res.error : res.stdout)
    })
  }

}
