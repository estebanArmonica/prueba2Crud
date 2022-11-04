import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eliminar-gwent',
  templateUrl: './eliminar-gwent.page.html',
  styleUrls: ['./eliminar-gwent.page.scss'],
})
export class EliminarGwentPage  {

  ionViewWillEnter(){
    this.GetGwentId(this.getIdFormURL())
  }

  gwentEli = {
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

  constructor(
    private gwentserver: ApiGwentServiceService,
    private router: Router
  ) { }

  getIdFormURL(){
    let url = this.router.url
    let array = url.split("/",3)
    let id = parseInt(array[2])
    return id
  }

  eliminarGwent(){
    this.gwentserver.eliminarCartaGwentSuciaId(this.gwentEli).subscribe()
    this.router.navigateByUrl("/lista-gwent")
  }

  GetGwentId(gwentDatoId: number){
    this.gwentserver.getCartaId(gwentDatoId).subscribe(
      (respuestID: any) =>{
        this.gwentEli = {
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

}

