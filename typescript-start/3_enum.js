var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["Standart"] = 1] = "Standart";
    Membership[Membership["Premium"] = 2] = "Premium";
})(Membership || (Membership = {}));
var membership = Membership.Standart;
console.log(membership);
var membershipReverse = Membership[2];
console.log(membershipReverse);
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["Facebook"] = "Facebook";
    SocialMedia["Vk"] = "Vk";
    SocialMedia["Insta"] = "Insta";
})(SocialMedia || (SocialMedia = {}));
var socialMedia = SocialMedia.Facebook;
console.log(socialMedia);
