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
  const max = dragon.strength;
  return Math.floor( Math.random() * (max - min) + min );
}

const getWarriorDamage = () => {
  const min = warrior.strength;
  const max = dragon.strength * warrior.weaponDmg;
  return Math.floor( Math.random() * (max - min) + min );
}

const getMageDmgAndMana = () => {
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

const gameActions = {
  warriorTurn: (callback) => {
    const dmg = callback();
    dragon.healthPoints -= dmg;
    warrior.damage = dmg;
  },
  mageTurn: (callback) => {
    const stats = callback();
    mage.mana -= stats.spentMana;
    mage.damage = stats.damageDealt;
    dragon.healthPoints -= stats.damageDealt;
  },
  dragonTurn: (callback) => {
    const dmg = callback();
    dragon.damage = dmg;
    mage.healthPoints -= dmg;
    warrior.healthPoints -= dmg;
  },
  updateBattleMembers: () => {
    gameActions.warriorTurn(getWarriorDamage);
    gameActions.mageTurn(getMageDmgAndMana);
    gameActions.dragonTurn(getDragonDamage);
    return battleMembers;
  }
};

console.log(gameActions.updateBattleMembers());