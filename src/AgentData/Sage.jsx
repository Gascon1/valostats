export const Sage = {
  type: 'Sentinel',
  name: 'Sage',
  description:
    'Sage creates safety for herself and her team wherever she goes. Able to revive fallen friends, and stave off forceful assaults, she provides a calm center to a hellish battlefield.',
  c: {
    name: 'Barrier Orb',
    description: 'EQUIP a barrier orb. FIRE places a solid wall. ALTERNATE FIRE rotates the wall (before placement).',
    damage: '',
    effect: 'Create a wall that decays in HP after 8s and ends until each segment reaches 1 HP',
    cost: '400',
    uses: '1 Use',
    cooldown: '',
    duration: '40s',
    other: 'Each segment starts with 1000 HP',
  },
  q: {
    name: 'Slow Orb',
    description:
      'EQUIP a slowing orb. FIRE to throw a slowing orb forward that detonates upon landing, creating a lingering field that slows players by 50% for 7 seconds caught inside of it.',
    damage: '',
    effect: '50% slow, 30% jump height reduction',
    cost: '100',
    uses: '2 Uses',
    cooldown: '',
    duration: '9s',
    other: 'Players can walk on the field without making a sound',
  },
  e: {
    name: 'Healing Orb',
    description:
      'EQUIP a healing orb. FIRE with your crosshairs over a damaged ally to activate a heal-over-time on them. ALTERNATE FIRE while Sage is damaged to activate a self heal-over-time.',
    damage: '',
    effect: '20 HPS',
    cost: 'Free',
    uses: '1 Uses',
    cooldown: '35s',
    other: '2s heal lockout after taking damage from any source',
    duration: '5s',
  },
  x: {
    name: 'Resurrection',
    description:
      'EQUIP a resurrection ability. FIRE with your crosshairs placed over a deal ally to begin resurrecting them. After a brief channel, the ally will be brought back to life with full health.',
    damage: '',
    effect: 'Resurrects targeted ally',
    cost: '7 Charges',
    uses: '',

    cooldown: '',
    duration: '3.3s',
    other: '2s of invulnerability',
    misc: '1.3s of vulnerability',
  },
};
