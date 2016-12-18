const cookie = require('cookie')

module.exports = {
  addMockRestMethods : (server) => {
    server.get('/api/products', function (request, response, next) {
      const cookies = cookie.parse(request.headers.cookie || '')
      const locale = cookies.locale || 'en'
      response.send(JSON.stringify(getMockedProducts(locale)))
    })
  }
}

function getMockedProducts (locale = 'en') {
  const product1 = {
    en: {
      id: 1,
      title: 'Mocked product 1',
      description: 'Mocked product 1 description',
      image: 'http://lorempixel.com/400/200/food/'
    },
    es: {
      id: 1,
      title: 'Mocked producto 1',
      description: 'Mocked producto 1 descripcion',
      image: 'http://lorempixel.com/400/200/food/'
    }
  }

  const product2 = {
    en: {
      id: 2,
      title: 'Mocked product 2',
      description: 'Mocked product 2 description',
      image: 'http://lorempixel.com/400/200/food/'
    },
    es: {
      id: 2,
      title: 'Mocked producto 2',
      description: 'Mocked producto 2 descripcion',
      image: 'http://lorempixel.com/400/200/food/'
    }
  }

  const product3 = {
    en: {
      id: 3,
      title: 'Mocked product 3',
      description: 'Mocked product 3 description',
      image: 'http://lorempixel.com/400/200/food/'
    },
    es: {
      id: 3,
      title: 'Mocked producto 3',
      description: 'Mocked producto 3 descripcion',
      image: 'http://lorempixel.com/400/200/food/'
    }
  }

  const product4 = {
    en: {
      id: 4,
      title: 'Mocked product 4',
      description: 'Mocked product 4 description',
      image: 'http://lorempixel.com/400/200/food/'
    },
    es: {
      id: 4,
      title: 'Mocked producto 4',
      description: 'Mocked producto 4 descripcion',
      image: 'http://lorempixel.com/400/200/food/'
    }
  }

  const product5 = {
    en: {
      id: 5,
      title: 'Mocked product 5',
      description: 'Mocked product 5 description',
      image: 'http://lorempixel.com/400/200/food/'
    },
    es: {
      id: 5,
      title: 'Mocked producto 5',
      description: 'Mocked producto 5 descripcion',
      image: 'http://lorempixel.com/400/200/food/'
    }
  }

  return [product1[locale], product2[locale], product3[locale], product4[locale], product5[locale]]
}
