import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Mascota } from '@mascota/shared/model/mascota';
import { TratamientoService } from '@tratamiento/shared/service/tratamiento.service';
import { Cupon } from 'src/app/feature/cupon/shared/model/cupon';
import { Servicio } from 'src/app/feature/servicio/shared/model/servicio';

const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 8;

@Component({
  selector: 'app-crear-tratamiento',
  templateUrl: './crear-tratamiento.component.html',
  styleUrls: ['./crear-tratamiento.component.css']
})
export class CrearTratamientoComponent implements OnInit {

  public tratamientoForm: FormGroup;
  public listaMascotas: Mascota[];
  public listaServicios: Servicio[];
  public listaCupones: Cupon[];

  constructor(protected tratamientoService: TratamientoService, private router: Router
    ) { }

  ngOnInit() {
    this.listarMascotas();
    this.listarServicios();
    this.construirFormularioTratamiento();
  }

  private construirFormularioTratamiento() {
    this.tratamientoForm = new FormGroup({
      codigoTratamiento: new FormControl('', [Validators.required, Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)]),
      idMascota: new FormControl('', [Validators.required]),
      fechaInicio: new FormControl('', [Validators.required]),
      fechaFin: new FormControl('', [Validators.required]),
      idServicio: new FormControl('', [Validators.required]),
      tipoTratamiento: new FormControl('', [Validators.required]),
      idCupon: new FormControl('', [Validators.required])
    })

    this.tratamientoForm.get("idMascota").valueChanges.subscribe(idMascota => {
      this.listarCupones(idMascota);
    })
  }

  public registrar() {
    this.tratamientoService.guardar(this.tratamientoForm.value).subscribe(() => {
      this.tratamientoForm.reset();
      this.router.navigate(['tratamiento/listar'])
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

  private listarCupones(idMascota) {
    this.tratamientoService.listarCupones(idMascota).subscribe(respuesta => {
        this.listaCupones = respuesta;
    })
  }
}
