export function Blog() {
    const linkImagem = "https://picsum.photos/350";
    const TituloPostagem = "Titulo da minha Postagem"
    const nomeAutor = 'Escritor'

    return (
        <section className="bodyblog">
            <div className="postagem">
        <h2 className="principal">{TituloPostagem.toUpperCase()}</h2>
        <img src={linkImagem}/>
        <p className="paragrafo">
          Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss deixa as
          pessoas mais interessantis.Cevadis im ampola pa arma uma pindureta.Per
          aumento de cachacis, eu reclamis. A ordem dos tratores não altera o pão
          duris.
        </p>
        <small>Esta frase foi criada por {nomeAutor}</small>
      </div>
      <div className="postagem">
        <h2 className="principal">{TituloPostagem.toUpperCase()}</h2>
        <img src={linkImagem}/>
        <p className="texto">
          Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss deixa as
          pessoas mais interessantis.Cevadis im ampola pa arma uma pindureta.Per
          aumento de cachacis, eu reclamis. A ordem dos tratores não altera o pão
          duris.
        </p>
        <small>Esta frase foi criada por {nomeAutor}</small>
      </div>
      <div className="postagem">
        <h2 className="principal">{TituloPostagem.toUpperCase()}</h2>
        <img src={linkImagem}/>
        <p className="paragrafo">
          Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss deixa as
          pessoas mais interessantis.Cevadis im ampola pa arma uma pindureta.Per
          aumento de cachacis, eu reclamis. A ordem dos tratores não altera o pão
          duris.
        </p>
        <small>Esta frase foi criada por {nomeAutor}</small>
      </div>
      <div className="postagem">
        <h2 className="principal">{TituloPostagem.toUpperCase()}</h2>
        <img src={linkImagem}/>
        <p className="paragrafo">
          Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss deixa as
          pessoas mais interessantis.Cevadis im ampola pa arma uma pindureta.Per
          aumento de cachacis, eu reclamis. A ordem dos tratores não altera o pão
          duris.
        </p>
        <small>Esta frase foi criada por {nomeAutor}</small>
      </div>
      <div className="postagem">
        <h2 className="principal">{TituloPostagem.toUpperCase()}</h2>
        <img src={linkImagem}/>
        <p className="texto">
          Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss deixa as
          pessoas mais interessantis.Cevadis im ampola pa arma uma pindureta.Per
          aumento de cachacis, eu reclamis. A ordem dos tratores não altera o pão
          duris.
        </p>
        <small>Esta frase foi criada por {nomeAutor}</small>
      </div>
      <div className="postagem">
        <h2 className="principal">{TituloPostagem.toUpperCase()}</h2>
        <img src={linkImagem}/>
        <p className="paragrafo">
          Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss deixa as
          pessoas mais interessantis.Cevadis im ampola pa arma uma pindureta.Per
          aumento de cachacis, eu reclamis. A ordem dos tratores não altera o pão
          duris.
        </p>
        <small>Esta frase foi criada por {nomeAutor}</small>
      </div>
        </section>
    )
}