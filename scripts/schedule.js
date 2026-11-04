// Import the JSON formatted data
import { sessions } from "../data/sessions.mjs";
//console.log(sessions);

const destination = document.querySelector("#schedule-here");

sessions.forEach(item => {
    //console.log(item);
    console.log(item.start_time);
    console.log(item.end_time);
    console.log(item.title);
    console.log(item.description);
    //console.log(item.featured_speaker.name);
    //console.log(item.featured_speaker.title);
    //console.log(item.featured_speaker.photo_url);

    const row = document.createElement('tr');

    // Create the first column 
    const time = document.createElement('td');
    time.innerHTML = `<p class="time">${item.start_time} - ${item.end_time}</p>`;

    // Create the second column 
    const topic = document.createElement('td');
    topic.innerHTML = `<p class="title">${item.title}</p> <p>${item.description}</p>`;

    //create the third column
    const speaker = document.createElement('td');
    if (item.featured_speaker === null) {
        console.log('no speaker');
    } else {
        speaker.innerHTML = `
    <p class="name">${item.featured_speaker.name}</p>
    <img src="images/${item.featured_speaker.photo_url}" alt="${item.featured_speaker.name}">
    <p class="desc">${item.featured_speaker.title}</p>
  `;
    }

    row.appendChild(time);
    row.appendChild(topic);
    row.appendChild(speaker);

    destination.appendChild(row);
});