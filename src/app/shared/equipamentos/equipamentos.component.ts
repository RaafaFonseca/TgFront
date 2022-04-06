import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipamentos',
  templateUrl: './equipamentos.component.html',
  styleUrls: ['./equipamentos.component.css']
})

export class EquipamentosComponent implements OnInit {
  titulo: string = 'Equipamentos Works!';

  constructor() { }

  ngOnInit(): void {
  }

}
