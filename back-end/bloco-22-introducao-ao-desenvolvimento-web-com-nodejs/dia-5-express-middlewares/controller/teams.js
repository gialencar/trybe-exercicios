const fs = require("fs").promises;

const validateTeamData = (name, initials, country) => {
  // console.log('validando..');
  const isNameValid = name.length > 5;
  const isInitialsValid = initials.length <= 3 && initials === initials.toUpperCase();
  const isCountryValid = country.length > 3;

  console.log(name.length > 5);

  if (isNameValid && isInitialsValid && isCountryValid) {
    console.log("Validado");
    return true;
  };

  throw new Error("invalid data");
};

const createTeam = (req, res, next) => {
  const {name, initials, country} = req.body;
  console.log(name, initials, country);
  try {
    if (validateTeamData(name, initials, country)) res.status(201).end();
  } catch (err) {
    return res.status(400).send({"message": "invalid data"});
  };
  next();
};

const saveTeam = async (req, res) => {
  const {name, initials, country} = req.body;
  const team = JSON.stringify({name, initials, country});

  await fs.writeFile('./teams.json', team);

  res.status(201).json(team);
};

module.exports = {
  createTeam,
  saveTeam
};
