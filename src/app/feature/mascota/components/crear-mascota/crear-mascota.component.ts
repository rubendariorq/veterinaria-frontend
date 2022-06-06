import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MascotaService } from '@mascota/shared/service/mascota.service';

const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 8;

@Component({
  selector: 'app-crear-mascota',
  templateUrl: './crear-mascota.component.html',
  styleUrls: ['./crear-mascota.component.css']
})
export class CrearMascotaComponent implements OnInit {

  public mascotaForm: FormGroup;

  constructor(protected mascotaService: MascotaService) { }

  ngOnInit() {
    this.construirFormularioMascota()
  }

  private construirFormularioMascota() {
    this.mascotaForm = new FormGroup({
      codigoMascota: new FormControl('', [Validators.required, Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)]),
      nombre: new FormControl('', [Validators.required]),
      tipoMascota: new FormControl('', [Validators.required])
    })
  }

  public registrar() {
    this.mascotaService.guardar(this.mascotaForm.value).subscribe(() => {
      this.mascotaForm.reset();
    });
  }

}
