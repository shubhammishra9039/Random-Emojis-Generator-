let emojiitem = document.querySelector("#emojiitem");
let nameitem = document.querySelector("#name");

async function getEmoji() {
  let response = await fetch(
    "https://emoji-api.com/emojis?access_key=c37c05d28a25c43e359dd9e7a5b3cb0df375439d"
  );

  let data = await response.json();
  let index = Math.floor(Math.random(1800) * 1000);

  let emoji = data[index].character;
  let emojiName = data[index].unicodeName;
  emojiName = emojiName.substring(5);
  emojiitem.innerHTML = emoji;
  nameitem.innerHTML = emojiName;
}

function display() {
  getEmoji();
}
