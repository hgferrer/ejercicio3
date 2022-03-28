import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-create-empleado',
  templateUrl: './create-empleado.component.html',
  styleUrls: ['./create-empleado.component.css']
})
export class CreateEmpleadoComponent implements OnInit {

  formCreate: FormGroup;

  constructor(private fb: FormBuilder, private _empleadoService: EmpleadoService, private router: Router) {

    this.formCreate = this.fb.group({
      nombre:['', Validators.required],
      apellido:['', Validators.required],
      documento:['', Validators.required],
      salario:['', Validators.required],
    });
    console.log(this.formCreate)
   }

  ngOnInit(): void {
  }


  agregarEmpleado(){

    const empleado: any = ({
      nombre: this.formCreate.value.nombre,
      apellido: this.formCreate.value.apellido,
      documento: this.formCreate.value.documento,
      salario: this.formCreate.value.salario,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date(),
    });
    this._empleadoService.agregarEmpleado(empleado).then(() => {
      this.router.navigate(['/listado']);
      
    }).catch(error => {
      console.log(error);
    })
  }

}
