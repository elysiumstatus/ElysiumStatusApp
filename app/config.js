
export const CLASS_COLORS = {
  DRUID: '#FF7D0A',
  HUNTER: '#ABD473',
  MAGE: '#69CCF0',
  PALADIN: '#F58CBA',
  PRIEST: '#FFFFFF',
  ROGUE: '#FFF569',
  SHAMAN: '#0070DE', // Maybe people want the ugly paladin pink
  WARLOCK: '#9482C9',
  WARRIOR: '#C79C6E'
}

export const THEME = {
  PRIMARY_COLOR: '#121212',
  ACCENT_COLOR: CLASS_COLORS.SHAMAN,
  SUCCESS_COLOR: 'rgba(0, 199, 80, 0.85)',
  ERROR_COLOR: 'rgba(209, 0, 0, 0.85)'
}

export const SERVERS = {
  elysium_pvp: {
    name: 'Elysium',
    image: 'https://i.imgur.com/7Gisr3n.jpg',
    order: 3
  },
  zethkur_pvp: {
    name: 'Zethkur',
    image: 'https://i.imgur.com/ICElhLj.jpg',
    order: 4
  },
  anathema_pvp: {
    name: 'Anathema',
    image: 'https://i.imgur.com/B9QGZu3.jpg',
    order: 1
  },
  darrowshire_pve: {
    name: 'Darrowshire',
    image: 'https://i.imgur.com/KcWcbPo.jpg',
    order: 2
  },
  logon: {
    name: 'Elysium Login Server',
    image: 'https://i.imgur.com/9ywu91U.jpg',
    order: 5
  },
  website: {
    name: 'Elysium Website',
    image: 'https://i.imgur.com/n1w5Sbn.jpg',
    order: 6
  }
}

export const SERVICES = {
  logon: true,
  website: true
}

export const SOON = {
  // New servers
}

export const HOST = 'https://elysiumstatus.com'
