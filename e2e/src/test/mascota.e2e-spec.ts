import { browser } from "protractor";
import { AppPage } from "../app.po";
import { CrearMascotaPage } from "../page/mascota/crear-mascota.po";
import { ListarMascotaPage } from "../page/mascota/listar-mascota.po";

describe('workspace-project Mascota', () => {
  let page: AppPage;
  let crearMascota: CrearMascotaPage;
  let listarMascota: ListarMascotaPage;

  beforeEach(() => {
    page = new AppPage();
    crearMascota = new CrearMascotaPage();
    listarMascota = new ListarMascotaPage();
  });

  it('deberia registrar mascota correctamente', () => {
    const CODIGO_MASCOTA = "MASC010";
    const NOMBRE = "Manotas";
    const TIPO_MASCOTA = "Gato";

    page.navigateTo();
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

  it('Deberia listar mascotas', () => {
    page.navigateTo();
    listarMascota.clickBotonListarMascota();
    expect(listarMascota.contarMascotas()).toBeGreaterThanOrEqual(1);
});

});