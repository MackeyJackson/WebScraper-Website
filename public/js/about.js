window.addEventListener('scroll', () => {
    const title = document.querySelector('#title');
    const h1 = title.querySelector('h1');
    const h2 = title.querySelector('h2');
    
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    // Calculate opacity based on scroll position
    const fadeInThreshold = 0.2; // Start fading in
    const fadeOutThreshold = 0.8; // Start fading out

    const normalizedScroll = scrollPosition / (windowHeight * 0.5);
    const opacity = Math.max(0, Math.min(1, fadeOutThreshold - normalizedScroll));
    
    h1.style.opacity = opacity;
    h2.style.opacity = opacity;

    // Add some translation effect for smoother motion
    h1.style.transform = `translateY(${(1 - opacity) * 20}px)`;
    h2.style.transform = `translateY(${(1 - opacity) * 20}px)`;
});
document.addEventListener('scroll', () => {
    const container = document.querySelector('#container');
    const containerPosition = container.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (containerPosition < windowHeight * 0.5) { // Trigger after 1.5 viewport heights
        container.classList.add('visible'); // Add the class to trigger animations
    } else {
        container.classList.remove('visible'); // Remove the class if it's out of view
    }
});
document.addEventListener('scroll', () => {
    const container = document.querySelector('#container2');
    const containerPosition = container.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (containerPosition < windowHeight * 0.5) { // Trigger after 1.5 viewport heights
        container.classList.add('visible'); // Add the class to trigger animations
    } else {
        container.classList.remove('visible'); // Remove the class if it's out of view
    }
});
document.addEventListener('scroll', () => {
    const container = document.querySelector('#container3');
    const containerPosition = container.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (containerPosition < windowHeight * 0.5) { // Trigger after 1.5 viewport heights
        container.classList.add('visible'); // Add the class to trigger animations
    } else {
        container.classList.remove('visible'); // Remove the class if it's out of view
    }
});