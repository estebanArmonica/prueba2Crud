import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-gwent',
  templateUrl: './lista-gwent.page.html',
  styleUrls: ['./lista-gwent.page.scss'],
})
export class ListaGwentPage {

  barajas = []

  constructor(private barajaServicio: ApiGwentServiceService, private cargarControl: LoadingController) { }

  ionViewWillEnter(){
    this.cargarBarajas();
  }

  async cargarBarajas(carga?: InfiniteScrollCustomEvent){
    const cargando =  await this.cargarControl.create({
      message: "cargando cartas...",
      spinner: "bubbles"
    }
    )
    await cargando.present();

    this.barajaServicio.listarCartasGwent().subscribe(
      (respuesta) => { // respuesta tipo json
        cargando.dismiss();
        let listaString = JSON.stringify(respuesta)
        this.barajas = JSON.parse(listaString)
        carga?.target.complete();
      },
      (error) => {
        console.log(error.message)
        cargando.dismiss();
      }
    )
  }

}
