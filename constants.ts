import type { Thread, User, ChatConversation, DriveFile } from './types';

// --- Users ---
export const you: User = { name: 'Harry Potter', email: 'harry.potter@hogwarts.uk.edu', avatarUrl: 'https://api.dicebear.com/8.x/micah/svg?seed=HarryPotter', department: 'Gryffindor Student', phone: '555-0101' };

export const hermioneGranger: User = { name: 'Hermione Granger', email: 'h.granger@hogwarts.uk.edu', avatarUrl: 'https://api.dicebear.com/8.x/micah/svg?seed=HermioneGranger', department: 'Gryffindor Student', phone: '555-0102' };
export const ronWeasley: User = { name: 'Ron Weasley', email: 'r.weasley@hogwarts.uk.edu', avatarUrl: 'https://api.dicebear.com/8.x/micah/svg?seed=RonWeasley', department: 'Gryffindor Student', phone: '555-0103' };
export const albusDumbledore: User = { name: 'Albus Dumbledore', email: 'headmaster@hogwarts.uk.edu', avatarUrl: 'https://api.dicebear.com/8.x/micah/svg?seed=AlbusDumbledore', department: 'Headmaster\'s Office', phone: '555-0100' };
export const minervaMcGonagall: User = { name: 'Minerva McGonagall', email: 'mcgonagall.m@hogwarts.uk.edu', avatarUrl: 'https://api.dicebear.com/8.x/micah/svg?seed=MinervaMcGonagall', department: 'Transfiguration Dept.', phone: '555-0104' };
export const severusSnape: User = { name: 'Severus Snape', email: 'snape.s@hogwarts.uk.edu', avatarUrl: 'https://api.dicebear.com/8.x/micah/svg?seed=SeverusSnape', department: 'Potions Dept.', phone: '555-0105' };
export const rubeusHagrid: User = { name: 'Rubeus Hagrid', email: 'hagrid.r@hogwarts.uk.edu', avatarUrl: 'https://api.dicebear.com/8.x/micah/svg?seed=RubeusHagrid', department: 'Groundskeeping', phone: '555-0106' };
export const dracoMalfoy: User = { name: 'Draco Malfoy', email: 'd.malfoy@hogwarts.uk.edu', avatarUrl: 'https://api.dicebear.com/8.x/micah/svg?seed=DracoMalfoy', department: 'Slytherin Student', phone: '555-0107' };
export const ginnyWeasley: User = { name: 'Ginny Weasley', email: 'g.weasley@hogwarts.uk.edu', avatarUrl: 'https://api.dicebear.com/8.x/micah/svg?seed=GinnyWeasley', department: 'Gryffindor Student', phone: '555-0108' };
export const nevilleLongbottom: User = { name: 'Neville Longbottom', email: 'n.longbottom@hogwarts.uk.edu', avatarUrl: 'https://api.dicebear.com/8.x/micah/svg?seed=NevilleLongbottom', department: 'Herbology Dept.', phone: '555-0109' };
export const lunaLovegood: User = { name: 'Luna Lovegood', email: 'l.lovegood@hogwarts.uk.edu', avatarUrl: 'https://api.dicebear.com/8.x/micah/svg?seed=LunaLovegood', department: 'Ravenclaw Student', phone: '555-0110' };
export const siriusBlack: User = { name: 'Sirius Black', email: 'padfoot@hogwarts.uk.edu', avatarUrl: 'https://api.dicebear.com/8.x/micah/svg?seed=SiriusBlack', department: 'Order of the Phoenix', phone: '555-0111' };
export const remusLupin: User = { name: 'Remus Lupin', email: 'moony@hogwarts.uk.edu', avatarUrl: 'https://api.dicebear.com/8.x/micah/svg?seed=RemusLupin', department: 'Defence Against the Dark Arts', phone: '555-0112' };

// --- Organizations / Bots ---
export const ministryOfMagic: User = { name: 'Ministry of Magic', email: 'alerts@hogwarts.uk.edu', avatarUrl: 'https://api.dicebear.com/8.x/initials/svg?seed=MM', department: 'Main Office', phone: '555-0200' };
export const gringottsBank: User = { name: 'Gringotts Wizarding Bank', email: 'statements@hogwarts.uk.edu', avatarUrl: 'https://api.dicebear.com/8.x/initials/svg?seed=GB', department: 'Vault Management', phone: '555-0201' };
export const dailyProphet: User = { name: 'The Daily Prophet', email: 'editor@hogwarts.uk.edu', avatarUrl: 'https://api.dicebear.com/8.x/initials/svg?seed=DP', department: 'Journalism', phone: '555-0202' };
export const weasleysWizardWheezes: User = { name: 'Weasleys\' Wizard Wheezes', email: 'orders@hogwarts.uk.edu', avatarUrl: 'https://api.dicebear.com/8.x/initials/svg?seed=WW', department: 'Sales', phone: '555-0203' };
export const hogwartsExpress: User = { name: 'Hogwarts Express', email: 'tickets@hogwarts.uk.edu', avatarUrl: 'https://api.dicebear.com/8.x/initials/svg?seed=HE', department: 'Transportation', phone: '555-0204' };
export const ollivanders: User = { name: 'Ollivanders', email: 'support@hogwarts.uk.edu', avatarUrl: 'https://api.dicebear.com/8.x/initials/svg?seed=O', department: 'Wandmaking', phone: '555-0205' };
export const hogwartsAdmissions: User = { name: 'Hogwarts Admissions', email: 'admissions@hogwarts.uk.edu', avatarUrl: 'https://api.dicebear.com/8.x/initials/svg?seed=HA', department: 'Admissions' };


