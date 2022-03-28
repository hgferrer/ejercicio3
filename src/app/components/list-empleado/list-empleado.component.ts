import { EmpleadoService } from 'src/app/services/empleado.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-empleado',
  templateUrl: './list-empleado.component.html',
  styleUrls: ['./list-empleado.component.css']
})
export class ListEmpleadoComponent implements OnInit {

  empleados: any[] = [];
  constructor(private _empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.getEmpleados();
  }


  getEmpleados() {
    this._empleadoService.getEmpleados().subscribe(data => {
      this.empleados =[];
      data.forEach((element:any)=> {
        this.empleados.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.empleados);
    })

  }

  deleteEmpleado(id: string){
    this._empleadoService.eliminarEmpleado(id).then(() => {
      console.log('Empleado eliminado con exito')
    }).catch(error => {
      console.log(error);
    })
  }
}
