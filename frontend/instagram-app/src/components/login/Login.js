import React, { PureComponent } from 'react';
import './style.css';
import login from '../../services/login';


class Login extends PureComponent {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }
  onInputCheck = (event) => {
    let name = event.target.name
    let value = event.target.value

    this.setState({
      [name]: value
    })
  }

  submitForm = (e) => {
    e.preventDefault();
    login(this.state).then((resp) => {
      if (resp.status === 201) {
        let token = resp.data.token
        localStorage.setItem('token', token);
        alert('Te has Logeado con exito')
      } else {
        alert(resp.data)
      }
    }).catch((err) => {
      console.log(err)
    })
  }

  render() {
    return (
      <div className="container container--content">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <div className="card p-4 px-5">
              <form>
                  <div className="d-flex justify-content-center">
                    <img className= "insta-name" src="http://pngimg.com/uploads/instagram/instagram_PNG5.png" alt="instagram name"/>
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" id="exampleDropdownFormEmail2" placeholder="correio@ejemplo.com"/>
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control" id="exampleDropdownFormPassword2" placeholder="contraseña"/>
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">Regístrate</button>
                </form>
                <div className="d-flex justify-content-center">
                  <a>¿Olvidaste tu contraseña?</a>
                </div>
            </div>
          </div>
        </div>
        <div className="row row--signup">
          <div className="col-md-4 offset-md-4">
            <div className="card p-4 px-5">
              <form>
                <p className="no-account">¿No tienes cuenta?</p><a className="create-account" href="#">Inscribirse</a> 
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
        
export default Login;