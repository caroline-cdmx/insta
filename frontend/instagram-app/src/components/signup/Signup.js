import React, { PureComponent } from 'react';
import './style.css';
import signup from '../../services/signup';


class Signup extends PureComponent {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      check_password: ''
    }
  }

  onInputCheck = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({
      [name]: value
    })
  }

  validatePasswords(password, verify_password) {
    if (password === verify_password) {
      return true
    } else {
      alert('Tu password no coincide');
    }
  }
  onFormSubmit = (e) => {
    e.preventDefault();
    if (this.validatePasswords(this.state.password, this.state.check_password)) {
      //Hacer Peticion post al backend 
      signup(this.state).then((response) => {
        console.log(response.data)
        alert('Felicidades Nuevo usuario registrado')
      }).catch((err) => {
        console.log(err);
        alert('Hubo un problema')
      })
    }
  }

  render() {
    return (
      <div className="container container--content">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <div className="card p-4 px-5">
              <form role="form" onSubmit={this.onFormSubmit}>
                  <div className="d-flex justify-content-center">
                    <img className= "insta-name" src="http://pngimg.com/uploads/instagram/instagram_PNG5.png" alt="instagram name"/>
                  </div>
                  <div className="form-group">
                    <input type="email" name="email" className="form-control" id="email" placeholder="correio@ejemplo.com" value={this.state.email} onChange={this.onInputCheck}/>
                  </div>
                  <div className="form-group">
                    <input type="name" name="firstName" className="form-control" id="name" placeholder="Nombre completo" value={this.state.firstName} onChange={this.onInputCheck}/>
                  </div>
                  <div className="form-group">
                    <input type="username" name="lastName" className="form-control" id="username" placeholder="Nombre de usuario" value={this.state.lastName} onChange={this.onInputCheck}/>
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control" name="password" id="password" placeholder="Contraseña"  value={this.state.password} onChange={this.onInputCheck}/>
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control" name="check_password" id="check_password" placeholder="Confirmar contraseña"  value={this.state.check_password} onChange={this.onInputCheck}/>
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">Crear cuenta</button>
                </form>
            </div>
          </div>
        </div>
        <div className="row row--login">
          <div className="col-md-4 offset-md-4">
            <div className="card p-4 px-5">
              <form>
                <p className="no-account">¿Ya tienes cuenta?</p><a className="create-account" href="/login">Conectarse</a> 
              </form>
            </div>
          </div>
        </div>
    </div>
    )
  }
}

export default Signup;