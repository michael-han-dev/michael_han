import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, timeline, description, imgUrl, href}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <a href={href} target="_blank"><img src={imgUrl}/></a>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <h5>{timeline}</h5>
          <span>{description}</span>
          <a href={href} target="_blank"><h2>↗</h2></a>
        </div>
      </div>
    </Col>
  )
}