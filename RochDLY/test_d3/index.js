const r = Math.min(window.innerWidth, window.innerHeight) / 2,
    secMinScale = d3.scaleLinear().domain([0, 60]).range([0, 360]),
    hourScale = d3.scaleLinear().domain([0, 12]).range([0, 360])

const pointersRelDimensions = [
    { class: 'hour', width: 0.05, height: 0.55 },
    { class: 'min', width: 0.05, height: 0.85 },
    { class: 'sec', width: 0.02, height: 0.85 }
]

// Size canvas
const svg = d3.select('#canvas')
    .attr('width', r * 2)
    .attr('height', r * 2)
    .attr('viewBox', `${-r} ${-r} ${r*2} ${r*2}`)

// Add background
svg.append('circle').classed('background', true)
    .attr('cx', 0)
    .attr('cy', 0)
    .attr('r', r)

// Add axis
svg.append('g').classed('axis', true)
    .call(d3.axisRadialInner(
            hourScale.copy().range([0, 2 * Math.PI]),
            r - 1
        )
        .ticks(12)
        .tickSize(12)
    )

svg.append('g').classed('minor-ticks', true)
    .call(d3.axisRadialInner(
            secMinScale.copy().range([0, 2 * Math.PI]),
            r - 1
        )
        .ticks(60)
        .tickSize(6)
    )

// Add pointers
svg.append('g').classed('pointers', true)
    .attr('transform', `scale(${r})`)
    .selectAll('rect')
        .data(pointersRelDimensions)
        .enter()
            .append('rect')
            .attr('class', d=> d.class)
            .attr('x', d => -d.width/2)
            .attr('y', d => -d.height + d.width/2)
            .attr('width', d => d.width)
            .attr('height', d => d.height)
            .attr('rx', 0.02)
            .attr('ry', 0.03)

// Add center
svg.select('.pointers')
    .append('circle').classed('center', true)
        .attr('cx', 0)
        .attr('cy', 0)
        .attr('r', 0.02)

// Kick-off clock
framed()

function framed() {
    const dt = new Date()

    const ms = dt.getMilliseconds(),
        secs = dt.getSeconds() + ms/1000,
        mins = dt.getMinutes() + secs/60,
        hours = dt.getHours()%12 + mins/60

    d3.select('.pointers .hour').attr('transform', `rotate(${hourScale(hours)})`)
    d3.select('.pointers .min').attr('transform', `rotate(${secMinScale(mins)})`)
    d3.select('.pointers .sec').attr('transform', `rotate(${secMinScale(secs)})`)

    requestAnimationFrame(framed)
}