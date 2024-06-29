export class ReviewModel {
	constructor(
		private id: number,
		private userEmail: string,
		private date: string,
		private rating: number,
		private bookId: number,
		private reviewDescription?: string
	) {}
}
