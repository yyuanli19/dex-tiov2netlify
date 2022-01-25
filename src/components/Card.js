import * as React from "react"
import { StyledCard } from './styles/Card.styled'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function Card({ item: { id, title, body, hero_image }}) {

  return (
    <StyledCard layout={id % 2 === 0 && 'row-reverse'}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>

      <div>
          <img src={`./images/${hero_image.base}`} alt='' />
          {/* <GatsbyImage
              image={image}
              alt=''
          />
            */}
      </div>
    </StyledCard>
  )
}
