//source
//https://medium.com/@Elijah_Meeks/interactive-applications-with-react-d3-f76f7b3ebc71


import React, { Component } from 'react'
import { scaleLinear } from 'd3-scale'
import { max } from 'd3-array'
import { select } from 'd3-selection'
class BarChart extends Component {
    constructor(props) {
        super(props)
        this.createBarChart = this.createBarChart.bind(this)
    }
    componentDidMount() {
        this.createBarChart()
    }
    componentDidUpdate() {
        this.createBarChart()
    }
    createBarChart() {
        const node = this.node
        const dataMax = max(this.props.data)
        const yScale = scaleLinear()
            .domain([0, dataMax])
            .range([0, this.props.size[1]])
        select(node)
            .selectAll('rect')
            .data(this.props.data)
            .enter()
            .append('rect')

        select(node)
            .selectAll('rect')
            .data(this.props.data)
            .exit()
            .remove()

        select(node)
            .selectAll('rect')
            .data(this.props.data)
            .attr("fill", function (d) {
                return "rgb(0, 0, " + (d * 10) + ")";
            })
            .attr('margin', 10)
            .attr('x', (d, i) => i * 30)
            .attr('y', d => this.props.size[1] - yScale(d))
            .attr('height', d => yScale(d))
            .attr('width', 25)
    }
    render() {
        return <svg ref={node => this.node = node}
            width={250} height={250}>
        </svg>
    }
}
export default BarChart