// --- Liverpool FC Users ---
export const youLiverpool: User = { name: 'Anfield Admin', email: 'admin@liverpool.uk.fc', avatarUrl: 'https://api.dicebear.com/8.x/initials/svg?seed=LFC', department: 'Operations', phone: '555-0300' };
export const arneSlot: User = { name: 'Arne Slot', email: 'a.slot@liverpool.uk.fc', avatarUrl: 'https://api.dicebear.com/8.x/micah/svg?seed=ArneSlot', department: 'Manager', phone: '555-0301' };
export const alissonBecker: User = { name: 'Alisson Becker', email: 'a.becker@liverpool.uk.fc', avatarUrl: 'https://api.dicebear.com/8.x/micah/svg?seed=Alisson', department: 'Goalkeeper', phone: '555-0302' };
export const virgilVanDijk: User = { name: 'Virgil van Dijk', email: 'v.vandijk@liverpool.uk.fc', avatarUrl: 'https://api.dicebear.com/8.x/micah/svg?seed=Virgil', department: 'Defence', phone: '555-0303' };
export const trentAlexanderArnold: User = { name: 'Trent Alexander-Arnold', email: 't.alexanderarnold@liverpool.uk.fc', avatarUrl: 'https://api.dicebear.com/8.x/micah/svg?seed=Trent', department: 'Defence', phone: '555-0304' };
export const moSalah: User = { name: 'Mohamed Salah', email: 'm.salah@liverpool.uk.fc', avatarUrl: 'https://api.dicebear.com/8.x/micah/svg?seed=Salah', department: 'Forward', phone: '555-0305' };
export const darwinNunez: User = { name: 'Darwin Núñez', email: 'd.nunez@liverpool.uk.fc', avatarUrl: 'https://api.dicebear.com/8.x/micah/svg?seed=Darwin', department: 'Forward', phone: '555-0306' };
export const dominikSzoboszlai: User = { name: 'Dominik Szoboszlai', email: 'd.szoboszlai@liverpool.uk.fc', avatarUrl: 'https://api.dicebear.com/8.x/micah/svg?seed=Szoboszlai', department: 'Midfield', phone: '555-0307' };
export const alexisMacAllister: User = { name: 'Alexis Mac Allister', email: 'a.macallister@liverpool.uk.fc', avatarUrl: 'https://api.dicebear.com/8.x/micah/svg?seed=Alexis', department: 'Midfield', phone: '555-0308' };

// --- Liverpool FC Orgs ---
export const lfcTv: User = { name: 'LFC TV', email: 'broadcast@liverpool.uk.fc', avatarUrl: 'https://api.dicebear.com/8.x/initials/svg?seed=LFCTV' };
export const axaSponsorship: User = { name: 'AXA Sponsorship', email: 'sponsorship@liverpool.uk.fc', avatarUrl: 'https://api.dicebear.com/8.x/initials/svg?seed=AXA' };
export const nikeKitDept: User = { name: 'Nike Kit Department', email: 'kits@liverpool.uk.fc', avatarUrl: 'https://api.dicebear.com/8.x/initials/svg?seed=Nike' };
export const ticketing: User = { name: 'LFC Ticketing', email: 'tickets@liverpool.uk.fc', avatarUrl: 'https://api.dicebear.com/8.x/initials/svg?seed=Tickets' };
export const standardChartered: User = { name: 'Standard Chartered', email: 'finance@liverpool.uk.fc', avatarUrl: 'https://api.dicebear.com/8.x/initials/svg?seed=SC' };
export const lfcFoundation: User = { name: 'LFC Foundation', email: 'feedback@liverpool.uk.fc', avatarUrl: 'https://api.dicebear.com/8.x/initials/svg?seed=LFCF' };
export const carlsbergTravel: User = { name: 'Carlsberg Travel', email: 'travel@liverpool.uk.fc', avatarUrl: 'https://api.dicebear.com/8.x/initials/svg?seed=CT' };


export const allUsers: User[] = [
  you,
  hermioneGranger,
  ronWeasley,
  albusDumbledore,
  minervaMcGonagall,
  severusSnape,
  rubeusHagrid,
  dracoMalfoy,
  ginnyWeasley,
  nevilleLongbottom,
  lunaLovegood,
  siriusBlack,
  remusLupin,
  ministryOfMagic,
  gringottsBank,
  dailyProphet,
  weasleysWizardWheezes,
  hogwartsExpress,
  ollivanders,
  hogwartsAdmissions,
  youLiverpool,
  arneSlot,
  alissonBecker,
  virgilVanDijk,
  trentAlexanderArnold,
  moSalah,
  darwinNunez,
  dominikSzoboszlai,
  alexisMacAllister,
  lfcTv,
  axaSponsorship,
  nikeKitDept,
  ticketing,
  standardChartered,
  lfcFoundation,
  carlsbergTravel
];

const getDate = (daysAgo: number, time?: {hour: number, minute: number}) => {
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    if (time) {
        date.setHours(time.hour, time.minute, 0, 0);
    }
    return date.toISOString();
}

