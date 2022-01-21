var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {
    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '65985103721',
            address: {
              postalcode: '49060260',
              street: 'Rua Garcia Moreno',
              number: '139',
              details: 'Ap 02',
              district: 'Palestina',
              city_state: 'Aracaju/SE'
            },
            delivery_method: [
              'Moto',
              'Bike Elétrica',
              'Van/Carro'
            ],
            cnh: 'cnh-digital.jpg'
        }

        return data
    }
}