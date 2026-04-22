export function getAllCampgrounds(req, res) {
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

    res.json(campgrounds);
}       
    
