const chefs = [
    { name: "Олег", specialization: "Пицца" },
    { name: "Андрей", specialization: "Суши" },
    { name: "Анна", specialization: "Десерт" }
  ]

  const dishes = ["Маргарита", "Пепперони", "Три сыра", "Филадельфия", "Калифорния", "Чизмаки", "Сеякемаки", "Тирамису", "Чизкейк"]
  
  
  // Посетитель ресторана.
  class Client {
    constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
    }
  }
  
  
  let clientOrders = [];
  
  // Вам необходимо реализовать класс, который управляет заказами и поварами.
  class Manager {
  
    newOrder(client, ...numbers) {
  
  
      clientOrders.push({ name: client, order: numbers })
      console.log(clientOrders);
  
  
      let toggle = true;
      for (const num of numbers) {
        if (!dishes.includes(num.name)) {
          toggle = false;
          throw `${num.type} "${num.name}" - такого блюда нет в меню.`;
        }
      }
  
      for (const num of numbers) {
        let nameChef = '';
  
        for (const chef of chefs) {
          if (chef.specialization == num.type) {
            nameChef = chef.name;
          }
        }
  
        if (toggle) {
          console.log(`${num.type} "${num.name}" - ${num.quantity}; готовит повар ${nameChef}`);
        }
      }
    }
  }
  
  // Можно передать внутрь конструктора что-либо, если необходимо.
  const manager = new Manager();
  
  // Вызовы ниже должны работать верно, менять их нельзя, удалять тоже.
  console.log("Заказ 1");
  manager.newOrder(
    new Client("Иван", "Иванов"),
    { name: "Маргарита", quantity: 1, type: "Пицца" },
    { name: "Пепперони", quantity: 2, type: "Пицца" },
    { name: "Чизкейк", quantity: 1, type: "Десерт" },
  
  );
  // Вывод:
  // Клиент Иван заказал: 
  // Пицца "Маргарита" - 1; готовит повар Олег
  // Пицца "Пепперони" - 2; готовит повар Олег
  // Десерт "Чизкейк" - 1; готовит повар Анна
  
  // ---
  
  console.log("Заказ 2");
  const clientPavel = new Client("Павел", "Павлов");
  manager.newOrder(
    clientPavel,
    { name: "Филадельфия", quantity: 5, type: "Суши" },
    { name: "Калифорния", quantity: 3, type: "Суши" },
  );
  // Вывод:
  // Клиент Павел заказал: 
  // Суши "Филадельфия" - 5; готовит повар Андрей
  // Суши "Калифорния" - 3; готовит повар Андрей
  
  console.log("Заказ 3");
  manager.newOrder(
    clientPavel,
    { name: "Калифорния", quantity: 1, type: "Суши" },
    { name: "Тирамису", quantity: 2, type: "Десерт" },
  );
  // Вывод:
  // Клиент Павел заказал: 
  // Суши "Филадельфия" - 5; готовит повар Андрей
  // Суши "Калифорния" - 4; готовит повар Андрей
  // Десерт "Тирамису" - 2; готовит повар Анна
  
  console.log("Заказ 4");
  manager.newOrder(
    clientPavel,
    { name: "Филадельфия", quantity: 1, type: "Суши" },
    { name: "Трубочка с вареной сгущенкой", quantity: 1, type: "Десерт" },
  );
  // Ничего не должно быть добавлено, должна быть выброшена ошибка:
  // Десерт "Трубочка с вареной сгущенкой" - такого блюда не существует.



