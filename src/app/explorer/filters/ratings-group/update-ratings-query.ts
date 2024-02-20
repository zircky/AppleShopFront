export function updateRatingsQuery(currentRatings: string, newRating: string) {
	const ratingsArray = currentRatings ? String(currentRatings).split('|') : []

	const ratingIndex = ratingsArray.indexOf(newRating)

	if (ratingIndex === -1) {
		ratingsArray.push(newRating)
	} else {
		ratingsArray.splice(ratingIndex, 1)
	}

	return ratingsArray.join('|')
}
