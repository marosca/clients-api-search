const express = require("express");
const cors = require('cors')
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cors())

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
  {
    id: 13,
    name: "Mercadona Madrid",
    iban: "ES57 0168 0013 4051 7243 7152",
  },
  {
    id: 14,
    name: "Mercadona Barcelona",
    iban: "ES57 0168 0013 4051 7243 7152",
  },
  {
    id: 15,
    name: "Mercadona Sevilla",
    iban: "ES57 0168 0013 4051 7243 7152",
  },
  {
    id: 16,
    name: "Mercadona Málaga",
    iban: "ES57 0168 0013 4051 7243 7152",
  },
  {
    id: 17,
    name: "Mercadona Cuenca",
    iban: "ES57 0168 0013 4051 7243 7152",
  },
  {
    id: 18,
    name: "Mercadona Zaragoza",
    iban: "ES57 0168 0013 4051 7243 7152",
  },

];

// Welcome Message
app.get("/", (req, res) => {
  res.send("Go to /client to get api");
});

// query search
app.get("/clients", async (req, res) => {
  try {
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
