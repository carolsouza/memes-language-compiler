import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dataControl: FormGroup = new FormGroup({});

  constructor() { }

  ngOnInit(): void {

    this.dataControl = new FormGroup({
      entrada: new FormControl(''),
      saida: new FormControl('')
    });
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
    //Traduzindo a MAIN
    code = code.replace(/(BORA BILL)(?=(?:[^"]|"[^"]*")*$)/g, 'int main (void) {');
    //Traduzindo o BIRL
    code = code.replace(/(ISSO E TUDO PESSOAL)(?=(?:[^"]|"[^"]*")*$)/g, '}');
    //Traduzindo printf
    code = code.replace(/(QUEM E ELA[\?]?)(?=(?:[^"]|"[^"]*")*$)/g, 'printf');
    //Traduzindo scanf
    code = code.replace(/(FILMA ELA EM NOME DE JESUS[\?]?)(?=(?:[^"]|"[^"]*")*$)/g, 'scanf');
    //Traduzindo if
    code = code.replace(/(SE EU FOR)(?=(?:[^"]|"[^"]*")*$)(.*)/g, 'if $2 {');
    //Traduzindo else
    code = code.replace(/(HOJE NAO FARO)(?=(?:[^"]|"[^"]*")*$)/g, '} else {');
    //Traduzindo else if
    code = code.replace(/(EU VOU)(?=(?:[^"]|"[^"]*")*$)(.*)/g, '} else if $2 {');
    // code = code.replace(/(QUE N[AÃ]O VAI DAR O QUE[\?]?)(?=(?:[^"]|"[^"]*")*$)(.*)/g, '} else if $2 {');
    //Traduzindo while
    code = code.replace(/(ME CHAMA QUE EU VOU)(?=(?:[^"]|"[^"]*")*$)(.*)/g, 'while $2 {');
    //Traduzindo for
    code = code.replace(/(SE ME ATACA EU VO ATACA)(?=(?:[^"]|"[^"]*")*$)(.*)/g, 'for $2 {');
    //Traduzindo declaração de função
    code = code.replace(/(FINGE QUE EU NAO EXISTO)(?=(?:[^"]|"[^"]*")*$)(.*)(\))/g, '$2 {');
    //Traduzindo retorno da função
    code = code.replace(/(MIRELLA CORRE AQUI)(?=(?:[^"]|"[^"]*")*$)/g, 'return');
    //Traduzindo chamada de função
    code = code.replace(/(MUNIQUE EU VOU PASSAR MAL)(?=(?:[^"]|"[^"]*")*$)/g, ' ');
    // code = code.replace(/(AJUDA O MALUCO QUE TA DOENTE)(?=(?:[^"]|"[^"]*")*$)/g, ' ');
    //Traduzindo parada no código
    code = code.replace(/(QUIETINHA)(?=(?:[^"]|"[^"]*")*$)/g, 'break');
    //Traduzindo continuar o código
    code = code.replace(/(OLHA ELA)(?=(?:[^"]|"[^"]*")*$)/g, 'continue');

    //Traduzindo os tipos de dados
    code = code.replace(/(ATEMPORAL)(?=(?:[^"]|"[^"]*")*$)/g, 'char');
    code = code.replace(/(MEMORAVEL)(?=(?:[^"]|"[^"]*")*$)/g, 'int');
    code = code.replace(/(ESQUECIDO)(?=(?:[^"]|"[^"]*")*$)/g, 'float');

    //Colocando as bibliotecas
    code = "#include <stdio.h>\n#include <math.h>\n\n" + code;

    this.codeExec(code)

  }

  codeExec(newCode: string) {

    console.log(newCode)

    let randomName = 'file' + Math.random()

    console.log(randomName)

  }

}
