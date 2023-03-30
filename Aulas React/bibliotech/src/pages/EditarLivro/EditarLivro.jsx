import { useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { getLivro, updateLivro, uploudCapaLivro } from "../../firebase/livros";

export function EditarLivro() {

    const {id} = useParams();

    const {register, handleSubmit, formState: {errors}, reset} = useForm();

    const navigate = useNavigate();

    function onSubmit(data) {
        const imagem = data.imagem[0];
        if (imagem) {
            const toastId = toast.loading("upload da imagem...", {position:"top-right"})
            uploudCapaLivro(imagem).then(url => {
                toast.dismiss(toastId);
                data.urlCapa = url;
                delete data.imagem
                updateLivro(id, data).then(() => {
                    toast.success("Livro editado com sucesso!", { duration: 2000, position:"bottom-right"})
                    navigate('/livros');
            })
        })
        } else {
            updateLivro(id, data).then(() => {
                toast.success("Livro editado com sucesso!", { duration: 2000, position:"bottom-right"})
                navigate('/livros');
        })
        
        }
    }

    useEffect(() => {
        getLivro(id).then(livro => {
            reset(livro);
        });
    }, []);


  return (
    <div className="editar-livro">
      <Container>
        <h1>Editar livro</h1>
        <hr />
        <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Título</Form.Label>
                        <Form.Control type="text" className={errors.titulo && "is-invalid"} {...register("titulo", {required: "Título é obrigatório!", maxLength: {value: 255, message: "Limite de 255 caracteres!"}})} />
                        <Form.Text className="text-danger">
                            {errors.titulo?.message}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Autor</Form.Label>
                        <Form.Control type="text" className={errors.autor && "is-invalid"} {...register("autor", {required: "Autor é obrigatório!", maxLength: {value: 255, message: "Limite de 255 caracteres!"}})} />
                        <Form.Text className="text-danger">
                            {errors.autor?.message}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Categoria</Form.Label>
                        <Form.Control type="text" className={errors.categoria && "is-invalid"} {...register("categoria", {required: "Categoria é obrigatória!", maxLength: {value: 255, message: "Limite de 255 caracteres!"}})} />
                        <Form.Text className="text-danger">
                            {errors.categoria?.message}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>ISBN</Form.Label>
                        <Form.Control type="text" className={errors.isbn && "is-invalid"} {...register("isbn", {required: "ISBN é obrigatório!", maxLength: {value: 255, message: "Limite de 255 caracteres!"}})} />
                        <Form.Text className="text-danger">
                            {errors.isbn?.message}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Imagem da capa</Form.Label>
                        <Form.Control type="file" accept=".png,.jpg,.jpeg,.gif" {...register("urlCapa", {required: "imagem"})} />
                    </Form.Group>
          <Button type="submit" variant="success" >Editar</Button>
        </Form>
      </Container>
    </div>
  );
}
