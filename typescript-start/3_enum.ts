enum Membership {
    Simple,
    Standart,
    Premium,
}

const membership = Membership.Standart
console.log(membership)

const membershipReverse = Membership[2]
console.log(membershipReverse)

enum SocialMedia {
    Facebook = "Facebook",
    Vk = "Vk",
    Insta = "Insta",
}

const socialMedia = SocialMedia.Facebook
console.log(socialMedia)