const LONG_HOGWARTS_BODY = `
<p>My Dearest Members of the Order,</p>
<p>I hope this message finds you in good health, though I fear the times ahead will test the strength and spirits of us all. I am writing to you today not with mere speculation or faint suspicion, but with a grave certainty that necessitates immediate and decisive action. The shadows are lengthening, not just in the corners of our world, but in the very heart of it. We must convene tonight. The signs are clearer than ever. Voldemort's movements are becoming bolder, and his influence, like a creeping poison, is beginning to seep back into the places we once thought safe. Meet at Grimmauld Place at 8 PM sharp. Do not be late. This is of the utmost importance.</p>
<p>I do not make this call lightly. For months, we have operated in the quiet, gathering whispers and piecing together fragments of a puzzle we hoped would never be complete. We have seen the patterns, the disappearances of notable wizards and witches who opposed him in the first war, the unsettling silence from magical communities abroad, and the strange, dark omens that have begun to manifest even in Muggle news. Last night, an incident in the North Sea—a distress signal from a magical vessel, followed by an unnatural, swirling vortex of dark green light visible for miles—confirms my deepest fears. This was not a random act of dark magic; it bore the signature of his followers, a mark of calculated terror designed to be seen. It was a declaration.</p>
<p>Our purpose has never been more critical. The Ministry, in its frustrating and perilous denial, continues to discredit those who speak the truth. Cornelius Fudge, blinded by his desire for peace and order, has chosen to interpret these events as isolated incidents, the work of rogue dark wizards rather than the orchestrated return of the one we all fear. This political blindness puts us all in greater danger. It means that, for now, we are the only true line of defense. We are the guardians of a truth the world is not yet ready to accept, and we must bear that burden with courage and resolve.</p>
<p>Tonight's meeting will have several key objectives. First, we must consolidate all intelligence gathered over the past three months. Every report, every rumor, every overheard conversation is a piece of the map we must build. I ask each of you to come prepared to share your findings in detail. Mundungus, your ears in the less reputable corners of our world are invaluable. Emmeline, your connections within the international magical community may shed light on his broader strategy. Dedalus, your observations of Muggle disturbances are more important than you might realize. We must see the whole picture to anticipate his next move.</p>
<p>Secondly, we will be re-evaluating and reinforcing our security protocols. This includes the Fidelius Charm at Grimmauld Place, which remains our most secure bastion, but also personal protective enchantments for all members and their families. I will be distributing a new set of emergency communication protocols, relying on Patronus messages only for the most dire of circumstances, as we can no longer be certain that other magical channels are not being monitored. Every member must be prepared to defend themselves and their loved ones at a moment's notice. Complacency is our greatest enemy.</p>
<p>Third, we will discuss the protection of Harry Potter. His safety remains, as ever, our paramount concern. The connection he shares with Voldemort is a double-edged sword, a source of insight but also a profound vulnerability. We must devise new ways to shield him, not only from physical harm but from psychological intrusion. The lessons with Severus are crucial, but they are not enough. We must form a rota for discreet surveillance around him, especially when he is away from the protective wards of Hogwarts. This will require utmost subtlety; the boy must not feel like a prisoner, but we cannot afford to be careless.</p>
<p>Finally, we must address the issue of recruitment. Our numbers are small, and many of our most experienced members from the first war are gone. We must identify trustworthy individuals who can be brought into our confidence. This is a perilous task. The fear of Voldemort's name is still potent, and many who might sympathize with our cause will be too afraid to act. We must be shrewd judges of character, seeking out not only power and skill but also loyalty and the courage to stand for what is right when all others are running. I will propose a few names tonight, and I expect you to do the same, but each candidate must be vetted with extreme prejudice. A single leak could be catastrophic.</p>
<p>I understand the weight of what I am asking. You are putting your lives, your families, and your reputations on the line. You will be asked to operate in the shadows, to fight a war that most of the world refuses to see, and to face a darkness that has tasted victory before. But I look at the faces I see in my mind's eye as I write this—your faces—and I am filled not with despair, but with hope. Hope because I know the strength that resides in each of you. The strength of love, of loyalty, and of an unwavering belief in the good. It is a power Voldemort has never understood and will always underestimate.</p>
<p>Come prepared. Come vigilant. But above all, come together. For it is only together that we stand a chance of seeing the dawn that will follow this long night.</p>
<p>Yours in solidarity,<br>Albus Dumbledore</p>
`;


