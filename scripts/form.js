const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);

console.log(myInfo.get('first'));
console.log(myInfo.get('last'));
console.log(myInfo.get('phone'));
console.log(myInfo.get('email'));
console.log(myInfo.get('url'));
console.log(myInfo.get('who'));
console.log(myInfo.get('comments'));

document.querySelector('#results').innerHTML=`
<p><span>Application form:</span> ${myInfo.get('first')} ${myInfo.get('last')}</p>
<p><span>Applying as:</span> ${myInfo.get('who')}</p>
<p><span>Your Phone:</span> ${myInfo.get('phone')}</p>
<p><span>Your email:</span> ${myInfo.get('email')}</p>
<p><span>Portfolio link:</span> ${myInfo.get('url')}</p>
<p><span>Comments:</span> ${myInfo.get('comments')}</p>

`