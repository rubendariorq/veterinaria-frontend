import { Component, OnInit } from '@angular/core';
import { Mascota } from '@mascota/shared/model/mascota';
import { MascotaService } from '@mascota/shared/service/mascota.service';

@Component({
  selector: 'app-listar-mascota',
  templateUrl: './listar-mascota.component.html',
  styleUrls: ['./listar-mascota.component.css']
})

export class ListarMascotaComponent implements OnInit {

  public columnas: string[] = ['No', 'Código Mascota', 'Nombre', 'Tipo Mascota'];
  public mascotas: Mascota[] = [];

  constructor(protected mascotaService: MascotaService) { }

  ngOnInit(): void {
    this.listarMascotas();
  }

  private listarMascotas() {
    this.mascotaService.consultar().subscribe(respuesta => {
      respuesta.forEach(mascota => {
        if (mascota.tipoMascota === 1) {
          mascota.especie = 'Gato'
        } else {
          mascota.especie = 'Perro'
        }
      })
      this.mascotas = respuesta;
    })
  }

}
