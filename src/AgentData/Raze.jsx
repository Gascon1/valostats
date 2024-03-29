export const Raze = {
  type: 'Duelist',
  name: 'Raze',
  description:
    'Raze loves explosives. With her blunt-force-trauma playstyle, she excels at flushing entrenched enemies and clearing tight spaces, with a generous dose of "boom".',
  c: {
    name: 'Boom Bot',
    description:
      'EQUIP a Boom Bot. FIRE will deploy the bot, causing it to travel in a straight line on the ground, bouncing off walls. The Boom Bot will lock on to any enemies in its frontal cone and chase them, exploding for heavy damage if it reaches them.',
    damage: '50 - 125',
    effect: '',
    cost: '200',
    uses: '1 Use',
    cooldown: '',
    duration: '10s',
    other: 'Boom Bot has 100 HP',
  },
  q: {
    name: 'Blast Pack',
    description:
      'INSTANTLY throw a Blast Pack that will stick to surfaces. RE-USE the ability after deployment to detonate, damaging and moving anything hit.',
    damage: '25 - 75',
    effect: '',
    cost: '200',
    uses: '2 Uses',
    cooldown: '',
    misc: '10x damage to Sage Wall',
    other: 'Can be used to re-position Raze',
  },
  e: {
    name: 'Paint Shells',
    description:
      'EQUIP a cluster grenade. FIRE to throw the grenade, which does damage and creates sub-munitions, each doing damage to anyone in their range. RESETS after 2 kills.',
    cost: '200',
    uses: '1 Use',
    damage: '15 - 55 per explosion',
    effect: '',
    cooldown: '',
    other: '2s primary fuse time and 1.3s secondary fuse time',
    misc: 'Can displace all that are hit',
  },
  x: {
    name: 'Showstopper',
    description:
      'EQUIP a rocket launcher. FIRE shoots a rocket that does massive area damage on contact with anything.',
    damage: '30 - 150',
    effect: '',
    cost: '6 Charges',
    uses: '',
    cooldown: '',
    duration: '10s',
    other: 'Can be used to re-position Raze',
  },
};