const HOGWARTS_THREADS: Omit<Thread, 'account'>[] = [
  // --- Today ---
  {
    id: 'thread-1',
    subject: "Order of the Phoenix - Urgent Meeting",
    participants: [albusDumbledore, severusSnape, minervaMcGonagall, siriusBlack, remusLupin, you],
    messages: [
      {
        id: 'msg1-1',
        sender: albusDumbledore,
        body: LONG_HOGWARTS_BODY,
        timestamp: getDate(0, {hour: 18, minute: 5}),
      },
      {
        id: 'msg1-2',
        sender: siriusBlack,
        body: `<p>I'll have the house ready, Albus. Kreacher is in a foul mood as usual, but the coast is clear.</p>`,
        timestamp: getDate(0, {hour: 18, minute: 25}),
      },
      {
        id: 'msg1-3',
        sender: severusSnape,
        body: `<p>I will be there, but I may have intelligence that cannot wait until 8. Should I send it ahead by Patronus?</p>`,
        timestamp: getDate(0, {hour: 18, minute: 40}),
      },
      {
        id: 'msg1-4',
        sender: albusDumbledore,
        body: `<p>Yes, Severus. Please do. The rest of you, maintain owl silence.</p>`,
        timestamp: getDate(0, {hour: 18, minute: 42}),
      },
    ],
    timestamp: getDate(0, {hour: 18, minute: 42}),
    isRead: false,
    isPinned: true,
    category: 'primary',
  },
  {
    id: 'thread-2',
    subject: "Weekend trip to Hogsmeade?",
    participants: [ronWeasley, hermioneGranger, you],
    messages: [
      { id: 'm1', sender: ronWeasley, body: '<p>Fancy a trip to Hogsmeade this weekend? I\'m dying for a butterbeer at the Three Broomsticks!</p>', timestamp: getDate(0, {hour: 16, minute: 30}) },
      { id: 'm2', sender: you, body: '<p>Definitely! I need to stop by Zonko\'s too. What time were you thinking?</p>', timestamp: getDate(0, {hour: 16, minute: 45}) },
      { id: 'm3', sender: hermioneGranger, body: '<p>I can come, but I need to finish my Arithmancy essay first. Maybe Saturday afternoon?</p>', timestamp: getDate(0, {hour: 17, minute: 10}) },
    ],
    timestamp: getDate(0, {hour: 17, minute: 10}),
    isRead: false,
    isPinned: false,
    category: 'primary',
  },
  {
    id: 'thread-3',
    subject: "Your Weasleys' Wizard Wheezes Order #WW7891 has shipped!",
    participants: [weasleysWizardWheezes, you],
    messages: [{ id: 'm1', sender: weasleysWizardWheezes, body: '<p>Great news, Harry! Your order containing 1x Extendable Ear and 3x Decoy Detonators is on its way. Owl Post tracking number is 3B482A. Expect delivery within 2 business days!</p>', timestamp: getDate(0, {hour: 15, minute: 1}) }],
    timestamp: getDate(0, {hour: 15, minute: 1}),
    isRead: true,
    isPinned: false,
    category: 'updates',
  },
  {
    id: 'thread-4',
    subject: "Detention Reminder",
    participants: [minervaMcGonagall, you, ronWeasley],
    messages: [{ id: 'm1', sender: minervaMcGonagall, body: '<p>Mr. Potter and Mr. Weasley, this is a reminder of your detention this evening at 7 PM in my classroom. You will be polishing the school\'s collection of silver trophies. Without magic.</p>', timestamp: getDate(0, {hour: 14, minute: 22}) }],
    timestamp: getDate(0, {hour: 14, minute: 22}),
    isRead: true,
    isPinned: false,
    category: 'primary',
  },
  {
    id: 'thread-5',
    subject: "Quidditch Practice Canceled",
    participants: [ginnyWeasley, you],
    messages: [{ id: 'm1', sender: ginnyWeasley, body: '<p>Hey Captain, just letting you know I\'ve canceled practice today due to the thunderstorm. We\'ll reschedule for tomorrow, same time. Spread the word!</p>', timestamp: getDate(0, {hour: 13, minute: 0}) }],
    timestamp: getDate(0, {hour: 13, minute: 0}),
    isRead: true,
    isPinned: false,
    category: 'primary',
  },
  {
    id: 'thread-6',
    subject: "Your Gringotts Vault Statement - July",
    participants: [gringottsBank, you],
    messages: [{ id: 'm1', sender: gringottsBank, body: '<p>Dear Mr. Potter, Your monthly statement for Vault 687 is now available. Please present this message to your designated goblin teller upon your next visit.</p>', timestamp: getDate(0, {hour: 9, minute: 5}) }],
    timestamp: getDate(0, {hour: 9, minute: 5}),
    isRead: true,
    isPinned: false,
    category: 'finance',
  },

  // Starred
  {
    id: 'starred-1',
    subject: "The Marauder's Map",
    participants: [siriusBlack, you],
    messages: [{ id: 'm1', sender: siriusBlack, body: '<p>Harry, I have some thoughts on new ways to use the map. We need to talk. Are you free to chat via the Floo Network tonight? Let me know. - Padfoot</p>', timestamp: getDate(1, {hour: 21, minute: 32}) }],
    timestamp: getDate(1, {hour: 21, minute: 32}),
    isRead: true,
    isPinned: false,
    isStarred: true,
    category: 'primary',
  },
   {
    id: 'starred-2',
    subject: "O.W.L. Study Group",
    participants: [hermioneGranger, you, ronWeasley, nevilleLongbottom],
    messages: [{ id: 'm1', sender: hermioneGranger, body: '<p>I\'ve created a comprehensive study schedule for our O.W.L.s. We\'ll start with Potions on Monday in the library after dinner. Attendance is mandatory, Ron.</p>', timestamp: getDate(2, {hour: 18, minute: 2}) }],
    timestamp: getDate(2, {hour: 18, minute: 2}),
    isRead: true,
    isPinned: false,
    isStarred: true,
    category: 'primary',
  },

  // Todos
  {
    id: 'todo-1',
    subject: "Herbology Assignment: Mandrake Repotting",
    participants: [nevilleLongbottom, you],
    messages: [{ id: 'm1', sender: nevilleLongbottom, body: '<p>Harry, could you send me your notes from today\'s Herbology class? I think Trevor smudged the ink on my parchment when we were repotting the Mandrakes. Thanks!</p>', timestamp: getDate(1) }],
    timestamp: getDate(1),
    isRead: true,
    isPinned: false,
    category: 'todos',
  },
  {
    id: 'todo-2',
    subject: "Ministry Decree No. 24",
    participants: [ministryOfMagic, you],
     messages: [{ id: 'm1', sender: ministryOfMagic, body: '<p>All Hogwarts students are hereby required to register their wands with the Ministry of Magic by October 31st. Failure to comply will result in immediate expulsion. Please see your Head of House to complete the registration.</p>', timestamp: getDate(4) }],
    timestamp: getDate(4),
    isRead: true,
    isPinned: false,
    category: 'todos',
  },

  // Snoozed
  {
    id: 'snoozed-1',
    subject: "The Quibbler - Special Edition",
    participants: [lunaLovegood, you],
    messages: [{ id: 'm1', sender: lunaLovegood, body: '<p>Hello Harry, I\'ve just finished an article on the Crumple-Horned Snorkack. My father is publishing it next week! I think you\'ll find it illuminates a lot. I\'ve attached a sneak preview.</p>', timestamp: getDate(3) }],
    timestamp: getDate(3),
    isRead: true,
    isPinned: false,
    category: 'primary',
    snoozedUntil: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2).toISOString(), // Snoozed for 2 days
  },

  // --- Last Week ---
  {
    id: 'thread-7',
    subject: "Feedback on your Draught of Peace",
    participants: [severusSnape, you],
    messages: [{ id: 'm1', sender: severusSnape, body: '<p>Potter. Your essay on the properties of Bezoars was, against all odds, adequate. See my notes attached. Do not assume this level of... acceptability will become the norm. 10 points from Gryffindor for untidy handwriting.</p>', timestamp: getDate(2, {hour: 11, minute: 45}) }],
    timestamp: getDate(2, {hour: 11, minute: 45}),
    isRead: true,
    isPinned: false,
    category: 'feedback',
  },
  {
    id: 'thread-8',
    subject: "How's Buckbeak?",
    participants: [rubeusHagrid, you],
    messages: [
        { id: 'm1', sender: you, body: '<p>Hi Hagrid, just checking in. How is Buckbeak settling in back at Hogwarts?</p>', timestamp: getDate(3, {hour: 19, minute: 0}) },
        { id: 'm2', sender: rubeusHagrid, body: '<p>Doin\' great, Harry! He\'s happy as a clam. Been feedin\' him plenty o\' ferrets. Thanks for askin\'!</p>', timestamp: getDate(3, {hour: 20, minute: 15}) }
    ],
    timestamp: getDate(3, {hour: 20, minute: 15}),
    isRead: true,
    isPinned: false,
    category: 'primary',
  },
  {
    id: 'thread-9',
    subject: "Hogwarts Express Ticket Confirmation",
    participants: [hogwartsExpress, you],
    messages: [{ id: 'm1', sender: hogwartsExpress, body: '<p>Your ticket for the Hogwarts Express on September 1st is confirmed. Please be at Platform 9¾ before 11 AM. Have a magical journey!</p>', timestamp: getDate(4) }],
    timestamp: getDate(4),
    isRead: true,
    isPinned: false,
    category: 'travel',
  },
    {
    id: 'thread-10',
    subject: "Defence Against the Dark Arts - Extra Credit",
    participants: [remusLupin, you, hermioneGranger],
    messages: [{ id: 'm1', sender: remusLupin, body: '<p>For those interested, I am offering an extra credit opportunity. A three-foot essay on the practical applications of the Boggart-Banishing Spell. Due next Friday.</p>', timestamp: getDate(5) }],
    timestamp: getDate(5),
    isRead: true,
    isPinned: false,
    category: 'primary',
  },
  {
    id: 'thread-11',
    subject: "Re: Father's complaint",
    participants: [dracoMalfoy, you],
    messages: [{ id: 'm1', sender: dracoMalfoy, body: '<p>Potter, my father will be hearing about your little stunt in the Potions corridor. You and your ridiculous friends won\'t get away with it.</p>', timestamp: getDate(6) }],
    timestamp: getDate(6),
    isRead: true,
    isPinned: false,
    category: 'primary',
  },

  // --- Older ---
  {
    id: 'thread-12',
    subject: "Welcome to Gryffindor!",
    participants: [minervaMcGonagall, you],
    messages: [{ id: 'm1', sender: minervaMcGonagall, body: '<p>Dear Mr. Potter, On behalf of Gryffindor house, I am delighted to welcome you. Your bravery and chivalry will be a credit to us all. The password to the common room is "Caput Draconis".</p>', timestamp: getDate(30) }],
    timestamp: getDate(30),
    isRead: true,
    isPinned: false,
    category: 'primary',
  },
  {
    id: 'thread-13',
    subject: "Wand care instructions",
    participants: [ollivanders, you],
    messages: [{ id: 'm1', sender: ollivanders, body: '<p>A receipt for your wand (Holly and Phoenix feather, 11 inches, nice and supple). Remember to polish with a soft cloth and avoid using it for mundane tasks. The wand chooses the wizard, Mr. Potter.</p>', timestamp: getDate(45) }],
    timestamp: getDate(45),
    isRead: true,
    isPinned: false,
    category: 'primary',
  },
  ...Array.from({ length: 37 }, (_, i) => ({
    id: `older-thread-${i + 1}`,
    subject: `Daily Prophet Subscription Update - Issue #${150 - i}`,
    participants: [dailyProphet, you],
    messages: [{ id: `m${i}`, sender: dailyProphet, body: `<p>Your daily owl edition of The Daily Prophet is attached. Today's headlines include: "Ministry Cracks Down on Unlicensed Potions" and "Wimbourne Wasps Triumph in Thrilling Final".</p>`, timestamp: getDate(10 + i * 2) }],
    timestamp: getDate(10 + i * 2),
    isRead: true,
    isPinned: false,
    category: 'updates' as const,
  })),
  // --- Sent ---
  { id: 'sent-1', subject: 'Re: Weekend trip to Hogsmeade?', participants: [ronWeasley, hermioneGranger, you], messages: [{ id: 's1', sender: you, body: '<p>Definitely! I need to stop by Zonko\'s too. What time were you thinking?</p>', timestamp: getDate(0, { hour: 16, minute: 45 }) }], timestamp: getDate(0, { hour: 16, minute: 45 }), isRead: true, isPinned: false, category: 'primary' },
  { id: 'sent-2', subject: 'Re: How\'s Buckbeak?', participants: [rubeusHagrid, you], messages: [{ id: 's2', sender: you, body: '<p>Hi Hagrid, just checking in. How is Buckbeak settling in back at Hogwarts?</p>', timestamp: getDate(3, { hour: 19, minute: 0 }) }], timestamp: getDate(3, { hour: 19, minute: 0 }), isRead: true, isPinned: false, category: 'primary' },
  { id: 'sent-3', subject: 'Heads up - Dementors near the black lake', participants: [siriusBlack, you], messages: [{ id: 's3', sender: you, body: '<p>Sirius, saw some Dementors near the south entrance by the lake. Be careful. -Harry</p>', timestamp: getDate(5) }], timestamp: getDate(5), isRead: true, isPinned: false, category: 'primary' },
  // --- Drafts ---
  { id: 'draft-1', subject: '(Draft) New defensive spells list', participants: [you], messages: [{ id: 'd1', sender: you, body: '<p>Spells to practice:\n- Expecto Patronum (stronger)\n- Expelliarmus (faster)\n-</p>', timestamp: getDate(1) }], timestamp: getDate(1), isRead: true, isPinned: false, category: 'primary' },
  { id: 'draft-2', subject: '(Draft) Thank you note to the Weasleys', participants: [you], messages: [{ id: 'd2', sender: you, body: '<p>Dear Mr. and Mrs. Weasley, Thank you so much for the fudge and the sweater!</p>', timestamp: getDate(10) }], timestamp: getDate(10), isRead: true, isPinned: false, category: 'primary' },
  { id: 'draft-3', subject: '(Draft) Ideas for the next D.A. meeting', participants: [you], messages: [{ id: 'd3', sender: you, body: '<p>Let\'s work on shield charms next. Everyone needs to be able to cast a solid Protego.</p>', timestamp: getDate(12) }], timestamp: getDate(12), isRead: true, isPinned: false, category: 'primary' },
  // --- Archived ---
  { id: 'archive-1', subject: 'Hogwarts: A History - Overdue Book Reminder', participants: [hogwartsAdmissions, you], messages: [{ id: 'a1', sender: hogwartsAdmissions, body: '<p>Dear Mr. Potter, Our records show that "Hogwarts: A History" is 3 weeks overdue. Please return it to the library to avoid further penalties.</p>', timestamp: getDate(40) }], timestamp: getDate(40), isRead: true, isPinned: false, category: 'updates', isArchived: true },
  { id: 'archive-2', subject: 'Your booklist for the new term', participants: [hogwartsAdmissions, you], messages: [{ id: 'a2', sender: hogwartsAdmissions, body: '<p>Please find your required reading list for the upcoming term attached. All books are available at Flourish and Blotts.</p>', timestamp: getDate(90) }], timestamp: getDate(90), isRead: true, isPinned: false, category: 'updates', isArchived: true },
  { id: 'archive-3', subject: 'Re: Application for Auror Training Program', participants: [ministryOfMagic, you], messages: [{ id: 'a3', sender: ministryOfMagic, body: '<p>Dear Mr. Potter, we have received your application. We will contact you regarding next steps within 6-8 weeks.</p>', timestamp: getDate(120) }], timestamp: getDate(120), isRead: true, isPinned: false, category: 'primary', isArchived: true },
  // --- Bundles ---
  { id: 'bundle-finance-1', subject: 'Invoice #4829 from The Daily Prophet', participants: [dailyProphet, you], messages: [{ id: 'bf1', sender: dailyProphet, body: '<p>Your subscription invoice is due. Please remit payment at your earliest convenience.</p>', timestamp: getDate(8) }], timestamp: getDate(8), isRead: true, isPinned: false, category: 'finance' },
  { id: 'bundle-feedback-1', subject: 'How was your recent purchase? - Weasleys\' Wizard Wheezes', participants: [weasleysWizardWheezes, you], messages: [{ id: 'bfb1', sender: weasleysWizardWheezes, body: '<p>We\'d love to get your feedback on your recent order. Let us know how our products are working for you!</p>', timestamp: getDate(11) }], timestamp: getDate(11), isRead: true, isPinned: false, category: 'feedback' },
  { id: 'bundle-travel-1', subject: 'Your Knight Bus Receipt', participants: [ministryOfMagic, you], messages: [{ id: 'bt1', sender: ministryOfMagic, body: '<p>Thank you for using the Knight Bus. Your receipt for 11 Sickles is attached.</p>', timestamp: getDate(22) }], timestamp: getDate(22), isRead: true, isPinned: false, category: 'travel' },
];

