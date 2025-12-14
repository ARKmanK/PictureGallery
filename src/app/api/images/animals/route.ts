import { NextResponse } from 'next/server'

const animals = [
	{
		id: 1,
		name: 'Лев',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/600px-Lion_waiting_in_Namibia.jpg',
		type: 'animals',
	},
	{
		id: 2,
		name: 'Тигр',
		image:
			'https://www.morningchronicle.co.uk/media/shared/articles/86/47/69/Trio-of-rare-tiger-cubs-spotted-in--107242.jpg',
		type: 'animals',
	},
	{
		id: 3,
		name: 'Слон',
		image:
			'https://img.freepik.com/premium-photo/african-elephant-stands-pulling-grass-from-shallows_1048944-30069477.jpg?semt=ais_hybrid&w=740',
		type: 'animals',
	},
	{
		id: 4,
		name: 'Жираф',
		image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0b/1f/da/44.jpg',
		type: 'animals',
	},
	{
		id: 5,
		name: 'Зебра',
		image: 'https://cdn.telegram-store.com/channels/factorio-facts/469-2024-07-14-1-.jpg',
		type: 'animals',
	},
	{
		id: 6,
		name: 'Обезьяна',
		image:
			'https://avatars.mds.yandex.net/i?id=27e5040e4cbef9277b14612f9e57cb8c_l-5288364-images-thumbs&n=13',
		type: 'animals',
	},
	{
		id: 7,
		name: 'Панда',
		image:
			'https://зеленоград-инфо.рф/wp-content/uploads/2024/03/8847d1bc59afaf314d93f6a4784e6e2c.jpg',
		type: 'animals',
	},
	{
		id: 8,
		name: 'Крокодил',
		image:
			'https://images.theconversation.com/files/470483/original/file-20220623-51187-mpi2xr.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=600&h=400&fit=crop&dpr=1',
		type: 'animals',
	},
	{
		id: 9,
		name: 'Бегемот',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Hipop%C3%B3tamo_%28Hippopotamus_amphibius%29%2C_parque_nacional_de_Chobe%2C_Botsuana%2C_2018-07-28%2C_DD_82.jpg/500px-Hipop%C3%B3tamo_%28Hippopotamus_amphibius%29%2C_parque_nacional_de_Chobe%2C_Botsuana%2C_2018-07-28%2C_DD_82.jpg',
		type: 'animals',
	},
	{
		id: 10,
		name: 'Орёл',
		image:
			'https://www.brcc.kz/wp-content/uploads/2023/11/%D1%81%D1%82%D1%80250-%D0%BD%D0%B8%D0%B7-768x441.jpg',
		type: 'animals',
	},
	{
		id: 11,
		name: 'Дельфин',
		image:
			'https://img.freepik.com/free-photo/dolphin-jumping-out-water_23-2150884533.jpg?semt=ais_hybrid&w=740',
		type: 'animals',
	},
	{
		id: 12,
		name: 'Черепаха',
		image: 'https://i.pinimg.com/736x/7c/56/3f/7c563ff1fbb9f9f7e310595751b9906d.jpg',
		type: 'animals',
	},
]

export async function GET() {
	return NextResponse.json(animals)
}
