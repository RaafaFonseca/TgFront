import { Component, OnInit } from '@angular/core';

export interface TabelaDeImagem {
  fog: number;
  imagem: string;
  gerencia: string;
  equipe: string;
}

const ELEMENT_DATA: TabelaDeImagem[] = [
  {fog: 16, imagem: 'E3_Notebook', gerencia: 'Prodam', equipe: 'nas.prodam\nsgio\e3_not_equipe.xls'},
  {fog: 21, imagem: 'E3_Desktop', gerencia: 'Prodam', equipe: 'nas.prodam\nsgio\e3_des_equipe.xls'},
  {fog: 3, imagem: 'GFH_Dev', gerencia: 'Prodam', equipe: 'nas.prodam\nsgio\gfh.xls'},
  {fog: 12, imagem: 'GFL_Desktop', gerencia: 'Prodam', equipe: 'nas.prodam\nsgio\gfl.xls'},
  {fog: 12, imagem: 'GFL_Desktop', gerencia: 'Prodam', equipe: 'nas.prodam\nsgio\gfl.xls'},
  {fog: 12, imagem: 'GFL_Desktop', gerencia: 'Prodam', equipe: 'nas.prodam\nsgio\gfl.xls'},
  {fog: 12, imagem: 'GFL_Desktop', gerencia: 'Prodam', equipe: 'nas.prodam\nsgio\gfl.xls'},
  {fog: 12, imagem: 'GFL_Desktop', gerencia: 'Prodam', equipe: 'nas.prodam\nsgio\gfl.xls'},
  {fog: 12, imagem: 'GFL_Desktop', gerencia: 'Prodam', equipe: 'nas.prodam\nsgio\gfl.xls'},
  {fog: 12, imagem: 'GFL_Desktop', gerencia: 'Prodam', equipe: 'nas.prodam\nsgio\gfl.xls'}

];


@Component({
  selector: 'app-imagens',
  templateUrl: './imagens.component.html',
  styleUrls: ['./imagens.component.css']
})

export class ImagensComponent implements OnInit {
  displayedColumns: string[] = ['fog', 'imagem', 'gerencia', 'equipe','acoes'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

  openDialog(elemento: TabelaDeImagem): void {

  }
}