const LONG_LIVERPOOL_BODY = `
<p>Good morning team,</p>
<p>I hope you all had a restful Sunday, but now our focus shifts entirely to what is undoubtedly one of the most critical weeks of our season. The performance against Chelsea was solid, a testament to the hard work you've been putting in, but solid is not enough. We are Liverpool. We aim for perfection, and this week, we must demand nothing less from ourselves as we prepare to face Manchester City. This is a match that will not be won on talent alone; it will be won by intelligence, by discipline, and by an unbreakable collective will. I am attaching the full, detailed training schedule for the week, but I want to use this message to outline the philosophy and the specific focal points that will guide every session we have.</p>
<p>First, let's briefly touch upon the Chelsea match. The data analysis from the performance team is attached for your review, and I expect every one of you to read it before our session tomorrow morning. The key takeaways are positive: our pressing intensity in the first 60 minutes was the highest it's been all season, leading to 14 possession recoveries in the final third. Dominik, your energy in leading that press was exceptional and set the tone for the entire team. However, we saw a noticeable drop-off in the final 20 minutes. Our defensive shape became stretched, and the distance between the midfield and defensive lines grew, allowing them two clear-cut chances that Alisson, thankfully, was equal to. This is a non-negotiable we must fix. Champions play for 95 minutes, not 60. Our fitness levels are excellent, so this is a matter of concentration and tactical discipline under fatigue. This will be a theme throughout the week.</p>
<p>Looking ahead to Manchester City, we are facing a team that is surgical in its exploitation of space. Their ability to pull teams out of position is second to none. Therefore, our primary focus this week will be on 'Compactness and Transition'. Every single drill, from the warm-up rondos to the full-sided games, will be designed to reinforce these principles.</p>
<p><strong>Monday: Recovery & Tactical Introduction.</strong> The session will be light for those who played 90 minutes. For the rest of the squad, it will be a sharp, high-intensity session focused on passing patterns under pressure. In the afternoon, we will have a team-wide video session. We will analyze three specific patterns of play from City: their use of inverted full-backs to create central overloads, De Bruyne's movement into the half-spaces, and Haaland's channel runs. Virgil, I need you and Ibou to lead the discussion on how we manage those runs, maintaining our high line while eliminating the space in behind. We must be on the same page from minute one.</p>
<p><strong>Tuesday: Defensive Shape and Pressing Triggers.</strong> This will be our most intensive tactical day. We will work in units—defence, midfield, attack—on maintaining our compact 4-3-3 shape out of possession. The distances between each of you must be perfect. We will drill the specific triggers for our press. We do not press randomly. We press when the ball goes to their full-back, when there's a poor touch, or a backwards pass. Alexis, your role as the '6' will be pivotal. Your positioning dictates the entire team's shape. We will work on the scenario where you drop between the center-backs to create a back three, allowing our full-backs, Trent and Robbo, to engage higher up the pitch. Trent, this will require immense tactical discipline from you. Your creative genius is a weapon, but against City, your defensive responsibility is paramount. We cannot afford any lapses.</p>
<p><strong>Wednesday: Attacking Transitions & Finishing.</strong> Having established our defensive solidity, Wednesday will be about what we do the moment we win the ball. This is where we can hurt them. Our transition from defence to attack must be lightning-fast and precise. We will work on one-touch and two-touch passing drills to move the ball forward quickly. Mo, Darwin, Luis—your movement will be key. I don't want to see static runs. I want to see intelligent, coordinated movements to stretch their backline. Darwin, we have been working on the timing of your runs. That split-second of hesitation is the difference between being onside and offside. This week, in every finishing drill, I want you to focus on that initial movement, arcing your run to stay onside. We will finish the session with a high-pressure 11v11 game on a narrowed pitch to simulate the intensity and lack of space we will face on Saturday.</p>
<p><strong>Thursday: Set-Pieces (Offensive & Defensive).</strong> Games of this magnitude are often decided by a single moment. We will dedicate the entire session to set-pieces. We have identified a potential weakness in City's zonal marking on corners. We have three new routines we will be implementing, designed to create space for Virgil at the back post. We will walk through them, then drill them until they are second nature. Defensively, their routines are complex. Every player must know their specific role, their man, and their zone. There is no room for error. We will not concede a cheap goal from a set-play. It is a sign of a weak mentality, and we are not weak.</p>
<p><strong>Friday: Final Preparations & Activation.</strong> A short, sharp session. We will focus on activation, small-sided games, and a final walkthrough of our tactical plan. This is more of a mental day than a physical one. We will end with a finishing competition—I want you going into the game on Saturday feeling sharp, confident, and hungry for goals. The team for Saturday will be announced after this session.</p>
<p>I want to be clear: I believe in every single one of you. I believe in our philosophy, our fitness, and our quality. But belief is not enough. It must be matched by meticulous preparation and flawless execution. This week, every minute matters. The time in the gym, the attention in the video room, the quality of your nutrition and sleep—it all contributes to the result on Saturday. Let's be professional, let's be focused, and let's show them why Anfield is a fortress. Let's show them who we are.</p>
<p>See you all at the training ground tomorrow morning at 9 AM sharp.</p>
<p>Best,<br>Arne</p>
`;

