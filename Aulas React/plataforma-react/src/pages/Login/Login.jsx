import "./Login.css";
import React from "react";
import { usuarios } from "../../data/usuarios";

export const Login = () => {
  return (
    <div class="container-menu">
      <div class="row">
        <div class="offset-md-2 col-lg-5 col-md-7 offset-lg-4 offset-md-3">
          <div class="panel border bg-white">
            <div class="panel-heading">
              <h3 class="pt-3 font-weight-bold">Login</h3>
            </div>
            <div class="panel-body p-3">
              <form action="login_script.php" method="POST">
                <div class="form-group py-2">
                  <div class="input-field">
                    {" "}
                    <span class="far fa-user p-2"></span>{" "}
                    <input
                      id="campoEmail"
                      type="text"
                      placeholder="Email"
                      required
                    />{" "}
                  </div>
                </div>
                <div class="form-group py-1 pb-2">
                  <div class="input-field">
                    {" "}
                    <span class="fas fa-lock px-2"></span>{" "}
                    <input
                      id="campoSenha"
                      type="password"
                      placeholder="Senha"
                      required
                    />{" "}
                    <button
                      onClick={() => {
                        const email =
                          document.getElementById("campoEmail").value;
                        const senha =
                          document.getElementById("campoSenha").value;
                        let usuarioValido = usuarios.find(
                          (usuario) => usuario.email === email
                        );
                        if (usuarioValido !== undefined) {
                          if (usuarioValido.senha === senha) {
                            alert("Usuario e senha corretos");
                          } else {
                            alert("Senha incorreta");
                          }
                        } else {
                          alert("Usuario não existe");
                        }
                      }}
                      class="btn bg-white text-muted"
                    >
                      {" "}
                      <span class="far fa-eye-slash"></span>{" "}
                    </button>{" "}
                  </div>
                </div>
                <div class="form-inline">
                  {" "}
                  <input type="checkbox" name="remember" id="remember" />{" "}
                  <label for="remember" class="text-muted">
                    Me lembre
                  </label>{" "}
                  <a href="#" id="forgot" class="font-weight-bold">
                    Esqueceu a senha?
                  </a>{" "}
                </div>
                <div class="btn btn-primary btn-block mt-3">Login</div>
                <div class="text-center pt-4 text-muted">
                  Já possui conta? <a href="#">Entre</a>{" "}
                </div>
              </form>
            </div>
            <div class="mx-3 my-2 py-2 bordert">
              <div class="text-center py-3">
                {" "}
                <a
                  href="https://wwww.facebook.com"
                  target="_blank"
                  class="px-2"
                >
                  {""}
                  <img
                    src="https://www.dpreview.com/files/p/articles/4698742202/facebook.jpeg"
                    alt=""
                  />
                  {""}
                </a>{" "}
                <a href="https://www.google.com" target="_blank" class="px-2">
                  {" "}
                  <img
                    src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
                    alt=""
                  />
                  {""}
                </a>{" "}
                <a
                  href="https://github.com/luucdamaso"
                  target="_blank"
                  class="px-2"
                />{" "}
                <img
                  src="https://www.freepnglogos.com/uploads/512x512-logo-png/512x512-logo-github-icon-35.png"
                  alt=""
                />{" "}
                <a />
                {""}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
