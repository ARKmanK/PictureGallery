import { NextResponse } from 'next/server'

interface IWolfImage {
	id: number
	name: string
	image: string
	location: string
	date: string
	tags: string[]
}

const wolfImages: IWolfImage[] = [
	{
		id: 1,
		name: 'Серый волк в лесу',
		image:
			'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_66190af25dbdb25d86576e91_66190b17508d8b4f819a1a4c/scale_1200',
		location: 'Леса, Канада',
		date: '2024-01-15',
		tags: ['хищник', 'лес', 'природа', 'дикое животное'],
	},
	{
		id: 2,
		name: 'Волчья стая',
		image:
			'https://avatars.mds.yandex.net/i?id=4c355dbde4f3945c3fe8ac41de38a028_l-3308358-images-thumbs&n=13',

		location: 'Тайга, Россия',
		date: '2024-01-10',
		tags: ['стая', 'снег', 'зима', 'волки'],
	},
	{
		id: 3,
		name: 'Одинокий волк',
		image: 'https://i.pinimg.com/736x/61/78/e8/6178e8a96f014bfd1e14ae398bd16681.jpg',

		location: 'Горы, США',
		date: '2024-01-05',
		tags: ['горы', 'закат', 'волк', 'пейзаж'],
	},
	{
		id: 4,
		name: 'Волк в движении',
		image:
			'https://avatars.mds.yandex.net/i?id=191fac442f6343753b4eedf0f847bc64db387e49-9198264-images-thumbs&n=13',

		location: 'Поля, Монголия',
		date: '2024-01-01',
		tags: ['бег', 'поле', 'движение', 'быстрое животное'],
	},
	{
		id: 5,
		name: 'Молодой волк',
		image:
			'https://i.okcdn.ru/i?r=CICUQJv1RQZIqEhgaodSBVRECNB09Vi5DdlPJgjVZehsIXaclJ2EpNpSv7QP_Cchyr8_C34My23TV3G2hCY5aqnjjJ9DdUCDZ2YKM9VmsfDgg0epChh8HEzkQiV9p0a9h1bwvMxj3beD-xcaXIkaMRnCX8SNoTuWNcosa3CnbRn06PdLtTx4iXVQnCMQLClKg_hsNQi-AAAAKQ',

		location: 'Национальный парк, Польша',
		date: '2023-12-25',
		tags: ['молодой', 'исследование', 'парк', 'волчонок'],
	},
	{
		id: 6,
		name: 'Волк зимой',
		image: 'https://i.pinimg.com/736x/2e/0d/24/2e0d246bf4b2f027d2a4098cf855664e.jpg',

		location: 'Скандинавия',
		date: '2023-12-20',
		tags: ['зима', 'снег', 'холод', 'выживание'],
	},
	{
		id: 7,
		name: 'Волк на охоте',
		image:
			'https://mooir.ru/forum/uploads/monthly_2025_07/7.png.c784b52b431378bb8eae884695d0513a.png',

		location: 'Аляска, США',
		date: '2023-12-15',
		tags: ['охота', 'хищник', 'добыча', 'инстинкт'],
	},
	{
		id: 8,
		name: 'Волк у водоема',
		image: 'https://loshadiya.ru/uploads/forum/images/2013-05/thumbs/1368349449728592600.jpg',

		location: 'Река, Финляндия',
		date: '2023-12-10',
		tags: ['вода', 'река', 'питье', 'волк'],
	},
	{
		id: 9,
		name: 'Волк в тумане',
		image: 'https://i.pinimg.com/736x/41/ce/9e/41ce9ef55346030bd0aa206d2f5ad883.jpg',

		location: 'Долина, Шотландия',
		date: '2023-12-05',
		tags: ['туман', 'утро', 'таинственно', 'атмосфера'],
	},
	{
		id: 10,
		name: 'Волк с добычей',
		image: 'https://i.pinimg.com/736x/ea/e9/76/eae97692b2ebe3ce1c83f1f068c34b0c.jpg',

		location: 'Степь, Украина',
		date: '2023-11-30',
		tags: ['добыча', 'пища', 'выживание', 'волк'],
	},
	{
		id: 11,
		name: 'Семейство волков',
		image: 'https://i.pinimg.com/736x/78/63/dc/7863dcbbd60ab254d30e1cc46ef092be.jpg',

		location: 'Лес, Германия',
		date: '2023-11-25',
		tags: ['семья', 'логова', 'щенки', 'волки'],
	},
	{
		id: 12,
		name: 'Волк под луной',
		image:
			'https://img.freepik.com/premium-photo/lone-wolf-howls-moon_1074281-10480.jpg?semt=ais_hybrid&w=740&q=80',

		location: 'Пустыня, Аризона',
		date: '2023-11-20',
		tags: ['луна', 'вой', 'ночь', 'волк'],
	},
]

export async function GET() {
	return NextResponse.json(wolfImages)
}
