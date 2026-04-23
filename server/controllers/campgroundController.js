let campgrounds = [
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
    const { id, name, location, rating } = req.body;

    if (!name || !location || !rating === undefined) {
        return res.status(400).json({
            error: "name, location and rating are required"
        });
    }

    if (typeof rating !== "number") {
        return res.status(400).json({
            error: "rating must be a number"
        });
    }

    if (rating < 1 || rating > 5) {
        return res.status(400).json({
            error: " rating must be between 1 and 5"
        });
    }

    const newCampground = {
        id,
        name,
        location,
        rating
    };

    campgrounds.push(newCampground);

    res.status(201).json(newCampground)
}

export function getCampgroundById(req, res) {
    const id = Number(req.params.id);

    const campground = campgrounds.find(
        (campground) => campground.id === id
    );

    if (!campground) {
        return res.status(404).json({
            error: "Campground not found"
        });
    }

    res.json(campground);
}

export function deleteCampground(req, res) {
    const id = Number(req.params.id);

    const campgroundExists = campgrounds.find(
        (campground) => campground.id === id
    );

    if (!campgroundExists) {
        return res.status(404).json({
            error: "Campground not found"
        });
    }

    campgrounds = campgrounds.filter(
        (campground) => campground.id !== id
    );

    res.status(204).send();
}


