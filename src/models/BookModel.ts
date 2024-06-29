export class BookModel {
	constructor(
		private id: number,
		private title: string,
		private author?: string,
		private description?: string,
		private copies?: number,
		private copiesAvailable?: number,
		private category?: string,
		private img?: string
	) {}
}
