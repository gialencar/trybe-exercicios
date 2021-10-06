const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const getDragonDamage = () => {
  const min = 15;
  const max = dragon.damage;
  return Math.floor( Math.random() * (max - min) + min );
}

const getWarriorDamage = () => {
  const min = warrior.strength;
  const max = dragon.strength * warrior.weaponDmg;
  return Math.floor( Math.random() * (max - min) + min );
}

const getMageDmgAndManaStats = () => {
  const min = mage.intelligence;
  const max = mage.intelligence * 2;
  let damageDealt;
  let spentMana;

  if (mage.mana < 15) {
    spentMana = 0;
    damageDealt = 'Not enough Mana';
  } else {
    damageDealt = Math.floor( Math.random() * (max - min) + min );
    spentMana = 15;
  }

  return {
    damageDealt,
    spentMana,
  }
}
