import { Component, OnInit } from '@angular/core';
import { Tratamiento } from '@tratamiento/shared/model/tratamiento';
import { TratamientoService } from '@tratamiento/shared/service/tratamiento.service';

@Component({
  selector: 'app-listar-tratamiento',
  templateUrl: './listar-tratamiento.component.html',
  styleUrls: ['./listar-tratamiento.component.css']
})
export class ListarTratamientoComponent implements OnInit {

  public columnas: string[] = ['No', 'Código Tratamiento', 'Fecha Inicio', 'Fecha Fin', 'Tipo Tratamiento'];
  public tratamientos: Tratamiento[] = [];

  constructor(protected tratamientoService: TratamientoService) { }

  ngOnInit() {
    this.listarTratamientos();
  }

  private listarTratamientos() {
    this.tratamientoService.consultar().subscribe(respuesta => {
      respuesta.forEach(tratamiento => {
        if (tratamiento.tipoTratamiento === 1) {
          tratamiento.nombreTipoTratamiento = 'Estetico'
        } else {
          tratamiento.nombreTipoTratamiento = 'Medico'
        }
      })
      this.tratamientos = respuesta;
    })
  }

}
