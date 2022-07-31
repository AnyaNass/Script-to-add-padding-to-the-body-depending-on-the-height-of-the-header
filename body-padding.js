const { height: pageHeaderHeight } = document
	.querySelector(".header") // подставляете класс вашего хедера
	.getBoundingClientRect();

document.body.style.paddingTop = `${pageHeaderHeight}px`;