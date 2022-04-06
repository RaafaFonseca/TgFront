import { TabelaDeImagem } from './../imagens/imagens.component';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-element-dialog',
  templateUrl: './element-dialog.component.html',
  styleUrls: ['./element-dialog.component.css']
})
export class ElementDialogComponent implements OnInit {
  elemento!: TabelaDeImagem;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: TabelaDeImagem,
    public dialogRef: MatDialogRef<ElementDialogComponent>,
  ) {}



  ngOnInit(): void {
  }


  onCancel(): void{
    this.dialogRef.close();
  }


}
