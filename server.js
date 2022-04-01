const express = require("express");
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());

// dummy data for student collection
const clients = [
  {
    id: 1,
    name: "Empresa 1",
    iban: "ES57 0168 0013 4051 7243 7152",
  },
  {
    id: 2,
    name: "Zara",
    iban: "ES57 0168 0013 4051 7243 7152",
  },
  {
    id: 3,
    name: "Empresa 2",
    iban: "ES57 0168 0013 4051 7243 7152",
  },
  {
    id: 4,
    name: "Empresa31",
    iban: "ES57 0168 0013 4051 7243 7152",
  },
  {
    id: 5,
    name: "Mango",
    iban: "ES57 0168 0013 4051 7243 7152",
  },
  {
    id: 6,
    name: "Empresa 1",
    iban: "ES57 0168 0013 4051 7243 7152",
  },
  {
    id: 7,
    name: "Fruteria pepe",
    iban: "ES57 0168 0013 4051 7243 7152",
  },
  {
    id: 8,
    name: "Frutería loli",
    iban: "ES57 0168 0013 4051 7243 7152",
  },
  {
    id: 9,
    name: "Alcampo",
    iban: "ES57 0168 0013 4051 7243 7152",
  },
  {
    id: 10,
    name: "Mercadona",
    iban: "ES57 0168 0013 4051 7243 7152",
  },
  {
    id: 11,
    name: "Mercadona Valencia",
    iban: "ES57 0168 0013 4051 7243 7152",
  },
  {
    id: 12,
    name: "Mercadona Murcia",
    iban: "ES57 0168 0013 4051 7243 7152",
  },

];

// Welcome Message
app.get("/", (req, res) => {
  res.send("CodeLab Wilmer Branch Student API");
});

// query search
app.get("/clients", async (req, res) => {
  try {
    const userQuery = await req.query;
    // console.log(userQuery)
    // const filteredStudent = await studentInformations.filter((info) => {
    //   let isValid = true;
    //   for (key in userQuery) {
    //     // console.log(key, userQuery[key], info[key]);
    //     isValid = isValid && info[key] === userQuery[key];
    //   }
    //   return isValid;
    // });

    // // console.log(filteredStudent)
    // res.json({ data: filteredStudent })


    const queries = await req.query
    let filteredClients = clients

    if (!!queries.q) {
      filteredClients = await clients.filter((client) => {
        return client.name.toLowerCase().includes(queries.q.toLowerCase())
      })
    }
    res.json({ data: filteredClients })
  }
  catch (err) {
    res.send(err.message)
  }
});

app.listen(port, () => {
  console.log(`Server is listening to port: ${port}`);
});