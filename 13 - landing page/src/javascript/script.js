// @ts-nocheck
let sobre = document.querySelector("#sobre")

async function getApiGithub() {
    try {
      const dadosPerfil = await fetch("https://api.github.com/users/beatrizalsilva")
      const perfil = await dadosPerfil.json()
  
      let conteudo = `
        <img src="${perfil.avatar_url}" alt="Foto de perfil de uma mulher com cabelos médio castanho, usando óculos com armação preta, blusa preta e sorrindo. O fundo é neutro, destacando bem o rosto da ${perfil.name}." class="sobre">

        <div class="info-sobre">
            <h2>Quem sou eu?</h2>
            <p>${perfil.bio}</p>

            <div class="github">
                <a href="${perfil.html_url}" target="_blank">GitHub</a>
                <p>${perfil.followers} Seguidores</p>
                <p>${perfil.public_repos} Repositórios</p>
            </div>
        </div>
      `
      sobre.innerHTML += conteudo
    } catch (error) {
      console.log(error)
    }
}

getApiGithub()