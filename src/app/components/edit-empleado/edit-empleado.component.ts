import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-empleado',
  templateUrl: './edit-empleado.component.html',
  styleUrls: ['./edit-empleado.component.css']
})
export class EditEmpleadoComponent implements OnInit {
  
  editForm: FormGroup;
  id: string | null;
  

  constructor(private fb: FormBuilder, private _empleadoService: EmpleadoService,
              private aRoute: ActivatedRoute, private router: Router) {

     this.editForm = fb.group ({
       nombre: ['', Validators.required],
       apellido: ['', Validators.required],
       documento: ['', Validators.required],
       salario: ['', Validators.required],
     })

     this.id = this.aRoute.snapshot.paramMap.get('id');
     

   }

  ngOnInit(): void {
    this.getEmpleado();
  }

  getEmpleado(){
    this._empleadoService.getEmpleado(this.id!).subscribe(data => {

        this.editForm.setValue({
          nombre: data.payload.data()['nombre'],
          apellido: data.payload.data()['apellido'],
          documento: data.payload.data()['documento'],
          salario: data.payload.data()['salario'],
        }) 
       
    })
   
  }

  actualizarEmpleado(){

    const empleado: any = {
      nombre: this.editForm.value.nombre,
      apellido: this.editForm.value.apellido,
      documento: this.editForm.value.documento,
      salario: this.editForm.value.salario,
      fechaActualizacion: new Date(),

    }

    this._empleadoService.actualizarEmpleado(this.id!, empleado).then(()=> {
  this.router.navigate(['/listado'])
      console.log('Empleado actualizado')
    })
  }



}
