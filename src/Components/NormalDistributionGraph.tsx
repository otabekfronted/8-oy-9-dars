import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
interface DataPoint {
  x: number;
  y: number;
}

interface ColorSegment {
  range: [number, number];
  color: string;
}

const NormalDistributionGraph: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [resultX, setResultX] = useState(1.2);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = 400;
    const height = 300;
    const margin = { top: 20, right: 20, bottom: 40, left: 40 };

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .style("overflow", "visible");

    const xScale = d3
      .scaleLinear()
      .domain([-3, 3])
      .range([margin.left, width - margin.right]);

    const yScale = d3
      .scaleLinear()
      .domain([0, 1])
      .range([height - margin.bottom, margin.top]);

    const normalDistribution = (x: number): number =>
      (1 / Math.sqrt(2 * Math.PI)) * Math.exp(-0.5 * x * x);

    const lineGenerator = d3
      .line<DataPoint>()
      .x((d) => xScale(d.x))
      .y((d) => yScale(d.y))
      .curve(d3.curveBasis);

    const data: DataPoint[] = d3
      .range(-3, 3.01, 0.1)
      .map((x) => ({ x, y: normalDistribution(x as number) }));

    svg
      .append("path")
      .datum(data)
      .attr("d", lineGenerator)
      .attr("fill", "none")
      .attr("stroke", "#FFD700")
      .attr("stroke-width", 2);

    const colorSegments: ColorSegment[] = [
      { range: [-3, -1], color: "red" },
      { range: [-1, 1], color: "orange" },
      { range: [1, 3], color: "green" },
    ];

    colorSegments.forEach(({ range, color }) => {
      const segmentData = data.filter(
        (d) => d.x >= range[0] && d.x <= range[1]
      );
      svg
        .append("path")
        .datum(segmentData)
        .attr("d", lineGenerator)
        .attr("fill", "none")
        .attr("stroke", color)
        .attr("stroke-width", 2);
    });

    const drawResultLine = (x: number) => {
      svg.selectAll(".result-line").remove();
      svg.selectAll(".result-text").remove();

      svg
        .append("line")
        .attr("class", "result-line")
        .attr("x1", xScale(x))
        .attr("x2", xScale(x))
        .attr("y1", yScale(0))
        .attr("y2", yScale(normalDistribution(x)))
        .attr("stroke", "blue")
        .attr("stroke-dasharray", "4 2")
        .attr("stroke-width", 2);

      svg
        .append("text")
        .attr("class", "result-text")
        .attr("x", xScale(x) + 10)
        .attr("y", yScale(normalDistribution(x)) - 10)
        .text("90 фоиз иштирокчилардан")
        .attr("fill", "#333")
        .attr("font-size", "12px");
      svg
        .append("text")
        .attr("class", "result-text")
        .attr("x", xScale(x) + 10)
        .attr("y", yScale(normalDistribution(x)) + 5)
        .text("яхшироқ натижа")
        .attr("fill", "#333")
        .attr("font-size", "12px");
    };

    drawResultLine(resultX);

  
    svg
      .on("mousemove", (event) => {
        const [x] = d3.pointer(event);
        const newX = xScale.invert(x);
        if (newX >= -3 && newX <= 3) {
          setResultX(newX);
          drawResultLine(newX);
        }
      })
      .on("mouseleave", () => {
        setResultX(1.2);
        drawResultLine(1.2);
      });
  }, [resultX]);

  return <svg ref={svgRef}></svg>;
};

export default NormalDistributionGraph;
