import { useForm } from "react-hook-form"
import { Button, Form } from "react-bootstrap";
import "./Cadastro.css";

export const Cadastro = () => {

    const patternEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const {register, handleSubmit, formState: { errors }} = useForm();

    function onSubmitCadastro(data) {
        console.log(data);
    }

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmitCadastro)}>
        <Form.Label>Nome completo</Form.Label>
        <Form.Control
            id="nome"
          type="text"
          placeholder="Nome completo"
          {...register("nome", {required: true, maxLength: 255})}
        /><br />
        {errors.nome && <span className="invalid">Digite um nome válido!</span>} <br />

        <Form.Label>Endereço de e-mail</Form.Label>
        <Form.Control 
        id="email" 
        type="email" 
        placeholder="Email"
        {...register("email", {required: true, maxLength: 255})}
        />
        <br />
        {errors.email && <span className="invalid">Digite um email válido!</span>} <br />

        <Form.Label>Telefone</Form.Label>
        <Form.Control
          id="telefone"
          type="number"
          placeholder="Telefone"
          {...register("telefone", {required: true, maxLength: 255})}
        />
        <br />
        {errors.telefone && <span className="invalid">Digite um telefone válido!</span>} <br />

        <Form.Label>Estado de residência</Form.Label>
        <Form.Control
          id="estado"
          type="text"
          placeholder="Estado de residência"
          {...register("estado", {required: true, maxLength: 255})}
        />
        <br />
        {errors.estado && <span className="invalid">Digite um Estado válido!</span>} <br />

        <Form.Label>Cidade de residência</Form.Label>
        <Form.Control
          id="cidade"
          type="text"
          placeholder="Cidade de residêncial"
          {...register("cidade", {required: true, maxLength: 255})}
        />
        <br />
        {errors.cidade && <span className="invalid">Digite uma Cidade válido!</span>} <br />

        <Form.Label>Áreas de interesse</Form.Label>
        <Form.Check 
        id="back"
        type="checkbox" 
        label="Back-end"
        {...register("back")}
        />
        <br />
        <Form.Check type="checkbox" label="Front-end" />
        <br />
        <Form.Check type="checkbox" label="Analista de dados" />
        <br />
        <Form.Check type="checkbox" label="Enegenharia de dados" />
        <br />
        <Form.Check type="checkbox" label="Professor" />
        <br />
        <Form.Label>Nível de experiência</Form.Label>
        <Form.Select>
            <option>Júnior</option>
            <option>Pleno</option>
            <option>Sênior</option>
        </Form.Select>
        <Form.Label>Portfólio </Form.Label>
        <Form.Control 
        id="portifolio" 
        type="link" 
        placeholder="Link para portifólio"
        {...register("marca", {required: true, maxLength: 255})}
        />
        <Form.Label>Habilidades técnica</Form.Label>
        <Form.Check type="checkbox" label="Javascrip" />
        <br />
        <Form.Check type="checkbox" label="PHP" />
        <br />
        <Form.Check type="checkbox" label="JAVA" />
        <br />
        <Form.Check type="checkbox" label="CSS" />
        <br />
        <Form.Check type="checkbox" label="Bootstrap" />
        <br />
        <Form.Label>Formação acadêmica </Form.Label>
        <Form.Control 
        id="formacao" 
        type="text" 
        placeholder="Formação acadêmica"
        {...register("marca", {required: true, maxLength: 255})}
        />
        <Button type="submit">Enviar</Button>
      </Form>
    </div>
  );
};
