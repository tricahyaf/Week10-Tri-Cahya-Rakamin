const data = [
    {
        title: 'cars',
        genres: 'animation',
        year: '2006'
    },
    {
        title: 'planes',
        genres: 'animation',
        year: '2013'
    }
]

class Movie {
    static getData() {
        return data
    }

    static getOneData(id) {
        return data[id]
    }

    static addData(payload) {
        console.log(payload)
        data.push(payload)
        return data
    }
}

module.exports = Movie