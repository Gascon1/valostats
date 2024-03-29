export const Reyna = {
  type: 'Duelist',
  name: 'Reyna',
  description:
    'Forged in the heart of Mexico, Reyna dominates single combat, popping off with each kill she scores. Her capability is only limited by her raw skill, making her highly dependent on performance.',
  c: {
    name: 'Leer',
    description:
      'EQUIP an ethereal destructible eye. ACTIVATE to cast the eye a short distance forward. The eye will Nearsight all enemies who look at it',
    damage: '',
    effect: 'Applies NEARSIGHT to all enemies looking in its direction',
    cost: '200',
    uses: '2 Uses',
    cooldown: '',
    duration: '3s',
    other: 'The eye has 100 HP',
  },
  q: {
    name: 'Devour',
    description:
      'Enemies killed by Reyna leave behind Soul Orbs that last 3 seconds. INSTANTLY consume a nearby soul orb, rapidly healing for a short duration. Health gained through this skill exceeding 100 will decay over time. If EMPRESS is active, this skill will automatically cast and not consume the orb.',
    cost: '100',
    uses: '4* Uses',
    damage: '',
    effect: '',
    cooldown: '',
    duration: '2.5s',
    other: 'Can use Devour or Dismiss in any combination for a max use of 4 times',
    misc: 'Can overheal.',
  },
  e: {
    name: 'Dismiss',
    description:
      'INSTANTLY consume a nearby soul orb, becoming intangible for a short duration. If EMPRESS is active, also become invisible.',
    damage: '',
    effect: '',
    cost: '100',
    uses: '4* Uses',
    cooldown: '',
    duration: 'Can use Devour or Dismiss in any combination for a max use of 4 times',
    other: 'Enemies can hear where you are going while stealthed',
    misc: '',
  },
  x: {
    name: 'Empress',
    description:
      'INSTANTLY enter a frenzy, increasing firing speed, equip and reload speed dramatically. Scoring a kill renews the duration.',
    damage: '',
    effect: '',
    cost: '6 Charges',
    uses: '',
    cooldown: '',
    duration: '15s',
    other: '',
  },
};
