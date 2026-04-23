const campgrounds = [
    {
        id: 1,
        name: "Åhus Camping",
        location: "Åhus",
        rating: 4.5
    },
    {
        id: 2,
        name: "Böda Sand",
        location: "Öland",
        rating: 4.9
    },
    {
        id: 3,
        name: "Kronocamping Saxnäs",
        location: "Öland",
        rating: 4.4
    }
];

export function getAllCampgrounds(req, res) {
    res.json(campgrounds);
}

export function createCampground(req, res) {
    const newCampground = req.body;

    campgrounds.push(newCampground);

    res.status(201).json(newCampground);
}


