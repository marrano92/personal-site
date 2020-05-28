if (typeof window !== 'undefined' && document) {
    // Update the document title using the browser API
    document.addEventListener('click', function (event) {
        // If the clicked element doesn't have the right selector, bail

        if (!event.target.matches('#nav-icon')) return;
        document.querySelector('#nav-icon').classList.toggle('open');
        document.querySelector('.menuDiv').classList.toggle('is-none');
        document.querySelector('.appHeader').classList.add('p-fixed');

    }, false);
}
