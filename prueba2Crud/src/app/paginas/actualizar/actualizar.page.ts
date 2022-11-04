import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actualizar-gwent',
  templateUrl: './actualizar-gwent.page.html',
  styleUrls: ['./actualizar-gwent.page.scss'],
})
export class ActualizarGwentPage  {

  ionViewWillEnter(){
    this.GetGwentId(this.getIdFormURL())
  }


  gwentActua = {
    id: 0,
    nombre: "",
    tipoCarta: "",
    nivel: 0,
    costoCreacion: 0,
    descripcion: "",
    genero: "",
    habilidad: "",
    disponible: "",
    imagen: "",
    precio: 0
  }

  constructor(private gwentserver: ApiGwentServiceService, private router: Router) { }


  getIdFormURL(){
    let url = this.router.url
    let array = url.split("/",3)
    let id = parseInt(array[2])
    return id
  }

  GetGwentId(gwentActua: number){
    this.gwentserver.getCartaId(gwentActua).subscribe(
      (respuestID: any) =>{
        this.gwentActua = {
          id: respuestID[0].id,
          nombre: respuestID[0].nombre,
          tipoCarta: respuestID[0].tipoCarta,
          nivel: respuestID[0].nivel,
          costoCreacion: respuestID[0].costoCreacion,
          descripcion: respuestID[0].descripcion,
          genero: respuestID[0].genero,
          habilidad: respuestID[0].habilidad,
          disponible: respuestID[0].disponible,
          imagen: respuestID[0].imagen,
          precio: respuestID[0].precio
        }
      }
    )
  }

  actualizaGwent(){
    this.gwentserver.actualizarGwentCarta(this.gwentActua).subscribe()
    this.router.navigateByUrl("/lista-gwent")
  }

}
