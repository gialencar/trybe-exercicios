// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require('./exercise8');

describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokemon que não existe no banco de dados', (done) => {
    // Escreva aqui seu código
    const expected = new Error('Não temos esse pokémon para você :(');

    try {
      const callback = (err, success) => {
        expect(err).toEqual(expected);
        done();
      };
      getPokemonDetails((pokemon) => pokemon.name === 'Ditto', callback);
    } catch (error) {
      done(error);
    }
  });

  it('retorna um pokemon que existe no banco de dados', (done) => {
    // Escreva aqui seu código
    const expected =
      'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';

    try {
      const callback = (err, success) => {
        expect(success).toBe(expected);
        done();
      };

      getPokemonDetails((pokemon) => pokemon.name === 'Charmander', callback);
    } catch (error) {
      done(error);
    }
  });
});
