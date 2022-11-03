
const dates = $('.timeline-date')
const dateClose = $('.date-content svg')
var pageOpen = gsap.timeline()
var pageClose = gsap.timeline()
var date =

$(dates).click((e) => {
    date = $(e.target).attr('data-target')
    pageTrans('Open')
})

$(dateClose).click(() => {
    pageTrans('Close')
})

function pageTrans(direction) {
    if (pageClose.isActive() || pageOpen.isActive()) return;

    var rule = CSSRulePlugin.getRule(".date-content h1::after");
    var rule2 = CSSRulePlugin.getRule(".date-content ul h1::after");

    if (direction == 'Open') {
        pageOpen.play()

        pageOpen
            .fromTo(date, {zIndex: -1}, {zIndex: 2, duration: 0.1})
            .fromTo(date, {backgroundColor: '#1f1f1f00'}, {backgroundColor: 'rgba(255, 255, 255)', duration: 0.1})
            .fromTo(date + ' .date', {color: '#1f1f1f00'}, {color: '#1f1f1f', duration: 0.5})
            .fromTo(rule, {width: '0'}, {width: '80%', duration: 1, delay: 0.5})
            .fromTo(date + ' p', {margin: '-15em 0', height: 0}, {margin: '0 0', height: '7em', duration: 0.6, delay: 0.1})
            .fromTo(date + ' p', {color: '#1f1f1f00'}, {color: '#1f1f1f', duration: 0.5, delay: 0.1})
            .fromTo(date + ' ul h1', {color: '#1f1f1f00'}, {color: '#1f1f1f', duration: 0.5}, '-=0.2')
            .fromTo(rule2, {backgroundColor: 'transparent'}, {backgroundColor: '#1f1f1f', duration: 0.5}, '-=0.2')
            .fromTo(date + ' ul', {color: '#1f1f1f00'}, {color: '#1f1f1f', duration: 0.5}, '-=0.2')
            .fromTo(date + ' svg', {stroke: '#1f1f1f00'}, {stroke: '#1f1f1f', duration: 1}, '-=1')
    } else {
        pageClose.play()

        pageClose
            .fromTo(date + ' ul', {color: '#1f1f1f'}, {color: '#1f1f1f00', duration: 0.2})
            .fromTo(rule2, {backgroundColor: '#1f1f1f'}, {backgroundColor: 'transparent', duration: 0.2})
            .fromTo(date + ' ul h1', {color: '#1f1f1f'}, {color: '#1f1f1f00', duration: 0.2})
            .fromTo(date + ' p', {color: '#1f1f1f'}, {color: '#1f1f1f00', duration: 0.2})
            .fromTo(date + ' p', {margin: '0 0', height: '7em'}, {margin: '-15em 0', height: 0, duration: 0.5})
            .fromTo(rule, {width: '80%'}, {width: '0', duration: 0.2})
            .fromTo(date + ' .date', {color: '#1f1f1f'}, {color: '#1f1f1f00', duration: 0.2})
            .fromTo(date, {backgroundColor: 'rgba(255, 255, 255)'}, {backgroundColor: '#1f1f1f00', duration: 0.2})
            .fromTo(date, {zIndex: 2}, {zIndex: -10, duration: 1})
    }
}