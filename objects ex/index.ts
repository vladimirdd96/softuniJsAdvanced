let lengthAlphabeticSort = (a, b) => a.length - b.length || a.localeCompare(b)

function usernames(input: string[]) {
    let names = ""

    let sortedUsers = input.sort(lengthAlphabeticSort)
    for (let user of sortedUsers) {
        if (!names.includes(user)) {
            names = `${user}`
        }
        console.log(names)
    }
}

console.log(usernames(['Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston']
))