// --- Liverpool FC Email Generator ---
const liverpoolUsers = [arneSlot, alissonBecker, virgilVanDijk, trentAlexanderArnold, moSalah, darwinNunez, dominikSzoboszlai, alexisMacAllister, lfcTv, axaSponsorship, nikeKitDept, ticketing, standardChartered, lfcFoundation, carlsbergTravel];
const subjects = [
    "Training Schedule Update: Week of the 15th", "Match Day Strategy vs Man City", "Sponsorship Opportunity: AXA Annual Gala", "New 2025/26 Nike Kit Photoshoot",
    "Post-Match Analysis: Chelsea", "Media Duties for LFC TV", "Travel Itinerary for Champions League Away Leg", "Ticket Allocation for Family and Friends",
    "Nutrition Plan Update", "Community Outreach Event Details", "Financial Fair Play Report Q3", "Player Appearance Feedback Survey", "Flight Details for Pre-season Tour"
];
const bodies = [
    "<p>Hi team, please find the updated training schedule for this week attached. Note the earlier start on Wednesday for tactical review.</p>",
    "<p>Attached is the tactical breakdown for our upcoming match against Man City. Please review the set-piece variations. We'll walk through them tomorrow.</p>",
    "<p>Dear players, you are cordially invited to the AXA Annual Gala. Please RSVP by Friday. Dress code is black tie.</p>",
    "<p>Reminder: The photoshoot for next season's Nike kit is scheduled for Thursday at 2 PM at the AXA Training Centre. Please be prompt.</p>",
    "<p>A summary of key performance indicators from the Chelsea match is now available on the portal. Overall, a strong performance, but let's focus on defensive transitions.</p>",
    "<p>Mo, Trent - LFC TV has requested you for a short pre-match interview. It will take 15 minutes after training on Friday.</p>",
    "<p>Please find your flight and hotel details for the upcoming Champions League match. A full itinerary is attached.</p>",
    "<p>Your ticket allocation for the next home game is now available to claim. Please use the players' portal to assign them.</p>",
    "<p>The club nutritionists have updated the pre-match meal plans. Please check the new menu and make your selections by tomorrow evening.</p>",
    "<p>We have a community outreach event at a local school on Tuesday. A bus will depart from the training ground at 1 PM.</p>",
    "<p>The Q3 FFP report from Standard Chartered is now available for review by the board.</p>",
    "<p>Please provide your feedback on the recent LFC Foundation player appearance event.</p>",
    "<p>Your Carlsberg-sponsored travel itinerary for the USA pre-season tour is confirmed.</p>"
];

