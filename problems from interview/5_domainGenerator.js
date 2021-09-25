function urlGenerator(domain) {
  return function (url) {
    return `https://${url}.${domain}`;
  };
}

const ruDomain = urlGenerator("ru");
console.log(ruDomain("mail"));
console.log(ruDomain("google"));

const usDomain = urlGenerator("us");
console.log(usDomain("zoom"));