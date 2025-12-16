// types/images.ts
export interface IImage {
	id: number
	name: string
	image: string
	type: string
	category?: string
	[key: string]: any
}