const getCategoryForLFC = (subject: string): Thread['category'] => {
    if (subject.toLowerCase().includes('financial') || subject.toLowerCase().includes('ffp')) return 'finance';
    if (subject.toLowerCase().includes('feedback') || subject.toLowerCase().includes('survey')) return 'feedback';
    if (subject.toLowerCase().includes('travel') || subject.toLowerCase().includes('flight')) return 'travel';
    if (subject.toLowerCase().includes('kit') || subject.toLowerCase().includes('schedule')) return 'updates';
    return 'primary';
};

const LIVERPOOL_THREADS: Thread[] = Array.from({ length: 40 }, (_, i) => {
    const sender = liverpoolUsers[i % liverpoolUsers.length];
    const subject = subjects[i % subjects.length];
    const participants = [sender, youLiverpool];
    if (i % 3 === 0) participants.push(liverpoolUsers[(i + 1) % liverpoolUsers.length]);
    const body = i === 0 ? LONG_LIVERPOOL_BODY : bodies[i % bodies.length];

    return {
        id: `liverpool-thread-${i + 1}`,
        subject: subject,
        participants: participants,
        messages: [{
            id: `lfc-msg-${i}`,
            sender: sender,
            body: body,
            timestamp: getDate(i),
        }],
        timestamp: getDate(i),
        isRead: i > 8, // make first 9 unread
        isPinned: false,
        isStarred: i % 10 === 0,
        category: getCategoryForLFC(subject),
        account: 'liverpool' as const,
    };
});

