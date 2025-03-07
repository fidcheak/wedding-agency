document.addEventListener('DOMContentLoaded', function () {
	const slides = document.querySelectorAll('.slider img') // Получаем все слайды (изображения)
	const prevButton = document.querySelector('.prev') // Кнопка "Назад"
	const nextButton = document.querySelector('.next') // Кнопка "Вперед"
	let currentIndex = 0 // Текущий индекс отображаемого слайда
	let slideInterval // Переменная для хранения интервала автоматического переключения

	// Функция отображения слайда по индексу
	function showSlide(index) {
		slides.forEach((slide, i) => {
			slide.style.display = i === index ? 'block' : 'none' // Показываем только текущий слайд
		})

		// Управление видимостью кнопок
		prevButton.style.visibility = index === 0 ? 'hidden' : 'visible' // Скрываем "Назад" на первом слайде
		nextButton.style.visibility =
			index === slides.length - 1 ? 'hidden' : 'visible' // Скрываем "Вперед" на последнем слайде
	}

	// Функция переключения на следующий слайд
	function nextSlide() {
		currentIndex = (currentIndex + 1) % slides.length // Увеличиваем индекс (зацикливаем)
		showSlide(currentIndex)
	}

	// Функция переключения на предыдущий слайд
	function prevSlide() {
		currentIndex = (currentIndex - 1 + slides.length) % slides.length // Уменьшаем индекс (зацикливаем)
		showSlide(currentIndex)
	}

	// Обработчик клика по кнопке "Назад"
	prevButton.addEventListener('click', function () {
		prevSlide()
		restartAutoSlide()
	})

	// Обработчик клика по кнопке "Вперед"
	nextButton.addEventListener('click', function () {
		nextSlide()
		restartAutoSlide()
	})

	// Функция автоматического переключения слайдов
	function startAutoSlide() {
		slideInterval = setInterval(nextSlide, 3000) // Переключение каждые 3 секунды
	}

	// Функция перезапуска автоматического переключения слайдов
	function restartAutoSlide() {
		clearInterval(slideInterval) // Останавливаем текущий интервал
		startAutoSlide() // Запускаем заново
	}

	showSlide(currentIndex) // Отображаем первый слайд при загрузке страницы
	startAutoSlide() // Запускаем автоматическое переключение
})
