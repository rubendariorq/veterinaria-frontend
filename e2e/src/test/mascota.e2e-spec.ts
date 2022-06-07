import { browser } from "protractor";
import { AppPage } from "../app.po";
import { CrearMascotaPage } from "../page/mascota/crear-mascota.po";
import { ListarMascotaPage } from "../page/mascota/listar-mascota.po";
import { NavbarPage } from "../page/navbar/navbar.po";

describe('workspace-project Mascota', () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let crearMascota: CrearMascotaPage;
  let listarMascota: ListarMascotaPage;

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    crearMascota = new CrearMascotaPage();
    listarMascota = new ListarMascotaPage();
  });

  it('deberia registrar mascota correctamente', () => {
    const CODIGO_MASCOTA = "MASC010";
    const NOMBRE = "Manotas";
    const TIPO_MASCOTA = "Gato";

    page.navigateTo();
    navBar.clickBotonMascotas();
    listarMascota.clickBotonCrearMascota();
    browser.sleep(1000);
    crearMascota.ingresarCodigoMascota(CODIGO_MASCOTA);
    browser.sleep(1000);
    crearMascota.ingresarNombre(NOMBRE);
    browser.sleep(1000);
    crearMascota.ingresarTipoMascota(TIPO_MASCOTA)
    browser.sleep(1000);
    crearMascota.clickBotonRegistarMascota();
    browser.sleep(1000);
    crearMascota.clickBotonVolver();
    browser.sleep(1000);
    expect(listarMascota.contarMascotas()).toBeGreaterThanOrEqual(1);
  });

});