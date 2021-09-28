const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const customer = order.name;
  const tel = order.phoneNumber;
  const street = order.address.street;
  const number = order.address.number;
  const apart = order.address.apartment;

  console.log(
    `Olá ${deliveryPerson}, entrega para ${customer}, Tel:${tel}, End:${street}, Nº${number}, AP:${apart}`
  );
};

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const pizzas = Object.keys(order.order.pizza).join(', ');
  const drink = order.order.drinks.coke.type;
  const customer = (order.name = 'Luiz Silva');
  const total = (order.payment.total = 50);

  console.log(
    `Olá ${customer}, o total do seu pedido de ${pizzas} e ${drink} é ${total}`
  );
};

orderModifier(order);
