$(() => {
    $('.1-0').on('click', () => {
        $('#1-0').fadeIn('slow');
    })

    $('.1-1').on('click', () => {
        $('#1-1').fadeIn('slow');
    })

    $('.1-1-a').on('click', () => {
        $('#1-1-a').fadeIn('slow');
        $('#1-1-b').fadeOut('slow');
    })

    $('.1-1-b').on('click', () => {
        $('#1-1-b').fadeIn('slow');
        $('#1-1-a').fadeOut('slow');
    })

    $('.1-1-c').on('click', () => {
        $('#1-1-c').fadeIn('slow');
        $('#1-1-a').fadeOut('slow');
    })

    $('.1-2').on('click', () => {
        $('#1-2').fadeIn('slow');
    })

    $('.1-2-a').on('click', () => {
        $('#1-2-a').fadeIn('slow');
        $('#1-2-b').fadeOut('slow');
    })

    $('.1-2-b').on('click', () => {
        $('#1-3').fadeIn('slow');
        $('#1-2-a').fadeOut('slow');

    })

    $('.1-2-back').on('click', () => {
        $('#1-2-a').fadeOut('slow');
    })

    $('.1-3').on('click', () => {
        $('#1-3').fadeIn('slow');
    })

    $('.1-3-a').on('click', () => {
        $('#1-3-a').fadeIn('slow');
        $('#1-3-b').fadeOut('slow');
    })

    $('.1-3-b').on('click', () => {
        $('#1-3-b').fadeIn('slow');
        $('#1-3-a').fadeOut('slow');
    })

    $('.1-3-back').on('click', () => {
        $('#1-3-b').fadeOut('slow');
    })

    $('.1-4').on('click', () => {
        $('#1-4').fadeIn('slow');
    })

    $('.1-4-a').on('click', () => {
        $('#1-4-a').fadeIn('slow');
        $('#1-5').fadeOut('slow');
    })

    $('.1-5').on('click', () => {
        $('#1-5').fadeIn('slow');
        $('#1-4-a').fadeOut('slow');
    })

    $('.end').on('click', () => {
        $('#end').fadeIn('slow');
    })

})