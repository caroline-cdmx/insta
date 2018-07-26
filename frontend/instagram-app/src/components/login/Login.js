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
          <div className="col-md-6 offset-md-3">
            <form className="card p-4">
              <div className="form-group">
                <input type="email" className="form-control" id="exampleDropdownFormEmail2" placeholder="email@ejemplo.com"/>
              </div>
              <div className="form-group">
                <input type="password" className="form-control" id="exampleDropdownFormPassword2" placeholder="Contraseña"/>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="dropdownCheck2"/>
              </div>
              <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
        
export default Login;