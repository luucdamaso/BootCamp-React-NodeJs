import { useForm } from "react-hook-form";

export const CadastroSuperHerois = () => {
  const { register, handleSubmit } = useForm();

  const onSubmitHeros = (data) => {
    console.log(data);
    alert(`
        Nome do Super Heroi: ${data.nome} \n 
        Poder: ${data.poder} \n
        Fraqueza: ${data.fraqueza} \n
        Historia: ${data.historia} \n
        `);
  };

  return (
    <section class="mb-10">
      <div class="row">
        <div class="col-md-9 col-lg-7 col-xl-5 mx-auto text-center">
          <h4 class="mb-4">Cadastro de super Herois</h4>
          <form onSubmit={handleSubmit(onSubmitHeros)} noValidate>
            <div class="row">
              <div class="col-md-6">
                <div class="form-outline mb-4">
                  <input
                    type="text"
                    id="nome"
                    class="form-control "
                    {...register("nome")}
                  />
                  <label class="form-label" for="nome">
                    Nome
                  </label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-outline mb-4">
                  <input
                    type="text"
                    id="poder"
                    class="form-control"
                    {...register("poder")}
                  />
                  <label class="form-label" for="poder">
                    Poder
                  </label>
                </div>
              </div>
            </div>
            <div class="form-outline mb-4">
              <input
                type="text"
                id="fraqueza"
                class="form-control"
                {...register("fraqueza")}
              />
              <label class="form-label" for="fraqueza">
                Fraqueza
              </label>
            </div>
            <div class="form-outline mb-4">
              <textarea
                class="form-control"
                id="historia"
                rows="4"
                {...register("historia")}
              ></textarea>
              <label class="form-label" for="historia">
                Historia
              </label>
            </div>
            <button type="submit" class={"btn btn-dark btn-block"}>
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