// Add Sent, Drafts, Archived for Liverpool
LIVERPOOL_THREADS.push(
  { id: 'lfc-sent-1', subject: 'Re: Media Duties', participants: [lfcTv, youLiverpool], messages: [{ id: 'ls1', sender: youLiverpool, body: '<p>Confirmed. Trent and Mo will be there.</p>', timestamp: getDate(1) }], timestamp: getDate(1), isRead: true, isPinned: false, category: 'primary', account: 'liverpool' },
  { id: 'lfc-sent-2', subject: 'Re: Ticket Allocation', participants: [ticketing, youLiverpool], messages: [{ id: 'ls2', sender: youLiverpool, body: '<p>Please allocate 2 extra tickets for Virgil for the next match.</p>', timestamp: getDate(2) }], timestamp: getDate(2), isRead: true, isPinned: false, category: 'primary', account: 'liverpool' },
  { id: 'lfc-draft-1', subject: '(Draft) Transfer Target List', participants: [youLiverpool], messages: [{ id: 'ld1', sender: youLiverpool, body: '<p>Initial list of summer transfer targets:\n- Centre-Back:\n- Defensive Midfielder:</p>', timestamp: getDate(3) }], timestamp: getDate(3), isRead: true, isPinned: false, category: 'primary', account: 'liverpool' },
  { id: 'lfc-archive-1', subject: 'Welcome to the Team, Arne!', participants: [youLiverpool], messages: [{ id: 'la1', sender: youLiverpool, body: '<p>Welcome to Liverpool FC, Arne! We are all excited to have you.</p>', timestamp: getDate(60) }], timestamp: getDate(60), isRead: true, isPinned: false, category: 'primary', account: 'liverpool', isArchived: true }
);

export const MOCK_THREADS: Thread[] = [
    ...HOGWARTS_THREADS.map(t => ({ ...t, account: 'hogwarts' as const })),
    ...LIVERPOOL_THREADS
];


export const MOCK_CHAT_CONVERSATIONS: ChatConversation[] = [
    {
        id: 'chat-1',
        participant: hermioneGranger,
        messages: [
            { id: 'cm-1', sender: 'other', text: 'Are you going to the library later?', timestamp: getDate(0, { hour: 14, minute: 30 })},
            { id: 'cm-2', sender: 'me', text: 'Yeah, right after Charms. Need to research the cushioning charm.', timestamp: getDate(0, { hour: 14, minute: 31 })},
            { id: 'cm-3', sender: 'other', text: 'Okay, save me a seat! I have a question about the Gamp\'s Law of Elemental Transfiguration.', timestamp: getDate(0, { hour: 14, minute: 32 })},
        ],
        unreadCount: 0,
    },
    {
        id: 'chat-2',
        participant: ronWeasley,
        messages: [
            { id: 'cm-4', sender: 'other', text: 'Chess?', timestamp: getDate(0, { hour: 16, minute: 5 })},
            { id: 'cm-5', sender: 'other', text: 'In the common room?', timestamp: getDate(0, { hour: 16, minute: 5 })},
            { id: 'cm-6', sender: 'me', text: 'You\'re on. Prepare to be destroyed.', timestamp: getDate(0, { hour: 16, minute: 6 })},
        ],
        unreadCount: 2,
    },
    {
        id: 'chat-3',
        participant: ginnyWeasley,
        messages: [
            { id: 'cm-7', sender: 'other', text: 'Did you see the new Cleansweep Eleven? It looks amazing!', timestamp: getDate(1)},
            { id: 'cm-8', sender: 'me', text: 'I know! I wish I could upgrade my Nimbus.', timestamp: getDate(1)},
        ],
        unreadCount: 0,
    }
];

export const MOCK_DRIVE_FILES: DriveFile[] = [
  // Quick Access (simulated by picking a few important files)
  { id: 'df-1', name: 'Q3 Potions Report.docx', type: 'document', owner: severusSnape, lastModified: getDate(1, { hour: 14, minute: 0 }), size: 2300000, isStarred: true, path: '/Reports' },
  { id: 'df-2', name: 'Order of the Phoenix Roster.xlsx', type: 'spreadsheet', owner: albusDumbledore, lastModified: getDate(0, { hour: 11, minute: 30 }), size: 850000, isStarred: true, path: '/Phoenix Docs' },
  { id: 'df-3', name: 'DADA Curriculum.pptx', type: 'presentation', owner: remusLupin, lastModified: getDate(2, { hour: 16, minute: 45 }), size: 5600000, isStarred: false, path: '/Teaching Materials' },
  { id: 'df-4', name: 'Marauders Map Scans', type: 'folder', owner: siriusBlack, lastModified: getDate(5), isStarred: true, path: '/' },

  // Folders
  { id: 'df-5', name: 'Potions Essays', type: 'folder', owner: you, lastModified: getDate(3), isStarred: false, path: '/' },
  { id: 'df-6', name: 'Quidditch Plays', type: 'folder', owner: you, lastModified: getDate(10), isStarred: false, path: '/' },
  { id: 'df-7', name: 'Phoenix Docs', type: 'folder', owner: albusDumbledore, lastModified: getDate(0, { hour: 11, minute: 29 }), isStarred: true, path: '/' },
  
  // Files in root
  { id: 'df-8', name: 'Hogwarts Acceptance Letter.pdf', type: 'pdf', owner: minervaMcGonagall, lastModified: getDate(365 * 7), size: 120000, isStarred: true, path: '/' },
  { id: 'df-9', name: 'Gryffindor Common Room.jpg', type: 'image', owner: you, lastModified: getDate(20), size: 4500000, isStarred: false, path: '/' },
  { id: 'df-10', name: 'Summer Holiday Plans.docx', type: 'document', owner: hermioneGranger, lastModified: getDate(4), size: 15000, isStarred: false, path: '/' },
  { id: 'df-11', name: 'Buckbeak Appeal Draft.docx', type: 'document', owner: rubeusHagrid, lastModified: getDate(150), size: 45000, isStarred: false, path: '/' },
  { id: 'df-12', name: 'Weasley Household Budget.xlsx', type: 'spreadsheet', owner: ronWeasley, lastModified: getDate(8), size: 72000, isStarred: false, path: '/' },
  { id: 'df-13', name: 'Intro to Dark Arts.mov', type: 'video', owner: severusSnape, lastModified: getDate(30), size: 128000000, isStarred: false, path: '/Teaching Materials' },
];