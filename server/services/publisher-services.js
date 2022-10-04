const { newWriter } = require('../repository/writers');

async function addWriter(data) {
    const array = [data.name];
    await newWriter(array);
    return 'Autor adicionado com sucesso!';
}

module.exports = { addWriter };
