import { Component, OnInit } from '@angular/core';
import { Mascota } from '@mascota/shared/model/mascota';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Tratamiento } from '@tratamiento/shared/model/tratamiento';
import { TratamientoService } from '@tratamiento/shared/service/tratamiento.service';
import { Cupon } from 'src/app/feature/cupon/shared/model/cupon';
import { Servicio } from 'src/app/feature/servicio/shared/model/servicio';

@Component({
  selector: 'app-listar-tratamiento',
  templateUrl: './listar-tratamiento.component.html',
  styleUrls: ['./listar-tratamiento.component.css']
})
export class ListarTratamientoComponent implements OnInit {

  public columnas: string[] = ['No', 'Código Tratamiento', 'Fecha Inicio', 'Fecha Fin', 'Tipo Tratamiento', 'Acciones'];
  public tratamientos: Tratamiento[] = [];
  public tratamiento: Tratamiento;
  public listaMascotas: Mascota[];
  public listaServicios: Servicio[];
  public listaCupones: Cupon[];

  constructor(protected tratamientoService: TratamientoService, private modalService: NgbModal) { }

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

  public eliminar(tratamiento) {
    this.tratamientoService.eliminar(tratamiento).subscribe(() => {
      this.listarTratamientos();
    })    
  }

  public consultar(longContent, tratamiento) {
    this.tratamientoService.consultarTratamiento(tratamiento).subscribe(respuesta => {
      this.tratamiento = respuesta;

      this.listarMascotas();
      this.listarServicios();

      this.modalService.open(longContent, { scrollable: true });
    });
  }

  private listarMascotas() {
    this.tratamientoService.listarMascotas().subscribe(respuesta => {
        this.listaMascotas = respuesta;
    })
  }

  private listarServicios() {
    this.tratamientoService.listarServicios().subscribe(respuesta => {
        this.listaServicios = respuesta;
    })
  }
}
