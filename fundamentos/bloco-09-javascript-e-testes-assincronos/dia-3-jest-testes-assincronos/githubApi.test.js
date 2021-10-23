// githubApi.test.js

const fetch = require('node-fetch');

const getRepos = (url) => (
  fetch(url)
    .then((response) => response.json())
    .then((data) => data.map((repo) => repo.name))
);


// implemente seus testes aqui

describe('Testa a função getRepos', () => {
  
  test("Verifica se o retorno possui o repositório 'sd-01-week4-5-project-todo-list'", async () => {
    const repos = await getRepos('https://api.github.com/orgs/tryber/repos')
    expect(repos).toContain('sd-01-week4-5-project-todo-list');
    })

    test("Verifica se o retorno possui o repositório 'sd-01-week4-5-project-meme-generator'", async () => {
      const repos = await getRepos('https://api.github.com/orgs/tryber/repos')
      expect(repos).toContain('sd-01-week4-5-project-meme-generator');
      })
})
