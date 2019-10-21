let RandomDate = () => {
    const months = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec'];
  
    let randomMonth = months[Math.floor(Math.random() * 12)];
    return `${randomMonth} ${Math.ceil(Math.random() * 31)}, ${Math.ceil(Math.random() * 2) + 2017}`;
};

let RandomName = () => {
    const firstNames = ['Daron','Dan','Swefski','May','Author','Julia','Pon','Tarro','Envy','Lust','Lunia','Ron','Tinny'];
    const lastNames = ['Smith','Faber','Welthy','December','White','Denney','Tomato','Conny','Envy','Lust','Fon','Jocuse','Mini'];

    let randomName = `${firstNames[Math.floor(Math.random() * 13)]} ${lastNames[Math.floor(Math.random() * 13)]}`;
    return `${randomName} `;
};

let RandomRate = () => {
    return Math.floor(Math.random() * (40) + 10) / 10;
};

let RandomMovie = () => {
    const movies = ['Joker', 'The Elephant Queen', 'The Ghost in Shell', 'CROPSEY', 'US', 'IT'];
    return movies[(Math.floor(Math.random() * 6))];
};

let RandomRank = () => {
    const ranks = ['','1'];
    return ranks[(Math.floor(Math.random() * 2))];
};

let RandomPhoto = () => {
    const frontPath = 'https://hrr41-fec-img.s3-us-west-1.amazonaws.com/user_pics';
    return `${frontPath}/${Math.floor(Math.random() * 14)}.png`;
};

let RandomPublication = () => {
    const publications = ['The Queen', 'CNN.com', 'Top Topic', 'Hiiit', 'GNet', 'Lone Wolf', 'Just Me'];
    return publications[Math.floor(Math.random() * 7)];
};

module.exports = {
    RandomMovie,
    RandomDate,
    RandomName,
    RandomRank,
    RandomRate,
    RandomPhoto,
    RandomPublication
}