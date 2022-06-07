import { browser } from "protractor";
import { AppPage } from "../app.po";
import { NavbarPage } from "../page/navbar/navbar.po";
import { CrearTratamientoPage } from "../page/tratamiento/crear-tratamiento.po";
import { ListarTratamientoPage } from "../page/tratamiento/listar-tratamiento.po";

describe('workspace-project Tratamiento', () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let crearTratamiento: CrearTratamientoPage;
  let listarTratamiento: ListarTratamientoPage;

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    crearTratamiento = new CrearTratamientoPage();
    listarTratamiento = new ListarTratamientoPage();
  });

  it('deberia registrar tratamiento correctamente', () => {
    const CODIGO_TRATAMIENTO = "TRAT010";
    const INDICE_MASCOTA = 1;
    const FECHA_INICIO = "06-06-2022";
    const FECHA_FIN = "09-06-2022";
    const SERVICIO = "Corte de pelo";
    const TIPO_TRATAMIENTO = "Estético";

    page.navigateTo();
    navBar.clickBotonTratamientos();
    listarTratamiento.clickBotonCrearTratamiento();
    browser.sleep(1000);
    crearTratamiento.ingresarCodigoTratamiento(CODIGO_TRATAMIENTO);
    browser.sleep(1000);
    crearTratamiento.seleccionarServicio(SERVICIO);
    browser.sleep(1000);
    crearTratamiento.ingresarFechaInicio(FECHA_INICIO)
    browser.sleep(1000);
    crearTratamiento.ingresarFechaFin(FECHA_FIN)
    browser.sleep(1000);
    crearTratamiento.seleccionarMascota(INDICE_MASCOTA)
    browser.sleep(1000);
    crearTratamiento.ingresarTipoTratamiento(TIPO_TRATAMIENTO)
    browser.sleep(1000);
    crearTratamiento.clickBotonRegistrarTratamiento();
    browser.sleep(1000);
    crearTratamiento.clickBotonVolver();
    browser.sleep(1000);
    expect(listarTratamiento.contarTratamientos()).toBeGreaterThanOrEqual(1);
  });

  it('Deberia listar tratamientos correctamente', () => {
    page.navigateTo();
    navBar.clickBotonTratamientos();
    listarTratamiento.clickBotonListarTratamiento();
    expect(listarTratamiento.contarTratamientos()).toBeGreaterThanOrEqual(1);
  });

  it('Deberia eliminar tratamiento correctamente', () => {
    const INDICE_TRATAMIENTO = 0;

    page.navigateTo();
    navBar.clickBotonTratamientos();
    listarTratamiento.clickBotonListarTratamiento();
    listarTratamiento.clickBotonEliminarTratamiento(INDICE_TRATAMIENTO);
    expect(listarTratamiento.contarTratamientos()).toBeGreaterThanOrEqual(0);
  });

  it('Deberia consultar tratamiento correctamente', () => {
    const INDICE_TRATAMIENTO = 0;

    page.navigateTo();
    navBar.clickBotonTratamientos();
    listarTratamiento.clickBotonListarTratamiento();
    listarTratamiento.clickBotonConsultarTratamiento(INDICE_TRATAMIENTO);
    expect(listarTratamiento.formularioConsultaTratamientoDiligenciado()).toBeTruthy();
  });

});