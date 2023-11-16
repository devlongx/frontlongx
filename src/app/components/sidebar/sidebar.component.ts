import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
   MenuData=[
    {
      name:"General",
      url:"general",
      icon:"/assets/icons/general.svg"
    },
    {
      name:"Billetera",
      url:"billetera",
      icon:"/assets/icons/Billetera.svg"
    },
    {
      name:"Comprar/Vender",
      url:"comprar-vender",
      icon:"/assets/icons/comprarVender.svg"
    },
    {
      name:"Marketplace",
      url:"marketplace",
      icon:"/assets/icons/home.svg"
    },
    {
      name:"OTC",
      url:"otc",
      icon:"/assets/icons/OTC.svg"
    },
    {
      name:"Perfil",
      url:"perfil",
      icon:"/assets/icons/Perfil.svg"
    },
    {
      name:"Historial de Transacciones",
      url:"historial-transacciones",
      icon:"/assets/icons/HistorialDeTransacciones.svg"
    },
   ]

}
