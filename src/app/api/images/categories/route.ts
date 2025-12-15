import { NextResponse } from 'next/server'

interface ICategory {
	id: number
	name: string
	image: string
	type: string
}

const categories: ICategory[] = [
	{
		id: 1,
		name: 'Животные',
		image:
			'https://img.freepik.com/free-photo/wild-deer-nature_23-2151474266.jpg?semt=ais_hybrid&w=740&q=80',
		type: 'animals',
	},
	{
		id: 2,
		name: 'Природа',
		image:
			'https://img.freepik.com/free-photo/beautiful-winter-landscape_23-2151901466.jpg?semt=ais_hybrid&w=740',
		type: 'nature',
	},
	{
		id: 3,
		name: 'Спорт',
		image:
			'https://turaturk.com/files/uploads/news/default/20240511-spor-yapmanin-zihinsel-saglik-uzerindeki-etkileri-zihinsel-keskinligi-artiriyor-139334-579c6a7b39108dd8a6b7.jpg',
		type: 'sport',
	},
	{
		id: 4,
		name: 'Искусство',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/El_Olimpo_batalla_con_los_gigantes.jpg/640px-El_Olimpo_batalla_con_los_gigantes.jpg',
		type: 'art',
	},
	{
		id: 5,
		name: 'Самолеты',
		image: 'https://static.mk.ru/upload/article_images/c8/ee/5c/495_35990.jpg',
		type: 'planes',
	},
	{
		id: 6,
		name: 'Автомобили',
		image:
			'https://i.ytimg.com/vi/iv2eyKN9Hwg/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGFcgYChlMA8=&rs=AOn4CLCoA0IZJKESvMv89EM2KfUQKxdN2Q',
		type: 'cars',
	},
	{
		id: 7,
		name: 'Лодки',
		image: 'https://rus-touristo.ru/images/Cranchi-67-Sessantasette-575x319.png',
		type: 'boats',
	},
	{
		id: 8,
		name: 'Рисование',
		image: 'https://static.tildacdn.pub/tild6165-6266-4365-a334-343734393564/scale_1200.jpg',
		type: 'drawing',
	},
	{
		id: 9,
		name: 'Еда',
		image:
			'https://media.zenfs.com/en/the_brighter_side_of_news_articles_781/e7c5a976bbaee53d6f0990cdf7596e72',
		type: 'food',
	},
	{
		id: 10,
		name: 'Воздушные шары',
		image:
			'https://blog.camerasecuritynow.com/wp-content/uploads/2024/06/iStock-1417167461-768x512.jpg',
		type: 'air balloons',
	},
	{
		id: 11,
		name: 'Квадроциклы',
		image:
			'https://ekaterinburg.mototrade.su/upload/dev2fun.imagecompress/webp/resize_cache/iblock/7e3/600_600_1/6r4k3nt07vnev5vak2t04vnn1xx3ly10.webp',
		type: 'ATV',
	},
	{
		id: 12,
		name: 'Отдых',
		image: 'https://i.pinimg.com/736x/6a/8c/d7/6a8cd7ef6320178bd30a50a5c657547f.jpg',
		type: 'vacation',
	},
	{
		id: 13,
		name: 'Каньон',
		image:
			'https://www.shutterstock.com/image-photo/great-view-grand-canyon-national-600nw-2447217763.jpg',
		type: 'canyon',
	},
]

export async function GET() {
	return NextResponse.json(categories)
}
