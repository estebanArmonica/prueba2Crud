import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-gwent',
  templateUrl: './agregar-gwent.page.html',
  styleUrls: ['./agregar-gwent.page.scss'],
})
export class AgregarGwentPage implements OnInit {

  newBarajaGwent:Baraja = {
    nombre: "carta nueva",
    tipoCarta: "tipo de carta nueva",
    nivel: 0,
    costoCreacion: 0,
    descripcion: "nueva descripcion",
    genero: "tipo de genero de color nuevo",
    habilidad: "habilidad nueva",
    disponible: "carta disponible",
    imagen: "",
    precio: 0
  }

  constructor(
    private gwentserver: ApiGwentServiceService,
    private router: Router,
    ) { }

  ngOnInit() {
  }

  crearBarajaNueva(){
    this.gwentserver.crearBarajaNueva(this.newBarajaGwent).subscribe()
    this.router.navigateByUrl("/lista-gwent")
  }



}
