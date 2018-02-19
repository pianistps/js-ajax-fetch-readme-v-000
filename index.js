const app = "I don't do much.";

const token = 'ed028c58b7133bf279c5d53086f9e45c10e691de'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
