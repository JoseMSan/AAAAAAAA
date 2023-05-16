var users = [
    {
      user: "usuario",
      password: "contrasenia",
      cards: [
        { id: 0, nombre: "Ace", personalidad: "Deportista", especie: "Pájaro", cumple: "2023/08/11", lema: "'Ace'", hobbie: "Naturaleza", color: "#c6f7d0" },
      ],
    },
  ];
  
  function indexOfUser(user) {
    for (let index = 0; index < users.length; index++) {
      if(users[index].user == user){
        return index;
      }
    }
      //return users.findIndex((i) => i.user == user);
  }
  
  function indexOfCard(user, id) {
    let i = indexOfUser(user);
    for (let index = 0; index < users[i].cards.length; index++) {
      if (users[i].cards[index].id == id) {
        return index;
      }      
    }
      //return users[i].cards.findIndex((j) => j._id == id);
  }
  
  exports.users = users;
  exports.indexOfUser = indexOfUser;
  exports.indexOfCard = indexOfCard;
  
